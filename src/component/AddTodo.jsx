import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';

const AddTodo = () => {
    const [text, setText] = useState('');
    const { dispatch } = useContext(TodoContext);

    const addTodo = (e) => {
        e.preventDefault();
        if (text) {
            dispatch({ type: 'ADD_TODO', payload: { id: Date.now(), text } });
            setText('');
        }
    };

    return (
        <form onSubmit={addTodo}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new todo"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodo;
