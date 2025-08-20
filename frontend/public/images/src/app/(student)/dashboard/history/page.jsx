// frontend/src/app/(student)/history/page.jsx

import Card from '@/components/ui/Card';
import { Fragment } from 'react';

// Mock data for demonstration purposes
const mockTransactionHistory = [
  { id: 1, type: 'Canteen', description: 'Lunch at Campus Canteen', amount: 50, date: '2025-08-19' },
  { id: 2, type: 'Events', description: 'Movie Night Ticket', amount: 150, date: '2025-08-18' },
  { id: 3, type: 'Clubs', description: 'Photography Club Fee', amount: 200, date: '2025-08-17' },
  { id: 4, type: 'Canteen', description: 'Coffee and Sandwich', amount: 35, date: '2025-08-16' },
  { id: 5, type: 'Shops', description: 'Notebook and Pen', amount: 80, date: '2025-08-15' },
  { id: 6, type: 'Events', description: 'Student Council Gala', amount: 500, date: '2025-08-14' },
];

const HistoryPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Transaction History</h1>
      <Card className="p-6">
        {/* Filters and Search Bar would go here */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-600">
                <th className="py-3 px-4 font-semibold text-sm rounded-tl-lg">Date</th>
                <th className="py-3 px-4 font-semibold text-sm">Description</th>
                <th className="py-3 px-4 font-semibold text-sm">Category</th>
                <th className="py-3 px-4 font-semibold text-sm rounded-tr-lg">Amount (Coins)</th>
              </tr>
            </thead>
            <tbody>
              {mockTransactionHistory.map((transaction, index) => (
                <Fragment key={transaction.id}>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700">{transaction.date}</td>
                    <td className="py-3 px-4 text-gray-700">{transaction.description}</td>
                    <td className="py-3 px-4 text-gray-700">{transaction.type}</td>
                    <td className="py-3 px-4 text-red-500 font-medium">- {transaction.amount}</td>
                  </tr>
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default HistoryPage;