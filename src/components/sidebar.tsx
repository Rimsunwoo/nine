import {Fragment} from 'react';

import Link from 'next/link';

const nav = ['BroadCast', 'CCTV', 'WhiteBoard'];

function Sidebar({type}: {type: string}) {
  return (
    <div className="fixed left-[10%] top-1/2 -translate-y-1/2 h-fit overflow-hidden w-52">
      <nav className="flex flex-col text-center">
        {nav.map((category, index) => {
          return (
            <Fragment key={category}>
              <Link
                href={`/products/${category.toLowerCase()}`}
                className={`hover:text-primary py-5 roun w-full text-gray-500 ${
                  type === category.toLowerCase() && 'font-semibold text-primary'
                }`}>
                {category}
              </Link>
              {index < nav.length - 1 && <div className="w-36 h-[1px] bg-slate-400 mx-auto" />}
            </Fragment>
          );
        })}
      </nav>
    </div>
  );
}

export default Sidebar;
