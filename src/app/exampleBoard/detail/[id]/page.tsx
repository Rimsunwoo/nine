import React from 'react';

interface IDetail {
  id: string;
  created_at: string;
  title: string;
  content: string;
  thumbnail: string;
  images: string[];
  category: string;
}
const mockData: IDetail = {
  id: '3',
  created_at: '2023-09-18 15:47:40.993956+09',
  title: 'TestTitle',
  content: '본문 내용이 들어가유',
  thumbnail: 'url',
  images: ['url1', 'url2', 'url3'],
  category: 'cctv',
};

function Page({params: {id}}: {params: {id: string}}) {
  console.log(id);
  const data: IDetail = mockData;

  return (
    <div className="flex flex-col items-center text-center px-10 gap-10">
      {/* 헤더 부분 */}
      <div className="flex flex-col gap-10 w-full">
        <h2 className="p-10 border-b-2">{data.category.toUpperCase()}</h2>
        <h3>{data.title}</h3>
        <div className="flex bg-slate-100 border-y-[1px] border-black gap-10">
          <div className="flex">
            <div className="p-2 font-bold">작성자</div>
            <div className="p-2">(주)나인</div>
          </div>
          <div className="flex">
            <div className="p-2 font-bold">작성일</div>
            <div className="p-2">{data.created_at.split(' ')[0]}</div>
          </div>
        </div>
      </div>
      {/* 본문 영역 */}
      <div className="bg-slate-300 w-full h-40 text-start p-2">{data.content}</div>
      <div className="flex flex-col gap-10 w-full">
        {data.images.map(img => {
          return (
            <div key={img} className="w-full h-[32rem] bg-slate-200">
              {img}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
