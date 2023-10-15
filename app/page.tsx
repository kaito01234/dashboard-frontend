import TableBody, { TableData } from '@/app/components/app/tbody'
import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb'
import dayjs from 'dayjs'

async function getData() {
  'use server'

  const client = new DynamoDBClient({ region: 'ap-northeast-1', endpoint: 'http://host.docker.internal:4566' })
  const command = new ScanCommand({ TableName: 'TemporaryEnvironment' })
  const response = await client.send(command)
  const tableList: TableData[] =
    response.Items?.map(function (item) {
      return {
        id: item.id?.S ?? '',
        name: item.name?.S ?? '',
        branch: item.branch?.S ?? '',
        url: item.url?.S ?? '',
        status: item.status?.S ?? '',
        e2e: item.e2e?.S ?? '',
        priority: item.priority?.S ?? '',
        createData: item.createData?.S ?? '',
      }
    }) ?? []
  return tableList.sort(function (a, b) {
    return dayjs(a.createData) < dayjs(b.createData) ? -1 : 1 //オブジェクトの昇順ソート
  })
}

export default async function Home() {
  const tableList: TableData[] = await getData()

  return (
    <div className="p-8">
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4"></th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Name
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Branch
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Link
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Status
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Test Result
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {tableList.map((tableData) => (
              <TableBody key="body" tableData={tableData} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
