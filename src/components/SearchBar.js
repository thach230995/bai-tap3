import React from 'react';
import { Input, Button } from 'antd';

const SearchBar = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Input placeholder="Type something to search" style={{ width: 300, marginRight: 10 }} />
      <Button type="primary">Search</Button>
    </div>
  );
};

export default SearchBar;
