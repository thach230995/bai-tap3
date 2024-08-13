import React from 'react';
import { Table, Button } from 'antd';

const TaskTable = ({ tasks, deleteTask }) => {
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Creator',
      dataIndex: 'creator',
      key: 'creator',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Button type="link" danger onClick={() => deleteTask(record.id)}>
          Delete
        </Button>
      ),
    },
  ];

  return <Table dataSource={tasks} columns={columns} rowKey="id" />;
};

export default TaskTable;
