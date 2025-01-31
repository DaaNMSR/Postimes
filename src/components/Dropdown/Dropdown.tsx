import React from 'react';
import { DropdownItem } from './components/DropdownItem';

interface DropdownProps {
  data: { id: number; login: string }[] | undefined;
  isLoading: boolean;
  isError: boolean;
  openRepos: (username: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ data, isLoading, isError, openRepos }) => {
  return (
    <ul className="list-none absolute top-42px left-0 right-0 max-h-[200px] shadow-md bg-white overflow-y-scroll">
      {isError && <p className="text-center">Something went wrong...</p>}
      {isLoading && <p className="text-center">Loading...</p>}
      {data?.map(user => <DropdownItem key={user.id} item={user} openItem={openRepos} />)}
    </ul>
  );
};
