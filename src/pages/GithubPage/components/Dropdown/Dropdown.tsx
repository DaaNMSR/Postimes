import React from 'react';

interface DropdownProps {
  data: { id: number; login: string }[] | undefined;
  isLoading: boolean;
  isError: boolean;
  openRepos: (username: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  data,
  isLoading,
  isError,
  openRepos,
}) => {
  return (
    <ul className="list-none absolute top-42px left-0 right-0 max-h-[200px] shadow-md bg-white overflow-y-scroll">
      {isError && <p className="text-center">Something went wrong...</p>}
      {isLoading && <p className="text-center">Loading...</p>}
      {data?.map(user => (
        <li
          key={user.id}
          className="py-2 px-4 hover:cursor-pointer hover:text-gray-500 transition-colors"
          onClick={() => openRepos(user.login)}
        >
          {user.login}
        </li>
      ))}
    </ul>
  );
};
