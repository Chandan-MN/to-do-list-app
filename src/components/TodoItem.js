import React, { useState } from 'react';

function TodoItem({ task, index, updateTask, deleteTask, toggleEditing, toggleCompletion }) {
    const [newText, setNewText] = useState(task.text);

    return (
        <li className={`todo-item ${task.isCompleted ? 'completed' : ''}`}>
            {task.isEditing ? (
                <>
                    <input
                        type="text"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                    />
                    <button onClick={() => updateTask(index, newText)}>Save</button>
                </>
            ) : (
                <>
                    <span>{task.text}</span>
                    <button onClick={() => toggleEditing(index)}>Edit</button>
                    <button onClick={() => toggleCompletion(index)}>
                        {task.isCompleted ? 'Undo' : 'Complete'}
                    </button>
                    <button onClick={() => deleteTask(index)}>Delete</button>
                </>
            )}
        </li>
    );
}

export default TodoItem;
