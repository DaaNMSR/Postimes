import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { SortOptions } from './SortOptions';
import { SortBy, SortOrder } from '../../../../models/models';

describe('SortOptions Component', () => {
  it('renders correctly with initial props', () => {
    render(
      <SortOptions
        sortOrder={SortOrder.ASC}
        setSortOrder={jest.fn()}
        sortBy={SortBy.WATCHERS}
        setSortBy={jest.fn()}
      />,
    );
    expect(screen.getByText(/Sort: Ascending/i)).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toHaveValue('watchers');
  });

  it('calls setSortOrder when sort button is clicked', () => {
    const setSortOrderMock = jest.fn();
    render(
      <SortOptions
        sortOrder={SortOrder.ASC}
        setSortOrder={setSortOrderMock}
        sortBy={SortBy.WATCHERS}
        setSortBy={jest.fn()}
      />,
    );
    const sortByButton = screen.getByText(/Sort: Ascending/i);
    fireEvent.click(sortByButton);
    expect(setSortOrderMock).toHaveBeenCalled();

    fireEvent.click(sortByButton);
    expect(setSortOrderMock).toHaveBeenCalled();
  });

  it('calls setSortBy when select option is changed', () => {
    const setSortByMock = jest.fn();
    render(
      <SortOptions
        sortOrder={SortOrder.ASC}
        setSortOrder={jest.fn()}
        sortBy={SortBy.WATCHERS}
        setSortBy={setSortByMock}
      />,
    );
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'forks' } });
    expect(setSortByMock).toHaveBeenCalledWith('forks');

    fireEvent.change(select, { target: { value: 'watchers' } });
    expect(setSortByMock).toHaveBeenCalledWith('watchers');
  });
});
