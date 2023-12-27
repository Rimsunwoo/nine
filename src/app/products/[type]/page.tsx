import CctvPage from '@/components/cctv-page';

export interface Props {
  params: {
    type: string;
  };
}

function Page({params: {type}}: Props) {
  return (
    <div>
      {type}
      <CctvPage />
    </div>
  );
}

export default Page;
