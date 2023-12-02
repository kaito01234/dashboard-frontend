'use client';

import { SetStateAction, useState } from 'react';

type Props = {
  label: string;
  name: string;
  url?: boolean;
};

export function FormInput({ label, name, url = false }: Props) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="mb-6">
      <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
      <input
        type="text"
        name={name}
        maxLength={20}
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        required
        onChange={handleChange}
      />
      {url && (
        <div className="block mb-2 text-sm font-medium text-gray-800">
          {process.env.NEXT_PUBLIC_LINK_NAME_1}のURL: https://{inputValue}-{process.env.NEXT_PUBLIC_LINK_URL_1}
          <br />
          {process.env.NEXT_PUBLIC_LINK_NAME_2}のURL: https://{inputValue}-{process.env.NEXT_PUBLIC_LINK_URL_2}
        </div>
      )}
    </div>
  );
}
