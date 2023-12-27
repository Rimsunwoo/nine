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
      <h3>CCTV</h3>
      <div className="flex gap-10 mt-10">
        <div className="grid grid-cols-3 gap-10">
          {items.map(item => {
            return (
              <div key={item.model} className="text-center">
                <Link
                  href={'/products/productDetail/NTB-543X'}
                  className="flex flex-col text-center border-[2px] rounded-xl">
                  <div className="w-[300px] h-[300px] relative ">
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
