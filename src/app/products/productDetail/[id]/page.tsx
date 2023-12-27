import React from 'react';

import CctvDetail from '@/components/cctvDetail';

interface Props {
  params: {
    id: string;
  };
}

function Page({params: {id}}: Props) {
  return <CctvDetail model={id} />;
}

export default Page;
