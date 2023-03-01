import React from 'react';
import './App.css';

import CreateTask from './components/CreateTask'

function App() {
    return (
        <div className='App'>
            <h1>ToDoList</h1>
            <CreateTask/>
        </div>
    );
}

export default App;
