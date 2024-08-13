import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [filter, setFilter] = useState('All');
  useEffect(() => {
    const fetchTasks = async () => {
      const result = await axios.get('http://localhost:5000/tasks');
      setTasks(result.data);
      setFilteredTasks(result.data);
    };
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    const response = await axios.post('http://localhost:5000/tasks', task);
    setTasks([...tasks, response.data]);
    setFilter('All');
  };

  const updateTask = async (updatedTask) => {
    const response = await axios.put(
      `http://localhost:5000/tasks/${updatedTask.id}`,
      updatedTask
    );
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? response.data : task
    );
    setTasks(updatedTasks);
    setFilter('All');
  };

  const deleteTask = async (taskId) => {
    await axios.delete(`http://localhost:5000/tasks/${taskId}`);
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const filterTasks = (filterType) => {
    if (filterType === 'All') {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(tasks.filter((task) => task.status === filterType));
    }
    setFilter(filterType);
  };
  const searchTasks = (searchTerm) => {
    setFilteredTasks(
      tasks.filter(
        (task) =>
          task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          task.creator.toLowerCase().includes(searchTerm.toLowerCase()) ||
          task.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };
  return (
    <div className="app-container">
      <div className="sidebar-container">
        <Sidebar filterTasks={filterTasks} />
      </div>
      <div className="main-container">
        <Header onSearch={searchTasks} />
        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          setSelectedTask={setSelectedTask}
        />
        <TaskForm
          addTask={addTask}
          updateTask={updateTask}
          selectedTask={selectedTask}
        />
      </div>
    </div>
  );
};

export default App;
