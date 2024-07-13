import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoItem = ({ todo }) => {
    const { dispatch } = useContext(TodoContext);

    const removeTodo = () => {
        dispatch({ type: 'REMOVE_TODO', payload: todo.id });
    };

    return (
        <li>
            {todo.text}
            <button onClick={removeTodo}>Remove</button>
        </li>
    );
};

export default TodoItem;
