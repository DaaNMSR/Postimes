import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { RickAndMortyPage } from './RickAndMortyPage';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

const renderRickAndMortyPage = () => {
  render(
    <Provider store={store}>
      <RickAndMortyPage />
    </Provider>,
  );
};

describe('RickAndMortyPage', () => {
  it('renders RickAndMortyPage', () => {
    renderRickAndMortyPage();
    const title = screen.getByText('Rick and Morty Characters');
    const input = screen.getByPlaceholderText('Search for a character...');
    expect(title).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
});
