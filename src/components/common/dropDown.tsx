import React from 'react';

import {Dropdown} from 'antd';
import Link from 'next/link';

import type {MenuProps} from 'antd';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: <Link href="/products/broadcast">BroadCast</Link>,
  },
  {
    key: '2',
    label: <Link href="/products/cctv">CCTV</Link>,
  },
  {
    key: '3',
    label: <Link href="/products/whiteboard">WhiteBoard</Link>,
  },
];

const DropDown = ({location}: {location: string}) => {
  return (
    <Dropdown menu={{items}} placement="bottom">
      <button className={`${location.includes('products') && 'border-b-[2px] border-primary'}`}>
        <h4 className={`font-normal p-2 border-b-[2px] border-white ${location.includes('products') && 'border-none'}`}>
          제품 소개
        </h4>
      </button>
    </Dropdown>
  );
};

export default DropDown;
