import React, {useState} from 'react';

import ToDoList from './ToDoList';
import {Task} from '../interface/task';

function CreateTask() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    };

    const handleCreateTask = () => {
        if (title.trim() === '') {
            setError('This field is empty');
            return;
        }

        const newTask: Task = {
            id: tasks.length + 1,
            title,
            description,
            status: false,
        };

        setTasks([...tasks, newTask]);
        setTitle('');
        setDescription('');
        setError('');
    };

    return (
        <div>
            <div style={{margin: '20px', display: 'flex', alignItems: 'center'}}>
                <div style={{display: 'flex'}}>
                    <div style={{textAlign: 'start', padding: '20px'}}>
                        <label htmlFor='title'>Title:</label> <br/>
                        <input
                            style={{
                                width: '200px',
                                height: '30px',
                                borderColor: error ? '#ff0000' : '#010101',
                            }}
                            id='title'
                            type='text'
                            value={title}
                            onChange={handleTitleChange}
                            placeholder='title'
                        />
                        {error && <div style={{color: '#ff0000'}}>{error}</div>}
                    </div>
                    <div style={{textAlign: 'start', padding: '20px'}}>
                        <label htmlFor='description'>Description:</label><br/>
                        <input
                            style={{width: '200px', height: '30px'}}
                            id='description'
                            type='text'
                            value={description}
                            onChange={handleDescriptionChange}
                            placeholder='description'
                        />
                    </div>
                </div>
                <button
                    style={{width: '100px', height: '30px'}}
                    onClick={handleCreateTask}
                >
                    Create
                </button>
            </div>
            <ToDoList tasks={tasks} setTasks={setTasks} />
        </div>
    );
}

export default CreateTask;
