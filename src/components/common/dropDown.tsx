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

const DropDown = ({location}: {location: string}) => (
  <Dropdown menu={{items}} placement="bottom">
    <button>
      <h4 className={`font-normal ${location.includes('products') && 'border-b-[2px] border-black'}`}>제품 소개</h4>
    </button>
  </Dropdown>
);

export default DropDown;
