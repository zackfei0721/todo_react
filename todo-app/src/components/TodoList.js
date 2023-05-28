import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, onDelete, onToggle, onEdit }) => {
    // separate tasks into 2 sections, pending & completed
    const completedTasks = tasks.filter(task => task.completed);
    const pendingTasks = tasks.filter(task => !task.completed);

    return (
        <div>
            <h2>Pending Tasks</h2>
            <ul>
                {pendingTasks.map((task) => (
                    <TodoItem 
                        key={task.id} 
                        task={task} 
                        onDelete={onDelete} 
                        onToggle={onToggle} 
                        onEdit={onEdit} 
                    />
                ))}
            </ul>
            <h2>Completed Tasks</h2>
            <ul>
                {completedTasks.map((task) => (
                    <TodoItem 
                        key={task.id} 
                        task={task} 
                        onDelete={onDelete} 
                        onToggle={onToggle} 
                        onEdit={onEdit} 
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;