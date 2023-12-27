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
    <>
      <div>
        <div className="w-36 h-10">
          <Image src={logo} alt="backToListImg" />
        </div>
        <div className="flex gap-4">
          <ul className="flex flex-col gap-2 font-bold">
            {companyInfo[0].map(info => (
              <span key={info}>{info}</span>
            ))}
          </ul>
          <ul className="flex flex-col gap-2">
            {companyInfo[1].map(info => (
              <span key={info}>{info}</span>
            ))}
          </ul>
        </div>
      </div>
      <ul className="flex gap-7">
        {certification.map((a, i) => (
          <Certification key={i} imgSrc={a[1]} name={a[0]} />
        ))}
      </ul>
    </>
  );
}

export default page;
