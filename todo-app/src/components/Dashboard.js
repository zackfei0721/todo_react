import React from 'react';

const Dashboard = ({ tasks }) => {
    const completedTasks = tasks.filter(task => task.completed === true).length;
    const totalTasks = tasks.length;

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Total Tasks: {totalTasks}</p>
            <p>Completed Tasks: {completedTasks}</p>
        </div>
    );
}

export default Dashboard;