// frontend/src/components/ui/Button.jsx
import React from 'react';

const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`
        inline-flex items-center justify-center 
        px-4 py-2 
        font-semibold 
        text-sm rounded-md 
        transition-colors duration-200 
        focus:outline-none focus:ring-2 focus:ring-offset-2
        bg-blue-600 text-white 
        hover:bg-blue-700 
        disabled:bg-gray-400 disabled:cursor-not-allowed 
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;