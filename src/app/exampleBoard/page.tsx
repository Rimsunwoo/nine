export const revalidate = 0;

import Image from 'next/image';
import Link from 'next/link';

import PaginationContoller from '@/components/paginationContoller';

import {getPostPagination} from '../api/getPost';

interface IPagination {
  searchParams: {[key: string]: string};
}

async function Page({searchParams}: IPagination) {
  const pageParams = Number(searchParams['page']) || 1;
  const postPaginationData = await getPostPagination(pageParams);

  return (
    <>
      <div className="flex flex-col items-center mb-20">
        <h2 className="font-semibold">설치 사례</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 mt-16 gap-x-8 gap-y-1 border-t-2 pt-24">
          {postPaginationData.data?.map(item => (
            <div className="relative" key={item.id}>
              <Link href={`/exampleBoard/detail/${item.id}`} className="flex flex-col">
                <div className="bg-sub2 rounded-t-lg text-center relative min-w-[226px] aspect-square overflow-auto">
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
          ))}
        </div>
        <PaginationContoller pageParams={pageParams} totalPages={postPaginationData.totalPages} />
      </div>
    </>
  );
}

export default Page;
