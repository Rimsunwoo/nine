'use client';
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

import DropDown from './dropDown';
import logo from '../../../public/logo.svg';

// const menu = [
//   ['홈', '/'],
//   ['기업소개', '/company'],
//   ['제품소개', '/products'],
//   ['설치사례', '/exampleBoard'],
// ];

function Header() {
  const location = usePathname();
  return (
    <div className="fixed left-0 top-0 w-full h-20 flex justify-evenly items-center bg-white z-10">
      <Link href={'/'} className="w-28 h-9 relative">
        <Image src={logo} className="object-cover" fill alt="logo" />
      </Link>
      <div className="flex gap-10">
        <Link href={'/'} key={'home'}>
          <h4
            className={`font-normal text-center p-2 hover:border-b-[2px] border-primary ${
              location === '/' && 'border-b-[2px] border-primary'
            }`}>
            {'홈'}
          </h4>
        </Link>
        <Link href={'/company'} key={'company'}>
          <h4
            className={`font-normal p-2 hover:border-b-[2px] border-primary ${
              location.includes('company') && 'border-b-[2px] border-primary'
            }`}>
            {'기업소개'}
          </h4>
        </Link>
        <DropDown location={location} />
        <Link href={'/exampleBoard'} key={'exampleBoard'}>
          <h4
            className={`font-normal p-2 hover:border-b-[2px] border-primary ${
              location.includes('exampleBoard') && 'border-b-[2px] border-primary'
            }`}>
            {'설치사례'}
          </h4>
        </Link>
      </div>
    </div>
  );
}

export default Header;
