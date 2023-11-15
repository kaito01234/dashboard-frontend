import axios from 'axios';
import { redirect } from 'next/navigation';

async function createEnv(formData: FormData) {
  'use server';

  const requestUrl = process.env.BACKEND_BASE_URL ?? 'https://example.com';
  const requestHeaders = {
    'Content-Type': 'application/json',
    'x-api-key': process.env.BACKEND_API_KEY,
  };
  await axios.post(
    requestUrl,
    {
      env_name: formData.get('name') ?? '',
      branch: formData.get('branch') ?? '',
      url: formData.get('url') ?? '',
    },
    { headers: requestHeaders }
  );

  await new Promise((resolve) => setTimeout(resolve, 3000));

  redirect('/');
}

export default async function Home() {
  return (
    <div className="flex justify-center p-8">
      <div className="flex-1 max-w-screen-xl">
        <form action={createEnv}>
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
    </div>
  );
}
