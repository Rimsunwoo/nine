import {useEffect, useState} from 'react';

import {Skeleton} from 'antd';
import Link from 'next/link';

import {getPost} from '@/api/admin';

import DeleteBtn from './deleteBtn';

function AdminPage() {
  const [data, setData] = useState<any>(null);
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
          data.map((post: any) => {
            return (
              <li key={post.id} className="border-[1px] border-black p-4 rounded-md  relative">
                <p className="text-lg mb-2">
                  제목 : <span>{post.title}</span>
                </p>
                <p className="text-slate-600">
                  작성일 : <span>{post.created_at.split('.')[0]}</span>
                </p>
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
