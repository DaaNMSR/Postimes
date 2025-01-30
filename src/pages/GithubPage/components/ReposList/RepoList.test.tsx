import React from 'react';
import { render, screen } from '@testing-library/react';
import { ReposList } from './ReposList';
import { IRepo } from '../../../../models/models';

describe('RepoList Component', () => {
  it('renders loading state', () => {
    render(<ReposList areReposLoading={true} repos={undefined} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders no repositories message when repos list is empty', () => {
    render(<ReposList areReposLoading={false} repos={[]} />);
    expect(screen.getByText('No repositories found.')).toBeInTheDocument();
  });
});
