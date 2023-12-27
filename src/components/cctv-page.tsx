import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import 돔카메라 from '../../public/돔카메라.png';
import 불렛카메라 from '../../public/불렛카메라.png';
import 스피드돔 from '../../public/스피드돔.png';
function CctvPage() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h3>제품 소개</h3>
      <div className="flex gap-10 mt-10">
        <div className="grid grid-cols-3 gap-10">
          <Link href={'/products/productDetail/HNB-S528R'} className="flex flex-col">
            <div className="w-[300px] h-[300px] relative text-center">
              <Image src={불렛카메라} alt="bullet" fill />
            </div>
            <p className="text-xl">HNB-S528R</p>
          </Link>
          <Link href={'/products/productDetail/2'} className="flex flex-col">
            <div className="w-[300px] h-[300px] relative text-center">
              <Image src={돔카메라} alt="dom" fill />
            </div>
            <p className="text-xl text-center">HND-528R</p>
          </Link>
          <Link href={'/products/productDetail/3'} className="flex flex-col">
            <div className="w-[300px] h-[300px] relative text-center">
              <Image src={스피드돔} alt="speed-dom" fill />
            </div>
            <p className="text-xl text-center">HNP-436SR</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CctvPage;
