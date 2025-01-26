import React, { useState } from 'react';
import {useActions} from "../../hooks/actions";
import Input from '../../UI/Input';

const AddTodo: React.FC = () => {
    const [text, setText] = useState('')
    const {addTodo} = useActions()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (text.trim()) {
            addTodo(text)
            setText('')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center">
            <Input
                className='border py-2 px-4 h-[42px] mb-2 flex-grow'
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task..."
            />
            <button
                type="submit"
                className='ml-2 border py-2 px-4 h-[42px] mb-2 hover:border-black hover:bg-gray-400'
            >
                Add
            </button>
        </form>
    );
};

export default AddTodo
