'use client';

import {Pagination} from 'antd';
import {useRouter} from 'next/navigation';

interface paginationContollerProps {
  pageParams: number;
  totalPages: number;
  sortParams: string;
}

export default function PaginationContoller({pageParams, totalPages, sortParams}: paginationContollerProps) {
  const router = useRouter();
  const onChangePagination = (page: any) => {
    router.push(`/exampleBoard?sort=${sortParams}&page=${page}`);
  };
  return (
    <Pagination defaultCurrent={pageParams} onChange={onChangePagination} current={pageParams} total={totalPages} />
  );
}
