import './App.css';
import React, { useState, useEffect } from 'react';
import api from './services/api';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';


function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const tasks = await api.getTasks();
    setTasks(tasks);
  }

  useEffect(() => {
    getTasks();
  }, []);

  const handleAdd = async (event) => {
    event.preventDefault();
    if (task) {
      const newTask = { content: task };
      await api.addTask(newTask);
      setTask('');
      getTasks();
    }
  };

  const handleDelete = async (id) => {
    await api.deleteTask(id);
    getTasks();
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm 
          task={task} 
          onAdd={handleAdd} 
          onChange={(e) => setTask(e.target.value)} />
      <TodoList 
          tasks={tasks} 
          onDelete={handleDelete} />
    </div>
  );
}

export default App;
