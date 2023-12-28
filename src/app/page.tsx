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
      <div className="bg-black opacity-10 w-full h-full absolute top-0 left-0" />
      <div className="relative w-[300px] h-[300px] mx-auto">
        <Image src={'/logo.svg'} fill alt="logo" />
      </div>
      <div className="absolute flex justify-center items-center gap-20 w-full h-full top-0 left-0">
        {nav.map(category => (
          <Link
            href={`${category.path}`}
            key={category.path}
            className="p-4 bg-sky-100 border-2 border-sky-500 text-2xl font-semibold rounded-lg shadow-[0_7px_7px_0_rgba(53,60,73,0.08)]">
            {category.category}
          </Link>
        ))}
      </div>
    </>
  );
}

export default page;
