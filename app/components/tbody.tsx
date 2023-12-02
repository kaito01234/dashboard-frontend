import E2EStatus from '@/app/components/e2eresult';
import Status, { EnvStatus } from '@/app/components/status';
import localImage from '@/public/pc.png';
import Image from 'next/image';
import Link from 'next/link';
import { DeleteModal } from './deleteModal';
import { EditModal } from './editModal';

export type TableData = {
  id: string;
  env_name: string;
  branch: string;
  url: string;
  env_status: string;
  e2e_status: string;
  priority: string;
  create_data: string;
};

type Props = {
  deleteModal: boolean;
  editModal: boolean;
  tableData: TableData;
  url1: string;
  url1_name: string;
  url2: string;
  url2_name: string;
};

export default function TableBody({ deleteModal, editModal, tableData, url1, url1_name, url2, url2_name }: Props) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="pl-6 py-0">
        <div className="relative h-10 w-10">
          <Image className="h-full w-full rounded-full object-cover object-center" src={localImage} alt="image" />
        </div>
      </td>
      <td className="px-6 py-4 font-medium text-gray-900">{tableData.env_name}</td>
      <td className="px-6 py-4 font-medium">
        <a target="_blank" href={`https://github.com/${process.env.REPO_NAME}/tree/${tableData.branch}`}>
          {tableData.branch}
        </a>
      </td>
      <td className="px-6 py-4 text-blue-600 font-medium">
        <div className="flex flex-col">
          <a target="_blank" href={url1}>
            {url1_name}
          </a>
          <a target="_blank" href={url2}>
            {url2_name}
          </a>
        </div>
      </td>
      <td className="px-6 py-4">
        <Status status={tableData.env_status} />
      </td>
      <td className="px-6 py-4">
        <E2EStatus status={tableData.e2e_status} />
      </td>
      <td className="px-6 py-4 font-medium items-center gap-4">
        <div className="flex justify-end object-right">
          <Link href={`/?edit=${tableData.id}`} className="px-6 text-blue-500">
            Edit
          </Link>
          {editModal && <EditModal tabledata={tableData} />}
          <Link
            style={{
              pointerEvents:
                tableData.env_status === EnvStatus.Creating ||
                tableData.env_status === EnvStatus.Running ||
                tableData.env_status === EnvStatus.Failure
                  ? 'all'
                  : 'none',
            }}
            href={`/?delete=${tableData.id}`}
            className={
              tableData.env_status === EnvStatus.Creating ||
              tableData.env_status === EnvStatus.Running ||
              tableData.env_status === EnvStatus.Failure
                ? 'px-6 text-red-500'
                : 'px-6 text-gray-300'
            }
          >
            Delete
          </Link>
          {deleteModal && <DeleteModal id={tableData.id} name={tableData.env_name} url={tableData.url} />}
        </div>
      </td>
    </tr>
  );
}
