import React from 'react';

import Image from 'next/image';

export default function Certification({imgSrc, name}: any) {
  return (
    <div>
      <li className="w-[280px] h-[450px] border-[2px]  border-[#DB79A2]  relative">
        <Image src={imgSrc} fill className="object-cover" alt="certification" />
      </li>
      <span>{name}</span>
    </div>
  );
}
