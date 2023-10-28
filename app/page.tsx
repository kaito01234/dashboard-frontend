import TableBody, { TableData } from '@/app/components/tbody';
import axios from 'axios';

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

async function getData() {
  const requestUrl = process.env.BACKEND_BASE_URL ?? 'https://example.com';
  const response = await axios.get(requestUrl);

  const tableList: TableData[] =
    response.data.result.map(function (item: any) {
      return {
        id: item.id,
        name: item.name,
        branch: item.branch,
        url: item.url,
        envStatus: item.envStatus,
        e2e: item.e2e,
        priority: item.priority,
        createData: item.createData,
      };
    }) ?? [];

  return tableList;
}

export default async function Home({ searchParams }: Props) {
  const requestUrl = process.env.BACKEND_BASE_URL ?? 'https://example.com';
  const notes = await fetch(requestUrl, { cache: 'no-store' });
  const tableList: { result: TableData[] } = await notes.json();

  // const tableList: TableData[] = await getData();
  const deleteModal: string | undefined = searchParams?.delete;
  const detailModal: string | undefined = searchParams?.detail;

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
            {tableList.result.map((tableData) => (
              <TableBody
                key="body"
                deleteModal={tableData.id === deleteModal ? true : false}
                detailModal={tableData.id === detailModal ? true : false}
                tableData={tableData}
                url1_name={process.env.LINK_NAME_1 ?? 'URL1'}
                url2_name={process.env.LINK_NAME_2 ?? 'URL2'}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export const dynamic = 'force-dynamic';
