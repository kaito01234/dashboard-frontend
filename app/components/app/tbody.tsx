import Image from 'next/image'
import localImage from '@/public/pc.png'

export type TableData = {
  Nane: string
  Branch: string
  State: string
  Url: string
  Priority: number
  CreateData: string
}

export default function TableBody({ tableData }: { tableData: TableData }) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-3 py-0">
        <div className="relative h-10 w-10">
          <Image
            className="h-full w-full rounded-full object-cover object-center"
            src={localImage}
            alt="image"
          />
        </div>
      </td>
      <td className="px-6 py-4 font-medium text-gray-900">{tableData.Nane}</td>
      <td className="px-6 py-4 font-medium">{tableData.Branch}</td>
      <td className="px-6 py-4">
        <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-3 w-3"
          >
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clipRule="evenodd"
            />
          </svg>
          {tableData.State}
        </span>
      </td>
      <td className="px-6 py-4 text-blue-600 font-medium">
        <div className="flex flex-col">
          <a target="_blank" href={'https://' + tableData.Url}>
            employee
          </a>
          <a target="_blank" href={'https://' + tableData.Url}>
            administrator
          </a>
        </div>
      </td>
      <td className="items-center gap-4 px-6 py-4 font-medium">
        <div className="flex justify-end object-right">
          <a href="" className="px-2">
            Detail
          </a>
          <a href="" className="px-2 text-red-500">
            Delete
          </a>{' '}
        </div>
      </td>
    </tr>
  )
}
