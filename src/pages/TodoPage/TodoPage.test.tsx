import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { TodoPage } from './TodoPage';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

const renderHomePage = () => {
  render(
    <Provider store={store}>
      <TodoPage />
    </Provider>,
  );
};

describe('TodoPage', () => {
  it('renders TodoPage', () => {
    renderHomePage();
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Add a new task.../i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Add/i })).toBeInTheDocument();
  });

  it('add a task to the list and clears the input', () => {
    renderHomePage();
    const input = screen.getByPlaceholderText(/Add a new task.../i) as HTMLInputElement;
    const buttonAdd = screen.getByRole('button', { name: /Add/i });

    fireEvent.change(input, { target: { value: 'New Task' } });
    expect(input.value).toBe('New Task');
    fireEvent.click(buttonAdd);

    const checkbox = screen.getByRole('checkbox');
    const newTask = screen.getByText('New Task');
    const buttonRemove = screen.getByRole('button', { name: /Remove/i });

    expect(input.value).toBe('');
    expect(checkbox).toBeInTheDocument();
    expect(newTask).toBeInTheDocument();
    expect(buttonRemove).toBeInTheDocument();
  });

  it('toggles task  when clicking on task text or checkbox', () => {
    renderHomePage();

    const checkbox = screen.getByRole('checkbox');
    const newTask = screen.getByText('New Task');
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();

    fireEvent.click(newTask);
    expect(checkbox).toBeChecked();
    fireEvent.click(newTask);
    expect(checkbox).not.toBeChecked();
  });

  it('Remove task by clicked remove button', () => {
    renderHomePage();
    const buttonRemove = screen.queryByRole('button', {
      name: /Remove/i,
    }) as HTMLButtonElement;

    fireEvent.click(buttonRemove);
    expect(screen.queryByText('New Task')).not.toBeInTheDocument();
    expect(screen.queryByRole('checkbox')).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Remove/i })).not.toBeInTheDocument();
  });
});
