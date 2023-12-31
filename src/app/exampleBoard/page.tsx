import React from 'react';

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
      <div className="flex flex-col items-center gap-[4rem] mb-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 mt-20 gap-x-8 gap-y-1">
          {postPaginationData.data?.map(item => (
            <div className="relative min-w-[280px]" key={item.id}>
              <Link href={`/exampleBoard/${item.id}`} className="flex flex-col w-72">
                <div className="bg-sub2 rounded-t-lg text-center relative h-[250px] min-w-[280px] overflow-auto">
                  <Image
                    src={item.thumbnail}
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
