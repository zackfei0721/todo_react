import React, { useState } from 'react';

const TodoItem = ({ task, onDelete, onToggle, onEdit }) => {
    const [editMode, setEditMode] = useState(false);
    const [newTaskContent, setNewTaskContent] = useState(task.content);

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = () => {
        onEdit(task.id, newTaskContent);
        setEditMode(false);
    };

    return (
        <li>
            { editMode ? 
              <>
                <input 
                  type="text" 
                  value={newTaskContent} 
                  onChange={(e) => setNewTaskContent(e.target.value)} 
                />
                <button onClick={handleSaveClick}>Save</button>
              </> :
              <>
                <span onClick={() => onToggle(task.id, !task.completed)} 
                      style={{textDecoration: task.completed ? 'line-through' : 'none'}}>
                      {task.content}
                </span>
                <button onClick={handleEditClick}>Edit</button>
                <button onClick={() => onDelete(task.id)}>Remove</button>
              </>
            }
        </li>
    );
}

export default TodoItem;