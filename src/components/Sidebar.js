import React from 'react';
import { Button } from 'antd';

const Sidebar = ({ filterTasks }) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', backgroundColor: '#ffa500', padding: 10, height: '100%'}} className="sidebar-container">
      <Button onClick={() => filterTasks('All')} style={{ marginBottom: 10 }}>
        All Task
      </Button>
      <Button onClick={() => filterTasks('New')} style={{ marginBottom: 10 }}>
        New Task
      </Button>
      <Button onClick={() => filterTasks('Doing')} style={{ marginBottom: 10 }}>
        Doing Task
      </Button>
      <Button onClick={() => filterTasks('Done')} style={{ marginBottom: 10 }}>
        Done Task
      </Button>
    </div>
  );
};

export default Sidebar;
