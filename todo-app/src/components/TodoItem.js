import React from 'react';


const TodoItem = ({ task, onDelete }) => {
    return (
        <li>
            <span>{task.content}</span>
            <button onClick={() => onDelete(task.id)}>Remove</button>
        </li>
    );
}

export default TodoItem;