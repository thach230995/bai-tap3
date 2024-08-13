import React from 'react';
import { List, Button } from 'antd';

const TaskList = ({ tasks, deleteTask, setSelectedTask }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={tasks}
      renderItem={(task) => (
        <List.Item
          actions={[
            <Button type="link" onClick={() => setSelectedTask(task)}>
              Edit
            </Button>,
            <Button type="link" onClick={() => deleteTask(task.id)} danger>
              Delete
            </Button>,
          ]}
        >
          <List.Item.Meta
            title={task.title}
            description={`Creator: ${task.creator} | Status: ${task.status}`}
          />
        </List.Item>
      )}
    />
  );
};

export default TaskList;
