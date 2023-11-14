'use server';

import axios from 'axios';
import { redirect } from 'next/navigation';

export async function deleteEnv(id: string, url: string) {
  const requestUrl = process.env.BACKEND_BASE_URL ?? 'http://localhost';
  const requestHeaders = {
    'Content-Type': 'application/json',
    'x-api-key': process.env.BACKEND_API_KEY,
  };
  await axios.delete(requestUrl, {
    data: { id: id, url: url },
    headers: requestHeaders,
  });

  await new Promise((resolve) => setTimeout(resolve, 3000));

  redirect('/');
}
