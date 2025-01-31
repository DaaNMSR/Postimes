import React from 'react';
import { SortBy, SortOrder } from '../../../../models/models';

interface SortControlsProps {
  sortOrder: SortOrder;
  setSortOrder: React.Dispatch<React.SetStateAction<SortOrder>>;
  sortBy: SortBy;
  setSortBy: React.Dispatch<React.SetStateAction<SortBy>>;
}

export const SortOptions: React.FC<SortControlsProps> = ({
  sortOrder,
  setSortOrder,
  sortBy,
  setSortBy,
}) => {
  return (
    <div className="flex justify-between mb-2">
      <button
        onClick={() =>
          setSortOrder(prev => (prev === SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC))
        }
        className="py-1 px-3 bg-gray-200 border rounded hover:bg-gray-300 transition"
      >
        Sort: {sortOrder === SortOrder.ASC ? 'Ascending' : 'Descending'}
      </button>
      <select
        onChange={e => setSortBy(e.target.value as SortBy)}
        value={sortBy}
        className="py-1 px-3 bg-gray-200 border rounded hover:bg-gray-300 transition"
      >
        <option value="watchers">Watchers</option>
        <option value="forks">Forks</option>
      </select>
    </div>
  );
};
