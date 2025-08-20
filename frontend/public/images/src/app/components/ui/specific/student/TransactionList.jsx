// frontend/src/components/specific/student/TransactionList.jsx

import React from 'react';

const TransactionList = ({ transactions }) => {
  if (!transactions || transactions.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>No recent transactions to display.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-50 text-left text-gray-600">
            <th className="py-3 px-4 font-semibold text-sm rounded-tl-lg">Description</th>
            <th className="py-3 px-4 font-semibold text-sm">Category</th>
            <th className="py-3 px-4 font-semibold text-sm">Amount</th>
            <th className="py-3 px-4 font-semibold text-sm rounded-tr-lg">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
              <td className="py-3 px-4 text-gray-800">{transaction.description}</td>
              <td className="py-3 px-4 text-gray-800">{transaction.type}</td>
              <td className="py-3 px-4 text-red-500 font-medium">- {transaction.amount}</td>
              <td className="py-3 px-4 text-gray-500 text-sm">{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;