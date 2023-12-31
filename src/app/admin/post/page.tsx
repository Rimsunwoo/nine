'use client';
import type {ChangeEvent, FormEvent} from 'react';
import React, {useState} from 'react';

import {useRouter} from 'next/navigation';

import {postPost} from '@/api/admin';
import useCheckAdmin from '@/components/admin/useCheckAdmin';
import UploadBox from '@/components/post/uploadBox';
import UploadThumbnail from '@/components/post/uploadThumbnail';

function Page() {
  const [isAdmin] = useCheckAdmin();
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  // const [thumbnail, setThumbnail] = useState('');

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setTitle(value);
  };

  const onChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = e.target;
    setContent(value);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPost = {
      title,
      content,
    };
    const error = await postPost(newPost);
    if (error) {
      return;
    }
    alert('등록이 완료되었습니다.');
  };

  if (isAdmin === 'loading') {
    return;
  }
  if (!isAdmin) {
    alert('접근이 제한되었습니다.');
    router.push('/admin');
    return;
  }
  return (
    <div className="w-full flex flex-col items-center gap-10">
      <p className="text-3xl">설치 사례 등록</p>
      <form className="border flex flex-col items-center p-10" onSubmit={onSubmit}>
        <div className="flex flex-col gap-4">
          <label>
            제목<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="제목을 입력하세요"
            className="border w-[30rem] p-2"
            onChange={onChangeTitle}
            value={title}
          />
          <label>본문</label>
          <textarea
            placeholder="본문 입력하세요"
            className="resize-none border p-2 h-40"
            value={content}
            onChange={onChangeContent}
          />
          <label>썸네일</label>
          <UploadThumbnail />
        </div>
        <div className="w-full text-start my-4">
          <p>첨부 사진</p>
        </div>
        <div className="max-w-[30rem]">
          <UploadBox />
        </div>
        <button className="bg-primary p-2 px-2 w-fit text-white rounded-lg mt-4">등록하기</button>
      </form>
    </div>
  );
}

export default Page;
