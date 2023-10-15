import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 border-gray-200">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="http://localhost:3000" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Dashborad</span>
        </a>
        <div className="items-center">
          <Link
            href="http://localhost:3000/new"
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
