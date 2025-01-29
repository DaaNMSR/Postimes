import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { AddTodo } from './AddTodo';
import { Provider } from 'react-redux';
import { store } from '../../../../store/store';
import { useActions } from '../../../../hooks/actions';

jest.mock('../hooks/actions');

const mockAddTodo = jest.fn();

const renderAddTodo = () => {
  render(
    <Provider store={store}>
      <AddTodo />
    </Provider>,
  );
};

const getElements = () => {
  const inputElement = screen.getByPlaceholderText(
    'Add a new task...',
  ) as HTMLInputElement;
  const buttonElement = screen.getByText('Add') as HTMLButtonElement;
  return { inputElement, buttonElement };
};

describe('AddTodo component', () => {
  beforeEach(() => {
    (useActions as jest.Mock).mockReturnValue({
      addTodo: mockAddTodo,
    });
  });
  it('renders AddTodo', () => {
    renderAddTodo();

    const { inputElement, buttonElement } = getElements();

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('input working, when typing', () => {
    renderAddTodo();

    const { inputElement } = getElements();

    fireEvent.change(inputElement, { target: { value: 'My todo' } });

    expect(inputElement.value).toBe('My todo');
  });

  it('add item by click button, then input should be empty', () => {
    renderAddTodo();

    const { inputElement, buttonElement } = getElements();

    fireEvent.change(inputElement, { target: { value: 'My todo' } });
    fireEvent.click(buttonElement);

    expect(mockAddTodo).toHaveBeenCalled();
    expect(inputElement.value).toBe('');
  });
});
