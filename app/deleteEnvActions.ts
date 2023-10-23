'use server';

import axios from 'axios';
import { redirect } from 'next/navigation';

export async function deleteEnv(id: string, url: string) {
  const requestUrl = process.env.TEMPORARY_URL ?? '';
  await axios.delete(`${requestUrl}`, {
    data: { id: id, url: url },
  });

  await new Promise((resolve) => setTimeout(resolve, 3000));

  redirect('/');
}
