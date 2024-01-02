import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const nav = [
  {
    category: '회사 소개',
    path: '/company',
  },
  {
    category: '제품 소개',
    path: '/products/cctv',
  },
  {
    category: '설치 사례',
    path: '/exampleBoard',
  },
];

function page() {
  return (
    <>
      <div className="absolute w-full h-full top-0 left-0 z-0">
        <Image
          src={'/home.jpg'}
          fill
          style={{
            objectFit: 'cover',
          }}
          alt="Home"
        />
      </div>
      <div className="bg-[rgba(0,0,0,0.3)]  w-full h-full absolute top-0 left-0">
        <div className="absolute mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-20 bg-[rgba(0,0,0,0.5)] w-full animate-[fadeIn_1s_ease-in-out]">
          <div className="max-w-[400px] mx-auto animate-[upIn_1s_ease-in-out_forwards]">
            <Image src={'/logo.svg'} width={0} height={0} sizes="100%" style={{width: '100%'}} alt="logo" />
          </div>
          <div className="flex justify-center items-center gap-8 mt-20 md:gap-20">
            {nav.map(category => (
              <Link
                href={`${category.path}`}
                key={category.path}
                className="p-4 text-white w-fit text-nowrap border-2 bg-[rgba(0,0,0,0.2)] border-sky-500 text-lg md:text-2xl font-semibold rounded-lg shadow-[4px_2px_4px_0_rgba(255,255,255,0.3)] hover:border-logo_color">
                {category.category}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
