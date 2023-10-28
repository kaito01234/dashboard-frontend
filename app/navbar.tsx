import Link from 'next/link';

export default function Navbar() {
  const baseurl = process.env.BASE_URL ?? '';

  return (
    <nav className="bg-gray-900 border-gray-200">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link href={'/'} className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Dashborad</span>
        </Link>
        <div className="items-center">
          <Link
            href={'/new'}
            type="button"
            className="text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            New
          </Link>
        </div>
      </div>
    </nav>
  );
}
