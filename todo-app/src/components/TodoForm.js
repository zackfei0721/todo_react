import React from 'react';

const TodoForm = ({ task, onAdd, onChange }) => {
    return (
        <form onSubmit={onAdd}>
            <input
                type = 'text'
                placeholder='Please Add Todo Task...'
                value={task}
                onChange={onChange}
                />
            <button type='submit'>Add Task</button>
        </form>
    )
}


export default TodoForm;