import React from 'react';

import {Dropdown} from 'antd';
import Link from 'next/link';

import type {MenuProps} from 'antd';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link href="/products/broadcast" className="text-lg hover:underline">
        Broad Cast
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link href="/products/cctv" className="text-lg hover:underline">
        CCTV
      </Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link href="/products/whiteboard" className="text-lg hover:underline">
        White Board
      </Link>
    ),
  },
];

const DropDown = ({location}: {location: string}) => {
  return (
    <Dropdown menu={{items}} placement="bottom">
      <button className={`${location.includes('products') && 'border-b-[2px] border-primary'}`}>
        <h5
          className={`font-normal p-2 border-b-[2px] border-transparent hover:border-primary ${
            location.includes('products') && 'border-none'
          }`}>
          제품 소개
        </h5>
      </button>
    </Dropdown>
  );
};

export default DropDown;
