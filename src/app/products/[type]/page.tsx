import BroadCastPage from '@/components/broad-cast';
import CctvPage from '@/components/cctv-page';
import Sidebar from '@/components/sidebar';
import WhiteBoard from '@/components/white-board';

export interface Props {
  params: {
    type: string;
  };
}

function Page({params: {type}}: Props) {
  return (
    <div className="px-40">
      <Sidebar type={type} />
      {type == 'cctv' && <CctvPage />}
      {type == 'broadcast' && <BroadCastPage />}
      {type == 'whiteboard' && <WhiteBoard />}
    </div>
  );
}

export default Page;
