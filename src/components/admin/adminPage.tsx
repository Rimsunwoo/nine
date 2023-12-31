import {useEffect, useState} from 'react';

import {Skeleton} from 'antd';
import Link from 'next/link';

import {getPost} from '@/api/admin';

import DeleteBtn from './deleteBtn';

import type {Tables} from '@/types/supabase';

function AdminPage() {
  const [data, setData] = useState<null | Tables<'post'>[]>(null);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    (async function () {
      setData(await getPost());
    })();
  }, [updated]);

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
      <ul className="flex flex-col gap-4 w-full">
        {data ? (
          data.map(post => {
            return (
              <li key={post.id} className="border-[1px] border-black p-4 rounded-md  relative">
                <p className="text-lg mb-2">
                  제목 : <span>{post.title}</span>
                </p>
                <div className="flex gap-4">
                  <p className="text-slate-600">
                    제품 : <span>{post.category}</span>
                  </p>
                  <p className="text-slate-600">
                    작성일 : <span>{post.created_at.split('.')[0]}</span>
                  </p>
                </div>
                <DeleteBtn id={post.id} setUpdated={setUpdated} />
              </li>
            );
          })
        ) : (
          <>
            <Skeleton />
            <Skeleton />
          </>
        )}
      </ul>
    </div>
  );
}

export default AdminPage;
