import React from 'react';
import { IRepo } from '../../../../models/models';
import { RepoCard } from './components/RepoCard/RepoCard';

interface ReposListProps {
  areReposLoading: boolean;
  repos: IRepo[] | undefined;
}

export const ReposList: React.FC<ReposListProps> = ({ areReposLoading, repos }) => {
  return (
    <div className="repos">
      {areReposLoading && <p className="text-center">Loading...</p>}
      {repos?.length === 0 && !areReposLoading && (
        <p className="text-center text-gray-500">No repositories found.</p>
      )}
      {repos?.map(repo => <RepoCard repo={repo} key={repo.id} />)}
    </div>
  );
};
