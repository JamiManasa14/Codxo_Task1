import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoList from '../component/TodoList';
import AddTodo from '../component/AddTodo';
import '../styles/Todo.css';

const HomePage = () => {
    const { todos } = useContext(TodoContext);

    return (
        <div className="home-page">
            <h1>Todo App</h1>
            <AddTodo />
            <TodoList todos={todos} />
        </div>
    );
};

export default HomePage;
