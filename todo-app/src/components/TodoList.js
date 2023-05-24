import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, onDelete }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <TodoItem 
                    key={task.id} 
                    task={task} 
                    onDelete={onDelete} 
                />
            ))}
        </ul>
    );
}

export default TodoList;