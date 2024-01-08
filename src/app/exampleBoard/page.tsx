export const revalidate = 0;

import Image from 'next/image';
import Link from 'next/link';

import PaginationContoller from '@/components/exampleBoard/paginationContoller';
import SortButton from '@/components/exampleBoard/sortButton';

import {getPostPagination} from '../api/getPost';

interface IPagination {
  searchParams: {[key: string]: string};
}

async function Page({searchParams}: IPagination) {
  const pageParams = Number(searchParams['page']) || 1;
  const sortParams = searchParams['sort'] || '전체';
  const {data, totalPages} = await getPostPagination(pageParams, sortParams);

  return (
    <>
      <div className="flex flex-col items-center mb-20 gap-8">
        <h2 className="font-semibold mb-4">설치 사례</h2>
        <SortButton sortParams={sortParams} />
        {data?.length ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 mt-16 gap-x-8 gap-y-4 border-t-2 pt-24">
            {data.map(item => (
              <div key={item.id} className="relative">
                <Link href={`/exampleBoard/detail/${item.id}`} className="flex flex-col">
                  <div className="bg-sub2 rounded-t-lg text-center relative min-w-[226px] h-[180px] overflow-auto">
                    <Image
                      src={item.thumbnail || '/notFoundImg'}
                      fill
                      style={{
                        objectFit: 'cover',
                      }}
                      alt="Preview"
                    />
                  </div>
                  <div className="flex flex-col px-3 py-4 rounded-b-lg min-w-[226px] shadow-[3px_4px_4px_0_rgba(53,60,73,0.08)]">
                    <p className="text-sm opacity-50 ">
                      {item.created_at.toLocaleString().split('T')[0].replaceAll('-', '. ')}
                    </p>
                    <p
                      className="mt-1 w-full text-lg font-semibold"
                      style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        WebkitLineClamp: 2,
                        minHeight: '3.7rem',
                      }}>
                      {item.title}
                    </p>
                  </div>
                </Link>
              </div>
            ))}{' '}
          </div>
        ) : (
          <div className="my-40 w-full h-full text-center text-xl">등록된 게시물이 없습니다.</div>
        )}
        <PaginationContoller pageParams={pageParams} totalPages={totalPages} sortParams={sortParams} />
      </div>
    </>
  );
}

export default Page;
