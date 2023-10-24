import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import Navbar from '@/app/navbar';

const inter = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="bg-slate-100" lang="ja">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
