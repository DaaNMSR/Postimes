import React from 'react';
import AddTodo from "../components/todo/AddTodo";
import TodoList from "../components/todo/TodoList";


const TodoPage = () => {
    return (
        <div className='grid place-items-center'>
            <h1 className='my-5 text-xl font-medium'>Todo List</h1>
            <AddTodo/>
            <TodoList />
        </div>
    );
};

export default TodoPage;