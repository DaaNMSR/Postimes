import React from 'react';
import { AddTodo } from './components/AddTodo/AddTodo';
import { TodoList } from './components/TodoList/TodoList';

export const TodoPage = () => {
  return (
    <div className="grid place-items-center">
      <h1 className="my-5 text-xl font-medium">Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};
