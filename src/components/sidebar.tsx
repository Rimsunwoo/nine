import {Fragment} from 'react';

import Link from 'next/link';

const nav = ['BroadCast', 'CCTV', 'WhiteBoard'];

function Sidebar({type}: {type: string}) {
  return (
    <div className="fixed left-[5%] top-1/2 -translate-y-1/2 h-fit overflow-hidden w-52 max-xl:hidden ">
      <nav className="flex flex-col text-center">
        {nav.map((category, index) => {
          return (
            <Fragment key={category}>
              <Link
                href={`/products/${category.toLowerCase()}`}
                className={`hover:text-primary py-5 w-40 text-gray-500 ${
                  type === category.toLowerCase() && 'font-semibold text-primary'
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
