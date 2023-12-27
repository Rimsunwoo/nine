import React from 'react';

import Link from 'next/link';

import Sidebar from './sidebar';

function CctvPage() {
  return (
    <div className="flex flex-col items-center mt-20">
      <h3>제품 소개</h3>
      <div className="flex gap-10 mt-20">
        <Sidebar />
        <div className="grid grid-cols-3 gap-10">
          <Link href={'/products/productDetail/1'} className="flex flex-col">
            <div className="w-[300px] h-[300px] bg-slate-400 text-center">image</div>
            <p className="text-xl">CCTV1</p>
          </Link>
          <Link href={'/products/productDetail/2'} className="flex flex-col">
            <div className="w-[300px] h-[300px] bg-slate-400 text-center">image</div>
            <p className="text-xl">CCTV2</p>
          </Link>
          <Link href={'/products/productDetail/3'} className="flex flex-col">
            <div className="w-[300px] h-[300px] bg-slate-400 text-center">image</div>
            <p className="text-xl">CCTV3</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CctvPage;
