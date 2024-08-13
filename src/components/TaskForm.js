import React, { useState, useEffect } from 'react';
import { Form, Input, Radio, Button } from 'antd';

const TaskForm = ({ addTask, updateTask, selectedTask }) => {
  const [form] = Form.useForm();
  const [taskData, setTaskData] = useState({
    title: '',
    creator: '',
    status: 'New',
    description: '',
  });
  useEffect(() => {
    if (selectedTask) {
      form.setFieldsValue(selectedTask);
      setTaskData(selectedTask);
    }
  }, [selectedTask, form]);
  const onFinish = () => {
    if (selectedTask) {
      updateTask({ ...taskData, id: selectedTask.id });
    } else {
      addTask({ ...taskData, id: Date.now() });
    }
    form.resetFields();
    setTaskData({
      title: '',
      creator: '',
      status: 'New',
      description: '',
    });
  };
  const handleInputChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };
  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item name="title" label="Title">
        <Input name="title" onChange={handleInputChange} />
      </Form.Item>
      <Form.Item name="creator" label="Creator">
        <Input name="creator" onChange={handleInputChange} />
      </Form.Item>
      <Form.Item name="status" label="Status">
        <Radio.Group name="status" onChange={handleInputChange}>
          <Radio value="New">New</Radio>
          <Radio value="Doing">Doing</Radio>
          <Radio value="Done">Done</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="description" label="Description">
        <Input.TextArea
          name="description"
          rows={3}
          onChange={handleInputChange}
        />
      </Form.Item>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
        <Button htmlType="reset" onClick={() => form.resetFields()}>
          Reset
        </Button>
      </div>
    </Form>
  );
};

export default TaskForm;
