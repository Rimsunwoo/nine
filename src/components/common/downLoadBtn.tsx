import React from 'react';

import {DownloadOutlined} from '@ant-design/icons';
export default function DownLoadBtn({children}: any) {
  return (
    <button className="flex bg-[#2784FF] text-white items-center p-3 rounded-lg hover:bg-[#71A6FF]">
      <DownloadOutlined />
      <span>{children}</span>
    </button>
  );
}
