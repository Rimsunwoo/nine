import type {Dispatch, SetStateAction} from 'react';
import React from 'react';

import {UploadOutlined} from '@ant-design/icons';
import {Button, Upload} from 'antd';
import {v4} from 'uuid';

import {getPostImgUrl, uploadImg} from '@/app/api/admin';

function UploadThumbnail({setThumbnail}: {setThumbnail: Dispatch<SetStateAction<string>>}) {
  const handleFileUpload = async ({file, onSuccess}: any) => {
    const imgName = v4();
    const img = {
      imgName,
      imgFile: file,
    };
    await uploadImg(img);
    onSuccess();
    setThumbnail(getPostImgUrl(imgName));
  };
  return (
    <Upload customRequest={handleFileUpload} listType="picture" maxCount={1} accept="image/*">
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  );
}

export default UploadThumbnail;
