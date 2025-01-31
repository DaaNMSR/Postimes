import React from 'react';
import { render, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown Component', () => {
  it('renders loading state', () => {
    render(<Dropdown data={undefined} isLoading={true} isError={false} openRepos={jest.fn()} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders error state', () => {
    render(<Dropdown data={undefined} isLoading={false} isError={true} openRepos={jest.fn()} />);
    expect(screen.getByText('Something went wrong...')).toBeInTheDocument();
  });

  it('renders list of users', () => {
    const mockData = [
      { id: 1, login: 'user1' },
      { id: 2, login: 'user2' },
    ];
    render(<Dropdown data={mockData} isLoading={false} isError={false} openRepos={jest.fn()} />);

    expect(screen.getByText('user1')).toBeInTheDocument();
    expect(screen.getByText('user2')).toBeInTheDocument();
  });
});
