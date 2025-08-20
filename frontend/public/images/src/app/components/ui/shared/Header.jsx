// frontend/src/components/shared/Header.jsx

import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm p-4 flex items-center justify-between">
      <div className="text-xl font-bold text-gray-800">
        Collex Dashboard
      </div>
      <div className="flex items-center space-x-4">
        {/* Placeholder for a user profile or notification icon */}
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
          U
        </div>
      </div>
    </header>
  );
};

export default Header;