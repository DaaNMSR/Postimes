import React from 'react';
import { RootState, useAppSelector } from '../../../../store/store';
import { TodoItem } from './components/TodoItem/TodoItem';

export const TodoList: React.FC = () => {
  const todos = useAppSelector((state: RootState) => state.todos.items);

  return (
    <ul className="mt-2 max-w-52">
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
