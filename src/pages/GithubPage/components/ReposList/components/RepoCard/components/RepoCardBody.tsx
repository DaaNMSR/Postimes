import React from 'react';
import { IRepo } from '../../../../../../../models/models';

interface RepoCardBodyProps {
  repo: IRepo;
}

export const RepoCardBody: React.FC<RepoCardBodyProps> = ({ repo }) => {
  return (
    <a href={`https://github.com/${repo.full_name}`} target="_blank" rel="noreferrer">
      <h2 className="text-lg ">{repo.full_name}</h2>
      <p className="text-sm">
        Forks: <span className="font-bold mr-2">{repo.forks}</span>
        Watchers: <span className="font-bold">{repo.watchers}</span>
      </p>
      <p className="text-sm font-thin">{repo?.description}</p>
    </a>
  );
};
