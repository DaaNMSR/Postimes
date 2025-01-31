import React from 'react';

interface DropdownItemProps {
  item: { id: number; login: string };
  openItem: (username: string) => void;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({ item, openItem }) => {
  return (
    <li
      className="py-2 px-4 hover:cursor-pointer hover:text-gray-500 transition-colors"
      onClick={() => openItem(item.login)}
    >
      {item.login}
    </li>
  );
};
