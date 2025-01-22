import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import  AddTodo from '../components/todo/AddTodo';
import { Provider } from 'react-redux';
import { store } from '../store';
import { useActions } from '../hooks/actions';


jest.mock('../hooks/actions');

const mockAddTodo = jest.fn();

beforeEach(() => {
    (useActions as jest.Mock).mockReturnValue({
        addTodo: mockAddTodo
    });
});


const renderAddTodo = () => {
    render(
        <Provider store={store}>
            <AddTodo />
        </Provider>
    )
}

const getElements = () => {
    const inputElement = screen.getByPlaceholderText('Add a new task...') as HTMLInputElement;
    const buttonElement = screen.getByText('Add') as HTMLButtonElement;
    return { inputElement, buttonElement };
}


describe('AddTodo component', () => {

    it('renders AddTodo', () => {
        renderAddTodo();

        const { inputElement, buttonElement } = getElements();
        
        expect(inputElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
    });

    it('input working, when typing', () => {
        renderAddTodo();

        const { inputElement } = getElements();

        fireEvent.change(inputElement, {target: {value: 'Typing test'}});

        expect(inputElement.value).toBe('Typing test');

    })

    it('add item by click button', () => {
        renderAddTodo();

        const { inputElement,buttonElement } = getElements();

        fireEvent.change(inputElement, {target: {value: 'Typing test'}});
        fireEvent.click(buttonElement);

        expect(mockAddTodo).toHaveBeenCalledTimes(1);

    })

    it('click button to add item , then input should be empty', () => {
        renderAddTodo();

        const { inputElement, buttonElement } = getElements();

        fireEvent.change(inputElement, {target: {value: 'New todo item'}});
        fireEvent.click(buttonElement);

        expect(inputElement.value).toBe('');
    })

});