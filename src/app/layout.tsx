import {Montserrat} from 'next/font/google';
import localFont from 'next/font/local';

import Footer from '@/components/common/footer';
import Header from '@/components/common/header';

import type {Metadata} from 'next';

import './globals.css';

// const inter = Inter({subsets: ['latin']});
const myFont = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
});

const montserrat = Montserrat({subsets: ['latin'], display: 'swap', variable: '--font-montserrat'});

export const metadata: Metadata = {
  title: 'nine',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ko">
      <body className={`${myFont.className} ${montserrat.variable} `}>
        <Header />
        <div className="w-[95%] mx-auto xl:w-[80%]  mt-40  min-h-[80vh]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
