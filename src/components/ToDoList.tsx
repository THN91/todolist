import React, {Dispatch, useState} from 'react';

import {Task} from '../interface/task';
import Modal from './Modal/Modal';


const ToDoList = (
    {tasks, setTasks}:
        { tasks: Task[], setTasks: Dispatch<React.SetStateAction<Task[]>> }): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false);
    const [checked, setChecked] = useState<number>();
    const task = tasks.find(task => task.id === checked);

    const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const changeTasks = tasks.map((task) => ({
            ...task,
            status: task.id === Number(e.target.id) ? !task.status : task.status
        }));
        setTasks(changeTasks);
    };

    const handleModalOpen = (id: number) => {
        setOpen(!open)
        setChecked(id)
    }

    const statusChangeModal = (id: number | undefined) => {
        const changeTasks = tasks.map((task) => ({
            ...task,
            status: task.id === id ? !task.status : task.status
        }))
        setTasks(changeTasks)
    };

    return (
        <div style={{margin: '40px'}}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '400px',
                padding: '5px',
                backgroundColor: '#646363'
            }}>
                <div>ID</div>
                <div>TITLE</div>
                <div>DESCRIPTION</div>
                <div>STATUS</div>
            </div>
            <div>
                {tasks.map((task) => (
                    <div
                        key={task.id}
                        onClick={() => handleModalOpen(task.id)}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '400px',
                            backgroundColor: '#a19f9f',
                            padding: '5px',
                            margin: '5px 0'
                        }}
                    >
                        <div>{task.id}.</div>
                        <div>{task.title}</div>
                        <div>{task.description}</div>
                        <input
                            id={String(task.id)}
                            type='checkbox'
                            checked={task.status}
                            onClick={event => event.stopPropagation()}
                            onChange={handleStatusChange}/>
                    </div>
                ))}
            </div>
            <Modal open={open} setOpen={setOpen}>
                <div>
                    <h2>{task?.title}</h2>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                            padding: '10px 0'
                        }}>
                        <h3>Description:</h3>
                        <div style={{fontSize: '24px'}}>{task?.description}</div>
                    </div>
                    <div style={{display: 'flex', padding: '10px 0'}}>
                        <label htmlFor='status'>Status:</label> <br/>
                        <input
                            id='status'
                            type='checkbox'
                            checked={task?.status}
                            onChange={() => statusChangeModal(task?.id)}
                        />
                    </div>
                    <button style={{display: 'flex'}} onClick={() => setOpen(!open)}>
                        Close
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default ToDoList;
