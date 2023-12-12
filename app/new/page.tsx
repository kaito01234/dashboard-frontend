import axios from 'axios';
import { redirect } from 'next/navigation';
import { FormInput } from '../components/new/formInput';

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
          <FormInput label="Name" name="name" />
          <FormInput label="Branch" name="branch" />
          <FormInput label="URL" name="url" url={true} maxLength={20} />
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
