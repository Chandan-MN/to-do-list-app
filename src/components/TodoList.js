import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, addTask, updateTask, deleteTask, toggleEditing, toggleCompletion }) {
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim()) {
            addTask(newTask);
            setNewTask('');
        }
    };

    return (
        <div className="todo-list">
            <input
                type="text"
                placeholder="Add a new task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={handleAddTask}>Add</button>
            <ul>
                {tasks.map((task, index) => (
                    <TodoItem 
                        key={index}
                        index={index}
                        task={task}
                        updateTask={updateTask}
                        deleteTask={deleteTask}
                        toggleEditing={toggleEditing}
                        toggleCompletion={toggleCompletion}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
