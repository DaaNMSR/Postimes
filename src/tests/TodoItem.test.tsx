import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import  TodoItem from '../components/todo/TodoItem';
import { useActions } from '../hooks/actions';


jest.mock('../hooks/actions');

const mockToggleTodo = jest.fn();
const mockRemoveTodo = jest.fn();

beforeEach(() => {
    (useActions as jest.Mock).mockReturnValue({
        toggleTodo: mockToggleTodo,
        removeTodo: mockRemoveTodo,
    });
});

const renderTodoItem = () => {
    render(<TodoItem id='1' text='Test todo' completed = {false} />);
}

const getElements = () => {
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    const todoText = screen.getByText('Test todo') as HTMLSpanElement;
    const buttonRemove = screen.getByText('Remove') as HTMLButtonElement;
    return { checkbox,todoText,buttonRemove }
}


describe('TodoItem', () => {

    it('renders TodoItem', () => {
        renderTodoItem()
        
        const { checkbox,todoText,buttonRemove } = getElements()
    
        expect(todoText).toBeInTheDocument();
        expect(buttonRemove).toBeInTheDocument();
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();
    });

    it('toggles checkbox by click', () => {
        renderTodoItem()
        const { checkbox } = getElements()
        fireEvent.click(checkbox);

        expect(mockToggleTodo).toHaveBeenCalledWith('1');
        expect(mockToggleTodo).toHaveBeenCalledTimes(1);
    });

    it('toggles todo by text click', () => {
        renderTodoItem()
        
        const { todoText } = getElements()
        fireEvent.click(todoText);
    
        expect(mockToggleTodo).toHaveBeenCalledWith('1');
        expect(mockToggleTodo).toHaveBeenCalledTimes(1);
    });
    
    it('remove TodoItem by click button', () => {
        renderTodoItem();

        const { buttonRemove } = getElements();

        fireEvent.click(buttonRemove);

        
        expect(mockRemoveTodo).toHaveBeenCalledWith('1');
        expect(mockRemoveTodo).toHaveBeenCalledTimes(1);
    })
});







