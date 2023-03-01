import React, { useState } from 'react';



const ToDoList: React.FC = () => {

    const tasks = [
        {
            id: 0,
            title: 'asdasds',
            description: 'dasdasdas',
            status: false,
        },
        {
            id: 1,
            title: 'asdasds',
            description: 'dasdasdas',
            status: false,
        },
        {
            id: 2,
            title: 'asdasds',
            description: 'dasdasdas',
            status: false,
        }
    ]




    return (
        <div>
        {tasks.map((task) => (
            <div key={task.id} onClick={() => handleTaskClick(task.id)}>
                <div>{task.title}</div>
                <div>{task.description}</div>
                <div>{task.status ? 'Done' : 'Pending'}</div>
            </div>
        ))}
    </div>
    );
};

export default ToDoList;
