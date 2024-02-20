import axios from 'axios';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { TableData } from './tbody';

async function editEnv(formData: FormData) {
  'use server';

  const requestUrl = process.env.BACKEND_BASE_URL ?? 'https://example.com';
  const requestHeaders = {
    'Content-Type': 'application/json',
    'x-api-key': process.env.BACKEND_API_KEY,
  };
  await axios.put(
    requestUrl,
    {
      id: formData.get('id'),
      env_name: formData.get('name'),
      branch: formData.get('branch'),
      url: formData.get('url'),
    },
    { headers: requestHeaders }
  );
  redirect('/');
}

export function EditModal({ tabledata }: { tabledata: TableData }) {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full sm:p-6">
          <div className="sm:items-start justify-center">
            <Link
              href={'/'}
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
            >
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </Link>
            <form className="space-y-4" action={editEnv}>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                <input
                  type="text"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                  defaultValue={tabledata.env_name}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">ID</label>
                <input
                  type="text"
                  name="id"
                  className="bg-gray-200 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed"
                  required
                  readOnly
                  defaultValue={tabledata.id}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Branch</label>
                <input
                  type="text"
                  name="branch"
                  className="bg-gray-200 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed"
                  required
                  readOnly
                  defaultValue={tabledata.branch}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">URL</label>
                <input
                  type="text"
                  name="url"
                  className="bg-gray-200 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed"
                  required
                  readOnly
                  defaultValue={tabledata.url}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">InstanceType</label>
                <input
                  type="text"
                  name="instance_type"
                  className="bg-gray-200 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed"
                  required
                  readOnly
                  defaultValue={tabledata.instance_type}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Priority</label>
                <input
                  type="text"
                  name="priority"
                  className="bg-gray-200 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed"
                  required
                  readOnly
                  defaultValue={tabledata.priority}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">CreateData</label>
                <input
                  type="text"
                  name="create_data"
                  className="bg-gray-200 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed"
                  required
                  readOnly
                  defaultValue={tabledata.create_data}
                />
              </div>
              <div className="h-2"></div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full text-sm px-5 py-2.5 text-center"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
