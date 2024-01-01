import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {CCTV_DATA} from './cctvDetail';

function CctvPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className="font-semibold">CCTV</h2>
      <div className="flex gap-10 mt-12 border-t-2 pt-24 w-full justify-center">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 2xl:grid-cols-3 w-full">
          {CCTV_DATA.map(item => {
            return (
              <div key={item.model} className="text-center">
                <Link href={`/products/productDetail/${item.model}`} className="flex flex-col">
                  <div className="w-full max-w-[320px] mx-auto relative border-[2px] bg-white hover:border-sky-500">
                    <Image src={item.image} alt="CCTV" width={0} height={0} sizes="100%" style={{width: '100%'}} />
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                      {item.info_boxs.map((keyword, i) => {
                        return (
                          <div
                            className={`rounded-md max-w-18 text-center shadow-[0_7px_5px_0_rgba(53,60,73,0.08)] border-[2px] border-white ${
                              i === 0 ? 'bg-sky-500' : 'bg-logo_color'
                            }`}
                            key={keyword}>
                            <p className=" text-white font-bold text-center p-[4px] px-2 text-xl 2xl:text-lg ">
                              {keyword}
                            </p>
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
