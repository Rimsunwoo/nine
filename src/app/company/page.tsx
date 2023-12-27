import React from 'react';

import Image from 'next/image';

import Certification from '@/components/company/certification';

import logo from '../../../public/logo.svg';
import 사업자등록증 from '../../../public/사업자등록증.png';
import 여성기업확인서 from '../../../public/여성기업확인서.png';
import 정보통신공사업등록증 from '../../../public/정보통신공사업등록증.png';
import 중소기업확인서 from '../../../public/중소기업확인서.png';
import 창업기업확인서 from '../../../public/창업기업확인서.png';

function page() {
  const companyInfo = [
    ['회사명', '대표이사', '본사/소재지', '설립일'],
    ['(주)나인', '양수경', '경상북도 칠곡군 기산면 지산로 634', '2021년 09월 06일'],
  ];
  const certification = [
    ['정보통신공사업등록증', 정보통신공사업등록증],
    ['여성기업확인서', 여성기업확인서],
    ['사업자등록증', 사업자등록증],
    ['창업기업확인서', 창업기업확인서],
    ['중소기업확인서', 중소기업확인서],
  ];
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2 flex-col items-center mb-7">
        <div className="relative w-52 h-16">
          <Image src={logo} alt="logo" fill />
        </div>
        <div className="flex gap-4 mt-4">
          <ul className="flex flex-col gap-3 font-bold">
            {companyInfo[0].map(info => (
              <span key={info}>{info}</span>
            ))}
          </ul>
          <ul className="flex flex-col gap-3">
            {companyInfo[1].map(info => (
              <span key={info}>{info}</span>
            ))}
          </ul>
        </div>
      </div>
      <ul className="grid grid-cols-1 justify-center gap-10 xl:grid-cols-2 mt-10">
        {certification.map((a, i) => (
          <Certification key={i} imgSrc={a[1]} name={a[0]} />
        ))}
      </ul>
    </div>
  );
}

export default page;
