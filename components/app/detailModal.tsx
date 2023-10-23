import Link from 'next/link';

type Props = {
  id: string;
  priority: string;
  createData: string;
};

export function DetailModal({ id, priority, createData }: Props) {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="sm:flex sm:items-start justify-center">
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
            <div className="p-6 space-y-6">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Detail</h5>
              <label className="block mb-2 text-md font-medium text-gray-900">ID</label>
              <p className="leading-relaxed text-gray-600">{id}</p>
              <label className="block mb-2 text-md font-medium text-gray-900">priority</label>
              <p className="leading-relaxed text-gray-600">{priority}</p>
              <label className="block mb-2 text-md font-medium text-gray-900">createData</label>
              <p className="leading-relaxed text-gray-600">{createData}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
