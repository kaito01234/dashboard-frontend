import Image from 'next/image'
import localImage from '@/public/pc.png'
import E2EStatus from '@/app/components/app/e2eresult'
import Status from '@/app/components/app/status'

export type TableData = {
  id: string
  name: string
  branch: string
  url: string
  status: string
  e2e: string
  priority: string
  createData: string
}

export default function TableBody({ tableData }: { tableData: TableData }) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="pl-6 py-0">
        <div className="relative h-10 w-10">
          <Image className="h-full w-full rounded-full object-cover object-center" src={localImage} alt="image" />
        </div>
      </td>
      <td className="px-6 py-4 font-medium text-gray-900">{tableData.name}</td>
      <td className="px-6 py-4 font-medium">
        <a href={`https://github.com/kaito01234/frontend-study/tree/${tableData.branch}`}>{tableData.branch}</a>
      </td>
      <td className="px-6 py-4 text-blue-600 font-medium">
        <div className="flex flex-col">
          <a target="_blank" href={`https://${tableData.url}`}>
            employee
          </a>
          <a target="_blank" href={`https://${tableData.url}`}>
            administrator
          </a>
        </div>
      </td>
      <td className="px-6 py-4">
        <Status status={tableData.status} />
      </td>
      <td className="px-6 py-4">
        <E2EStatus status={tableData.e2e} />
      </td>
      <td className="px-6 py-4 font-medium items-center gap-4">
        <div className="flex justify-end object-right">
          <a href="https://example.com" className="px-6">
            Detail
          </a>
          <a href="https://example.com" className="px-6 text-red-500">
            Delete
          </a>{' '}
        </div>
      </td>
    </tr>
  )
}
