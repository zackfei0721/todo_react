import './App.css';
import React, { useState, useEffect } from 'react';
import api from './services/api';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';


function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handlePageIndexChange = (index) => {
    setPageIndex(index);
  };

  const getTasks = async () => {
    const tasks = await api.getTasks();
    setTasks(tasks);
    console.log(tasks);
  }

  useEffect(() => {
    getTasks();
  }, []);

  const handleAdd = async (event) => {
    event.preventDefault();
    if (task) {
      const newTask = { content: task,
                        completed: false };
      await api.addTask(newTask);
      setTask('');
      getTasks();
    }
  };

  const handleDelete = async (id) => {
    await api.deleteTask(id);
    getTasks();
  };

  const handleToggle = async (id, status) => {
    await api.toggleTask(id, {completed: status});
    getTasks();
  }

  const handleEdit = async (id, newTaskContent) => {
    const updatedTask = tasks.find(task => task.id === id);
    if (updatedTask){
      const editedTask = {
        ...updatedTask,
        content: newTaskContent
      };
      await api.editTask(id, editedTask);
      getTasks();
    }
  }

  return (
    <div className="App">
      <Navbar onIndexChange={handlePageIndexChange} />
      {
        pageIndex === 0 ? <Dashboard tasks={tasks}/> :
        <>
          <h1>Todo List</h1>
          <TodoForm 
              task={task} 
              onAdd={handleAdd} 
              onChange={(e) => setTask(e.target.value)} />
          <TodoList 
              tasks={tasks} 
              onDelete={handleDelete}
              onToggle={handleToggle} 
              onEdit={handleEdit} />
        </>
      }
    </div>
  );
}

export default App;
