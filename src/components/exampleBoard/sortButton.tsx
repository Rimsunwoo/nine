'use client';

import {Radio} from 'antd';
import {useRouter} from 'next/navigation';

import type {RadioChangeEvent} from 'antd';

interface SortButtonProps {
  sortParams: string;
}

export default function SortButton({sortParams}: SortButtonProps) {
  const router = useRouter();
  const sortArr = ['전체', 'CCTV', 'BroadCast', 'WhiteBoard'];
  const changeSort = (e: RadioChangeEvent) => {
    const sortType = e.target.value;
    if (sortType == sortParams) return;
    router.push(`/exampleBoard/?sort=${sortType}`);
  };
  return (
    <Radio.Group value={sortParams} onChange={changeSort}>
      {sortArr.map(item => (
        <Radio.Button key={item} value={item}>
          {item}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
}
