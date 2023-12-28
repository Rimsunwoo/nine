import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import 돔카메라 from '../../public/돔카메라.png';
import 불렛카메라 from '../../public/불렛카메라.png';
import 스피드돔 from '../../public/스피드돔.png';

const items = [
  {img: 불렛카메라, model: 'NTB-543X'},
  {img: 돔카메라, model: 'NTD-543X'},
  {img: 스피드돔, model: 'NTPTZ-436X'},
];

function CctvPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2>CCTV</h2>
      <div className="flex gap-10 mt-40">
        <div className="grid grid-cols-1 gap-20 xl:grid-cols-3 md:grid-cols-2">
          {items.map(item => {
            return (
              <div key={item.model} className="text-center">
                <Link href={`/products/productDetail/${item.model}`} className="flex flex-col">
                  <div className="w-[250px] h-[250px] relative border-[2px] rounded-xl bg-white">
                    <Image src={item.img} alt="bullet" fill />
                  </div>
                </Link>
                <p className="text-xl">{item.model}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CctvPage;
