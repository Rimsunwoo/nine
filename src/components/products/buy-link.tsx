import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

interface BuyLinkProps {
  product: string;
}

export default function BuyLink({product}: BuyLinkProps) {
  return (
    <Link
      href="https://www.g2b.go.kr:8092/sm/ma/mn/SMMAMnF.do"
      className="border-2 border-black  w-[12rem] text-center py-1 px-2 rounded-lg ">
      <Image
        src="/나라장터쇼핑몰.png"
        alt="나라장터쇼핑몰이미지"
        width={0}
        height={0}
        sizes="100%"
        style={{width: '100%'}}
      />
      <span className="font-bold  text-nowrap  underline">{product} 구매링크</span>
    </Link>
  );
}
