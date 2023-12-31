'use client';

import {Pagination} from 'antd';
import {useRouter} from 'next/navigation';

interface paginationContollerProps {
  pageParams: number;
  totalPages: number;
}

export default function PaginationContoller({pageParams, totalPages}: paginationContollerProps) {
  const router = useRouter();
  const onChangePagination = (page: any) => {
    router.push(`/exampleBoard/?page=${page}`);
  };
  return <Pagination defaultCurrent={pageParams} onChange={onChangePagination} total={totalPages} />;
}
