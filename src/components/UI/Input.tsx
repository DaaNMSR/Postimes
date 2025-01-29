import React from 'react'

interface InputProps {
    type: string;
    className?: string;
    placeholder?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}



const Input: React.FC<InputProps> = ({type = 'text', className, placeholder, value, onChange, ...props}) => {
  return (
    <input
                type={type}
                className={className}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...props}
            />
  )
}

export default Input