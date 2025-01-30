import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { GithubPage } from './GithubPage';

const renderGithubPage = () => {
  render(
    <Provider store={store}>
      <GithubPage />
    </Provider>,
  );
};

describe('GithubPage', () => {
  it('renders GithubPage', () => {
    renderGithubPage();
    const input = screen.getByPlaceholderText(/Github username.../i);
    const buttonSortBy = screen.getByRole('button', {
      name: /Sort: Ascending/i,
    });
    const selectSortOption = screen.getByText(/Watchers/i);
    const paragraph = screen.getByText(/No repositories found./i);

    expect(input).toBeInTheDocument();
    expect(buttonSortBy).toBeInTheDocument();
    expect(selectSortOption).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });

  it('input working when typing', () => {
    renderGithubPage();
    const input = screen.getByPlaceholderText(/Github username.../i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'reactjs' } });
    expect(input.value).toBe('reactjs');
  });
});
