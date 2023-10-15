import crypto from 'crypto'
import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb'
import { redirect } from 'next/navigation'
import { E2EResultStatus } from '@/app/enum/e2eResultStatus'
import { EnvStatus } from '@/app/enum/envStatus'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

export default async function Home() {
  async function create(formData: FormData) {
    'use server'

    dayjs.extend(utc)
    dayjs.extend(timezone)
    dayjs.tz.setDefault('Asia/Tokyo')

    const name = formData.get('name') ?? ''
    const branch = formData.get('branch') ?? ''
    const url = formData.get('url') ?? ''

    const client = new DynamoDBClient({ region: 'ap-northeast-1', endpoint: 'http://host.docker.internal:4566' })
    const command = new PutItemCommand({
      TableName: 'TemporaryEnvironment',
      Item: {
        id: { S: crypto.randomUUID() },
        name: { S: name.toString() },
        branch: { S: branch.toString() },
        url: { S: url.toString() },
        status: { S: EnvStatus.InProgress },
        e2e: { S: E2EResultStatus.Untested },
        priority: { S: crypto.randomInt(1, 50000).toString() },
        createData: { S: dayjs().tz().format() },
      },
    })
    const response = await client.send(command)
    redirect('/')
  }

  return (
    <div className="p-8">
      <form action={create}>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">Name</label>
          <input
            type="text"
            name="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">Branch</label>
          <input
            type="text"
            name="branch"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">URL</label>
          <input
            type="text"
            name="url"
            maxLength={20}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Create
        </button>
      </form>
    </div>
  )
}
