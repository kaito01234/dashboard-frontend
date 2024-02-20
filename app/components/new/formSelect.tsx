'use client';

type Props = {
  label: string;
  name: string;
  url?: boolean;
  maxLength?: number;
};

export function FormSelect({ label, name }: Props) {
  return (
    <div className="mb-6">
      <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
      <select
        name={name}
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="MEDIUM">t3a.medium</option>
        <option value="LARGE" selected>
          t3a.large
        </option>
        <option value="XLARGE">t3a.xlarge</option>
      </select>
    </div>
  );
}
