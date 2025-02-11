import React, { useEffect, useState } from 'react';
import { useSearchUsersQuery, useLazyGetUserReposQuery } from '../../store/api/github.api';
import { useDebounce } from '../../hooks/debounce';
import { SortBy, SortOrder } from '../../models/models';
import Input from '../../components/UI/Input/Input';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { SortOptions } from './components/SortOptions/SortOptions';
import { ReposList } from './components/ReposList/ReposList';

export const GithubPage = () => {
  const [search, setSearch] = useState('');
  const [dropdown, setDropdown] = useState(false);
  const debounced = useDebounce(search);
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.ASC);
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.WATCHERS);
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 2,
  });
  const [fetchRepos, { isLoading: areReposLoading, data: repos }] = useLazyGetUserReposQuery();
  const handleOpenRepos = (username: string) => {
    fetchRepos(username);
    setDropdown(false);
  };
  const sortedRepos = repos
    ? [...repos].sort((a, b) => (sortOrder === SortOrder.ASC ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy]))
    : [];

  useEffect(() => {
    const isOpen = debounced.length > 2 && (data?.length ?? 0) > 0;
    setDropdown(isOpen);
  }, [debounced, data]);

  return (
    <div className="flex justify-center pt-10 mx-auto">
      <div className="relative w-[560px]">
        <Input
          type="text"
          className="border py-2 px-4 w-full h-[42px] mb-2"
          placeholder="Github username..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {dropdown && (
          <Dropdown data={data} isLoading={isLoading} isError={isError} openRepos={handleOpenRepos} />
        )}
        {
          <SortOptions
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        }
        {<ReposList areReposLoading={areReposLoading} repos={sortedRepos} />}
      </div>
    </div>
  );
};
