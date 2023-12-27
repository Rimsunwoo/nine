import Link from 'next/link';

const nav = ['BroadCast', 'CCTV', 'WhiteBoard'];

function Sidebar({type}: {type: string}) {
  return (
    <div className="fixed left-[10%] translate-y-1/2 border-[2px] border-gray-400 h-fit rounded-xl overflow-hidden">
      <nav className="flex flex-col text-center">
        {nav.map(category => {
          return (
            <Link
              href={`/products/${category.toLowerCase()}`}
              key={category}
              className={`hover:bg-gray-200 p-4 w-full text-gray-500 ${
                type === category.toLowerCase() && 'text-black font-semibold'
              }`}>
              {category}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default Sidebar;
