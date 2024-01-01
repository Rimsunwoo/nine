import React from 'react';

import Image from 'next/image';

export default function Certification({imgSrc, name}: any) {
  return (
    <li className="flex flex-col">
      <p className="mb-2">[ {name} ]</p>
      <Image src={imgSrc} width={0} height={0} sizes="100%" style={{width: '100%'}} alt="certification" />
    </li>
  );
}
