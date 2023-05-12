import ClientOnly from './components/ClientOnly';

import Navbar from './components/navbar/Navbar';
import './globals.css';
import {Inconsolata} from 'next/font/google';

const font = Inconsolata({subsets: ['latin']});

export const metadata = {
  title: 'Mark Gowen',
  description: 'Software Engineer Portfolio',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html className="h-full bg-midnight-100" lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
