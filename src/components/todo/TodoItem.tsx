import React from 'react';
import {useActions} from "../../hooks/actions";
import Button from "../../UI/Button";

interface TodoItemProps {
    id: string;
    text: string;
    completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed }) => {
    const {toggleTodo,removeTodo} = useActions()
    
    return (
        <li className='flex justify-between items-center'>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => toggleTodo(id)}
                className='cursor-pointer mr-1'
            />
            <span
                style={{ textDecoration: completed ? 'line-through' : 'none' }}
                className='text-[18px] cursor-pointer p-1 text-slate-800'
                onClick={() => toggleTodo(id)}
            >
                {text}
            </span>
            <Button
                onClick={() => removeTodo(id)}
                className='relative right-[-10px] text-[14px] ml-2 border px-1 mb-2 hover:border-black hover:bg-red-500 hover:text-white transition-all duration-200'
                text='Remove'
            />
        </li>
    );
}
export default TodoItem;