import React, { useState } from 'react';
import { useActions } from '../../../../store/actions';
import Input from '../../../../components/UI/Input';
import Button from '../../../../components/UI/Button';

export const AddTodo: React.FC = () => {
  const [text, setText] = useState('');
  const { addTodo } = useActions();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <Input
        className="border py-2 px-4 h-[42px] mb-2 flex-grow"
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a new task..."
      />
      <Button
        type="submit"
        className="ml-2 border py-2 px-4 h-[42px] mb-2 hover:border-black hover:bg-gray-400"
      >
        Add
      </Button>
    </form>
  );
};
