import React from 'react';
import { Button, Input } from 'antd';

const Header = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };
  return (
    <div className="header-container">
      <Button type="primary">Create New Task</Button>
      <Input
        placeholder="Type something to search"
        style={{ width: 300, marginLeft: 10 }}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Header;
