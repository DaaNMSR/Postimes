import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HomePage } from './HomePage';
import { technologies } from './const';
import { store } from '../../store/store';

const renderHomePage = () => {
  render(
    <Provider store={store}>
      <HomePage />
    </Provider>,
  );
};

describe('HomePage', () => {
  it('renders HomePage', () => {
    // renders the title of Page
    renderHomePage();
    expect(screen.getByText(/Learn more about/i)).toBeInTheDocument();
    expect(screen.getByText(/Technologies/i)).toBeInTheDocument();
    // renders list of technologies
    technologies.forEach(technology => {
      expect(screen.getByText(technology.title)).toBeInTheDocument();
    });
  });

  it('select a technology and displays description and link', () => {
    renderHomePage();
    // click to 1 - technology
    const firstTechnology = technologies[0];
    const firstTechnologyButton = screen.getByText(firstTechnology.title);
    fireEvent.click(firstTechnologyButton);
    expect(screen.getByText(firstTechnology.description)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
    // click to 5 - technology
    const fifthTechnology = technologies[4];
    const fifthTechnologyButton = screen.getByText(fifthTechnology.title);
    fireEvent.click(fifthTechnologyButton);
    expect(screen.getByText(fifthTechnology.description)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
