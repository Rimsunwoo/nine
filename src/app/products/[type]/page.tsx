import BroadCastPage from '@/components/broad-cast';
import CctvPage from '@/components/cctv-page';
import WhiteBoard from '@/components/company/white-board';
import Sidebar from '@/components/sidebar';

export interface Props {
  params: {
    type: string;
  };
}

function Page({params: {type}}: Props) {
  return (
    <div className="mt-5">
      <Sidebar />
      {type == 'cctv' && <CctvPage />}
      {type == 'broadcast' && <BroadCastPage />}
      {type == 'whiteboard' && <WhiteBoard />}
    </div>
  );
}

export default Page;
