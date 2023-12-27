'use client';
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

import DropDown from './dropDown';

// const menu = [
//   ['홈', '/'],
//   ['기업소개', '/company'],
//   ['제품소개', '/products'],
//   ['설치사례', '/exampleBoard'],
// ];

function Header() {
  const location = usePathname();
  return (
    <div className="h-20 border-2 border-b-black flex justify-evenly items-center">
      <div className="w-28 h-9 relative">
        <Image src={logo} className="object-cover" fill alt="logo" />
      </div>
      <div className="flex gap-4">
        <Link href={'/'} key={'home'}>
          <h4 className={`font-normal ${location === '/' && 'border-b-[2px] border-black'}`}>{'홈'}</h4>
        </Link>
        <Link href={'/company'} key={'company'}>
          <h4 className={`font-normal ${location.includes('company') && 'border-b-[2px] border-black'}`}>
            {'기업소개'}
          </h4>
        </Link>
        <DropDown location={location} />
        <Link href={'/exampleBoard'} key={'exampleBoard'}>
          <h4 className={`font-normal ${location.includes('exampleBoard') && 'border-b-[2px] border-black'}`}>
            {'설치사례'}
          </h4>
        </Link>
      </div>
    </div>
  );
}

export default Header;
