import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { RootState } from '../../store';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
    const todos = useAppSelector((state: RootState) => state.todos.items);

    return (
        <ul className='mt-2'>
            {todos.map((todo) => (
                <TodoItem key={todo.id} {...todo} />
            ))}
        </ul>
    );
};

export default TodoList;

