'use client';
import {useRouter} from 'next/navigation';

function Sidebar() {
  const route = useRouter();
  return (
    <ul className="absolute font-bold">
      <li className="mb-2 hover:bg-gray-200">
        <button onClick={() => route.push('/products/broadcast')}>BroadCast</button>
      </li>
      <li className="mb-2 hover:bg-gray-200">
        <button onClick={() => route.push('/products/cctv')}>CCTV</button>
      </li>
      <li className="mb-2 hover:bg-gray-200">
        <button onClick={() => route.push('/products/whiteboard')}>WhiteBoard</button>
      </li>
    </ul>
  );
  return <div className="border-2 border-black w-fit p-20">Sidebar</div>;
}

export default Sidebar;
