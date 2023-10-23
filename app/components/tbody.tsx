import Image from 'next/image';
import localImage from '@/public/pc.png';
import E2EStatus from '@/app/components/e2eresult';
import Status, { EnvStatus } from '@/app/components/status';
import { DeleteModal } from './deleteModal';
import Link from 'next/link';
import { DetailModal } from './detailModal';

export type TableData = {
  id: string;
  name: string;
  branch: string;
  url: string;
  envStatus: string;
  e2e: string;
  priority: string;
  createData: string;
};

type Props = { deleteModal: boolean; detailModal: boolean; tableData: TableData; url1_name: string; url2_name: string };

export default function TableBody({ deleteModal, detailModal, tableData, url1_name, url2_name }: Props) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="pl-6 py-0">
        <div className="relative h-10 w-10">
          <Image className="h-full w-full rounded-full object-cover object-center" src={localImage} alt="image" />
        </div>
      </td>
      <td className="px-6 py-4 font-medium text-gray-900">{tableData.name}</td>
      <td className="px-6 py-4 font-medium">
        <a target="_blank" href={`https://github.com/${process.env.REPO_NAME}/tree/${tableData.branch}`}>
          {tableData.branch}
        </a>
      </td>
      <td className="px-6 py-4 text-blue-600 font-medium">
        <div className="flex flex-col">
          <a target="_blank" href={`https://${tableData.url}-${process.env.LINK_URL_1}`}>
            {url1_name}
          </a>
          <a target="_blank" href={`https://${tableData.url}-${process.env.LINK_URL_2}`}>
            {url2_name}
          </a>
        </div>
      </td>
      <td className="px-6 py-4">
        <Status status={tableData.envStatus} />
      </td>
      <td className="px-6 py-4">
        <E2EStatus status={tableData.e2e} />
      </td>
      <td className="px-6 py-4 font-medium items-center gap-4">
        <div className="flex justify-end object-right">
          <Link href={`/?detail=${tableData.id}`} className="px-6 text-blue-500">
            Detail
          </Link>
          {detailModal && <DetailModal id={tableData.id} priority={tableData.priority} createData={tableData.createData} />}
          <Link
            style={{ pointerEvents: tableData.envStatus === EnvStatus.Creating ? 'all' : 'none' }}
            href={`/?delete=${tableData.id}`}
            className={tableData.envStatus === EnvStatus.Creating ? 'px-6 text-red-500' : 'px-6 text-gray-300'}
          >
            Delete
          </Link>
          {deleteModal && <DeleteModal id={tableData.id} name={tableData.name} url={tableData.url} />}
        </div>
      </td>
    </tr>
  );
}
