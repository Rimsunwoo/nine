import React from 'react';

import {DeleteOutlined} from '@ant-design/icons';

import {deletePost} from '@/app/api/admin';

function DeleteBtn({id, setUpdated}: {id: string; setUpdated: any}) {
  return (
    <DeleteOutlined
      className="absolute bottom-2 right-2 text-2xl hover:scale-110"
      onClick={() => {
        const ischeck = confirm('정말 삭제하시겠습니까?');
        if (ischeck) {
          deletePost(id);
          alert('삭제가 완료되었습니다.');
          setUpdated((prev: boolean) => !prev);
        }
      }}
    />
  );
}

export default DeleteBtn;
