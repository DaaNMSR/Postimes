import React from 'react';

interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className: string;
    text: string;
}

const Button: React.FC<ButtonProps> = ({onClick, className, text}) => {
    return (
        <button
            onClick={onClick}
            className={className}
        >
            {text}
        </button>
    );
};

export default Button;