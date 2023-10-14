import TableBody, { TableData } from './components/app/tbody'

const tableList: TableData[] = [
  {
    Nane: 'TESTING ENVIRONMENT',
    Branch: 'xxxxxxxx-yyyyyyyyyy-zzzzzzzzzz',
    State: 'Running',
    Url: 'example.com',
    Priority: 0,
    CreateData: '',
  },
]

export default function Home() {
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
                State
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Link
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-medium text-gray-900"
              ></th>
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
