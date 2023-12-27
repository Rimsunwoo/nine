import React from 'react';

import Link from 'next/link';

const menu = [
  ['홈', '/'],
  ['기업소개', '/company'],
  ['제품소개', '/products'],
  ['설치사례', '/exampleBoard'],
];

function Header() {
  return (
    <div className="h-20 border-2 border-b-black flex justify-center items-center">
      <div className="flex gap-4">
        {menu.map(item => {
          return (
            <Link href={item[1]} key={item[0]}>
              <h2>{item[0]}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
