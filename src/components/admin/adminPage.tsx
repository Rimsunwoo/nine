import {useEffect, useState} from 'react';

import {Skeleton} from 'antd';
import Link from 'next/link';

import {getPosts} from '@/app/api/admin';

function AdminPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    (async function () {
      setData(await getPosts());
    })();
  }, []);

  return (
    <div className="flex flex-col items-center gap-10 px-20">
      <p className="text-3xl">관리자 페이지</p>
      <div className="w-full flex justify-end">
        <Link
          href={'/admin/post'}
          className="bg-hover_primary p-2 rounded-md text-white border-[1px] border-primary hover:bg-primary">
          게시글 올리기
        </Link>
      </div>
      <div className="w-full text-xl">[게시글 목록]</div>
      <div className="flex flex-col gap-4 w-full">
        {!data ? (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        ) : data.length !== 0 ? (
          data.map((post: any) => {
            return (
              <Link
                key={post.id}
                href={`/admin/detail/${post.id}`}
                className="border-[1px] border-black p-4 rounded-md  relative">
                <p className="text-lg mb-2">
                  제목 : <span>{post.title}</span>
                </p>
                <div className="flex gap-4">
                  <p className="text-slate-600">
                    제품 : <span>{post.category}</span>
                  </p>
                  <p className="text-slate-600">
                    작성일 : <span>{post.created_at.split('.')[0].replace('T', ' ')}</span>
                  </p>
                </div>
              </Link>
            );
          })
        ) : (
          <div className="text-2xl w-full text-center p-10">아직 등록된 게시물이 없습니다.</div>
        )}
      </div>
    </div>
  );
}

export default AdminPage;
