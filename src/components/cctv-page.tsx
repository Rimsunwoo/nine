import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {CCTV_DATA} from './cctvDetail';

function CctvPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className="font-semibold">CCTV</h2>
      <div className="flex gap-10 mt-12 border-t-2 pt-28">
        <div className="grid grid-cols-1 gap-20 xl:grid-cols-3 md:grid-cols-2">
          {CCTV_DATA.map(item => {
            return (
              <div key={item.model} className="text-center">
                <Link href={`/products/productDetail/${item.model}`} className="flex flex-col">
                  <div className="w-[300px] h-[300px] relative border-[2px] bg-white hover:border-sky-500">
                    <Image src={item.image} alt="bullet" fill />
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                      {item.info_boxs.map((keyword, i) => {
                        return (
                          <div
                            className={` rounded-md w-16 text-center p-[3px] shadow-[0_7px_5px_0_rgba(53,60,73,0.08)] border-[2px] border-white ${
                              i === 0 ? 'bg-sky-500' : 'bg-logo_color'
                            }`}
                            key={keyword}>
                            <p className=" text-white font-bold text-lg text-center">{keyword}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Link>
                <p className="text-xl mt-2">{item.model}</p>
                <p className="text-gray-500 text-lg">{item.simpleText}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CctvPage;
