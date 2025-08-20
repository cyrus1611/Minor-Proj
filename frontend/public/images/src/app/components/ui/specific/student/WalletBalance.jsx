// frontend/src/components/specific/student/WalletBalance.jsx

import React from 'react';
import Card from '@/components/ui/Card';
import { FaCoins } from 'react-icons/fa'; // Example icon library

const WalletBalance = ({ balance }) => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <FaCoins className="text-yellow-500 text-3xl" />
          <p className="text-sm font-medium text-gray-500">Your Balance</p>
        </div>
        <p className="text-4xl font-bold text-gray-900">
          {balance}
          <span className="text-xl font-semibold text-gray-500 ml-2">Coins</span>
        </p>
      </div>
      <p className="text-sm text-gray-500 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
    </Card>
  );
};

export default WalletBalance;