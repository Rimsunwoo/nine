import BroadCastPage from '@/components/products/broad-cast';
import CctvPage from '@/components/products/cctv-page';
import WhiteBoard from '@/components/products/white-board';
import Sidebar from '@/components/sidebar';

export interface Props {
  params: {
    type: string;
  };
}

function Page({params: {type}}: Props) {
  return (
    <div>
      <Sidebar type={type} />
      {type == 'cctv' && <CctvPage />}
      {type == 'broadcast' && <BroadCastPage />}
      {type == 'whiteboard' && <WhiteBoard />}
    </div>
  );
}

export default Page;
