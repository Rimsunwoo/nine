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
      <SortButton sortParams={sortParams} />
      <div className="flex flex-col items-center gap-[4rem] mb-20">
        <div className="grid min-h-52 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 mt-20 gap-x-8 gap-y-1">
          {data?.length ? (
            data.map((item: any) => (
              <div className="relative min-w-[280px]" key={item.id}>
                <Link href={`/exampleBoard/detail/${item.id}`} className="flex flex-col w-72">
                  <div className="bg-sub2 rounded-t-lg text-center relative h-[250px] min-w-[280px] overflow-auto">
                    <Image
                      src={item.thumbnail || '/notFoundImg'}
                      fill
                      style={{
                        objectFit: 'fill',
                      }}
                      alt="Preview"
                    />
                  </div>
                  <div className="flex flex-col px-3 py-4 rounded-b-lg min-w-[280px]">
                    <p className="text-sm opacity-50 ">{new Date(item.created_at).toLocaleDateString()}</p>
                    <p
                      className="mt-1 w-full text-[18px] font-bold"
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
            ))
          ) : (
            <div>
              <span>게시글이 없습니다.</span>
            </div>
          )}
        </div>
        <PaginationContoller pageParams={pageParams} totalPages={totalPages} />
      </div>
    </>
  );
}

export default Page;
