import Link from 'next/link';

function Sidebar() {
  return (
    <div className="fixed translate-y-1/2 border-[2px] border-gray-400 h-fit rounded-xl overflow-hidden">
      <ul className="text-center">
        <li className="mb-2 hover:bg-gray-200 p-4 overflow-hidden">
          <Link href={'/products/broadcast'}>BroadCast</Link>
        </li>
        <li className="mb-2 hover:bg-gray-200 p-4">
          <Link href={'/products/cctv'}>CCTV</Link>
        </li>
        <li className="hover:bg-gray-200 p-4">
          <Link href={'/products/whiteboard'}>WhiteBoard</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
