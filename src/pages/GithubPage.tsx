import React, {useEffect, useState} from 'react'
import { useSearchUsersQuery, useLazyGetUserReposQuery } from '../store/github/github.api'
import { useDebounce } from '../hooks/debounce'
import RepoCard from "../components/repocard/RepoCard";
import {SortBy, SortOrder} from "../models/models";

const GithubPage = () => {

  const [search, setSearch] = useState('')
  const [dropdown, setDropdown] = useState(false)
  const debounced = useDebounce(search)
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc')
  const [sortBy, setSortBy] = useState<SortBy>('watchers')

  const {isLoading, isError, data} = useSearchUsersQuery(debounced, {
    skip: debounced.length < 2
  })

  const [fetchRepos, {isLoading: areReposLoading, data: repos}] = useLazyGetUserReposQuery()

  useEffect(() => {
    setDropdown(debounced.length > 2 && data?.length! > 0)
  },[debounced, data])


  const handleOpenRepos = (username: string) => {
    fetchRepos(username)
    setDropdown(false)
  }

  const sortedRepos = repos
      ? ([...repos].sort((a, b) =>
          sortOrder === 'asc'
              ? a[sortBy] - b[sortBy]
              : b[sortBy] - a[sortBy])
        )
      : 
        []

  return (
        <div className='flex justify-center pt-10 mx-auto'>
          <div className='relative w-[560px]'>
            <input
                type="text"
                className='border py-2 px-4 w-full h-[42px] mb-2'
                placeholder='Github username...'
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            {dropdown &&
                (<ul
                    className='list-none absolute top-42px left-0 right-0 max-h-[200px] shadow-md bg-white overflow-y-scroll'>
                  {isError && <p className='text-center'>Something went wrong...</p>}
                  {isLoading && <p className='text-center'>Loading...</p>}
                  {data?.map((user) =>
                      <li
                          key={user.id}
                          className='py-2 px-4 hover:cursor-pointer hover:text-gray-500 transition-colors'
                          onClick={() => handleOpenRepos(user.login)}
                      >
                        {user.login}
                      </li>)
                  }
                </ul>)
            }
            <div className="flex justify-between mb-2">
              <button
                  onClick={() =>
                      setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))
                  }
                  className="py-1 px-3 bg-gray-200 border rounded hover:bg-gray-300 transition"
              >
                Sort: {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
              </button>
              <select
                  onChange={(e) => setSortBy(e.target.value as SortBy)}
                  value={sortBy}
                  className="py-1 px-3 bg-gray-200 border rounded hover:bg-gray-300 transition"
              >
                <option value="watchers">Watchers</option>
                <option value="forks">Forks</option>
              </select>
            </div>
            <div className="repos">
              {areReposLoading && <p className='text-center'>Loading...</p>}
              {sortedRepos?.length === 0 && !areReposLoading && (
                  <p className="text-center text-gray-500">No repositories found.</p>
              )}
              {sortedRepos?.map((repo) => (
                      <RepoCard repo={repo} key={repo.id}/>
                  )
              )}
            </div>
          </div>
        </div>
  )
}

export default GithubPage