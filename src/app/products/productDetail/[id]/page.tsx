import React from 'react';

function Page() {
  return (
    <div className="w-full p-5 mx-auto">
      <div className="mx-auto flex flex-col gap-20 items-center">
        <div className="text-center">
          <h3>뷸렛 카메라</h3>
          <p className="mt-5">쉽게 설치가 가능하며 야간식별이 가능한 LED 일체형 초고화질 카메라</p>
        </div>
        <div className="flex gap-10 w-full">
          <div className="">
            <div className="w-[300px] h-[250px] bg-slate-400">image</div>
            <button className="mt-4 border-[1px] border-black p-2 rounded-lg">카달로그</button>
          </div>
          <div className="h-[300px] w-full bg-slate-300">상세정보1</div>
        </div>
        <div className="bg-slate-300 h-[400px]">상세정보 2</div>
      </div>
    </div>
  );
}

export default Page;
