import React from 'react';

import {Select} from 'antd';

function SelectBox({selectCategory}: {selectCategory: (value: string) => void}) {
  return (
    <Select
      placeholder="제품을 선택하세요"
      onChange={selectCategory}
      options={[
        {value: 'Broad Cast', label: 'Broad Cast'},
        {value: 'CCTV', label: 'CCTV'},
        {value: 'White Board', label: 'White Board'},
      ]}
    />
  );
}

export default SelectBox;
