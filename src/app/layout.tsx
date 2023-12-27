import {Montserrat, Noto_Sans_KR} from 'next/font/google';

import Header from '@/components/common/header';

import type {Metadata} from 'next';

import './globals.css';

// const inter = Inter({subsets: ['latin']});
const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
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
      <body className={`${notoSansKr.className} ${montserrat.variable}`}>
        <Header />
        <div className="w-[90%] mx-auto lg:w-[80%] mt-40 flex-1">{children}</div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
