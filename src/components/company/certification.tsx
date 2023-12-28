import React from 'react';

import Image from 'next/image';

export default function Certification({imgSrc, name}: any) {
  return (
    <div className="flex flex-col">
      <p className="mb-2">[ {name} ]</p>
      <div className="w-[31.25rem] h-[45rem] relative">
        <li className="border-[2px]  border-[#DB79A2]">
          <Image src={imgSrc} fill className="object-cover" alt="certification" />
        </li>
      </div>
    </div>
  );
}
