import React from 'react';

import Image from 'next/image';

export default function Certification({imgSrc, name}: any) {
  return (
    <div className="w-[500px] h-[700px] relative">
      <li className="border-[2px]  border-[#DB79A2]">
        <Image src={imgSrc} fill className="object-cover" alt="certification" />
      </li>
      <span>{name}</span>
    </div>
  );
}
