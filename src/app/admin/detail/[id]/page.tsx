import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {getPostDetail} from '@/app/api/getPost';
import DeleteBtn from '@/components/admin/deleteBtn';

import type {Tables} from '@/types/supabase';

async function Page({params: {id}}: {params: {id: string}}) {
  const data: Tables<'post'> = await getPostDetail(id);
  if (!data) {
    return <div className="w-full text-center text-2xl">해당 게시물이 존재하지 않습니다.</div>;
  }
  return (
    <div className="flex flex-col items-center text-center px-10 gap-10 mb-80">
      {/* 헤더 부분 */}
      <div className="flex flex-col gap-4 w-full relative">
        <div className="flex justify-start items-center border-b-2 pb-10 mb-10 p-1">
          <Link
            href={'/admin'}
            className="rounded-md p-2 px-4 bg-slate-500 text-white hover:bg-hover_primary border-b-2 ">
            ← 목록
          </Link>
        </div>
        <h2 className="absolute top-0 left-[50%] -translate-x-[50%] font-semibold">{data.category?.toUpperCase()}</h2>
        <h3 className="w-full text-start p-2">{data?.title}</h3>
        <div className="flex bg-slate-100 border-y-[1px] border-black gap-10">
          <div className="flex">
            <div className="p-2 font-bold">작성자</div>
            <div className="p-2">(주)나인</div>
          </div>
          <div className="flex">
            <div className="p-2 font-bold">작성일</div>
            <div className="p-2">{data.created_at.split('.')[0].replace('T', ' ')}</div>
          </div>
          <DeleteBtn id={data.id} />
        </div>
      </div>
      {/* 본문 영역 */}
      <div className="w-full text-start p-2">{data?.content}</div>
      <div className="flex flex-col gap-10 w-full max-w-[500px]">
        {data.images?.map((img: any) => {
          return (
            <div key={img}>
              <Image src={img} alt="postImage" width={0} height={0} sizes="100%" style={{width: '100%'}} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
