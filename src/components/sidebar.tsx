import {Fragment} from 'react';

import Link from 'next/link';

const nav = ['Broad Cast', 'CCTV', 'White Board'];

function Sidebar({type}: {type: string}) {
  return (
    <div className="fixed left-[7%] top-1/2 -translate-y-1/2 h-fit overflow-hidden w-52 max-2xl:hidden ">
      <nav className="flex flex-col text-center">
        {nav.map((category, index) => {
          return (
            <Fragment key={category}>
              <Link
                href={`/products/${category.toLowerCase().replace(' ', '')}`}
                className={`hover:text-primary py-5 w-40 text-gray-500 ${
                  type === category.toLowerCase().replace(' ', '') && 'font-semibold text-primary'
                }
                ${index < nav.length - 1 && 'border-b-2'}
                `}>
                {category}
              </Link>
            </Fragment>
          );
        })}
      </nav>
    </div>
  );
}

export default Sidebar;
