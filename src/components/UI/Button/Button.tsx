import React from 'react';

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className: string;
  children: string;
  type?: string | null;
}

const Button: React.FC<ButtonProps> = ({ onClick, className, children }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
