'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';

function Footer() {
  const location = usePathname();
  if (location === '/') return;
  return (
    <footer className="w-full mt-12 py-4 border-t-2 flex flex-col items-center">
      <p className="text-sm whitespace-nowrap ">
        주소: 경상북도 칠곡군 기산면 지산로 634 사업자등록번호 : 423-87-02274
      </p>

      <p className="text-sm whitespace-nowrap ">사업자등록번호 : 423-87-02274 대표자 : 양수경</p>

      <p className="text-sm whitespace-nowrap opacity-45">
        COPYRIGHT(C) 2023 Nine Co.Ltd. ALL RIGHT RESERVED.{' '}
        <Link href={`/admin`} className="border p-1">
          관리자용
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
