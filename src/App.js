import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        setTasks([...tasks, { text: task, isEditing: false, isCompleted: false }]);
    };

    const updateTask = (index, newText) => {
        const newTasks = tasks.map((task, i) =>
            i === index ? { ...task, text: newText, isEditing: false } : task
        );
        setTasks(newTasks);
    };

    const deleteTask = index => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const toggleEditing = index => {
        const newTasks = tasks.map((task, i) =>
            i === index ? { ...task, isEditing: !task.isEditing } : task
        );
        setTasks(newTasks);
    };

    const toggleCompletion = index => {
        const newTasks = tasks.map((task, i) =>
            i === index ? { ...task, isCompleted: !task.isCompleted } : task
        );
        setTasks(newTasks);
    };

    return (
        <div className="app">
            <h1>To-Do List</h1>
            <TodoList 
                tasks={tasks} 
                addTask={addTask} 
                updateTask={updateTask}
                deleteTask={deleteTask}
                toggleEditing={toggleEditing}
                toggleCompletion={toggleCompletion}
            />
        </div>
    );
}

export default App;
