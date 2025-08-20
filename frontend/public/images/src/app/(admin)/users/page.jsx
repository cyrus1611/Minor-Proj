// frontend/src/app/(admin)/users/page.jsx

"use client";

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

// Mock data for user management
const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john.d@uni.edu', balance: 500, status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane.s@uni.edu', balance: 1200, status: 'Active' },
  { id: 3, name: 'Alex Johnson', email: 'alex.j@uni.edu', balance: 0, status: 'Frozen' },
  { id: 4, name: 'Emily White', email: 'emily.w@uni.edu', balance: 850, status: 'Active' },
];

const UsersPage = () => {
  const [users, setUsers] = useState(mockUsers);
  const [loadingAction, setLoadingAction] = useState(null);

  const handleFreeze = (userId) => {
    setLoadingAction(userId);
    // Simulate API call to freeze the user account
    setTimeout(() => {
      setUsers(users.map(user =>
        user.id === userId ? { ...user, status: 'Frozen' } : user
      ));
      setLoadingAction(null);
      alert(`User ${userId} has been frozen.`);
    }, 1000);
  };

  const handleUnfreeze = (userId) => {
    setLoadingAction(userId);
    // Simulate API call to unfreeze the user account
    setTimeout(() => {
      setUsers(users.map(user =>
        user.id === userId ? { ...user, status: 'Active' } : user
      ));
      setLoadingAction(null);
      alert(`User ${userId} has been unfrozen.`);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">User Management</h1>
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Student & Faculty Accounts</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-600">
                <th className="py-3 px-4 font-semibold text-sm">Name</th>
                <th className="py-3 px-4 font-semibold text-sm">Email</th>
                <th className="py-3 px-4 font-semibold text-sm">Balance</th>
                <th className="py-3 px-4 font-semibold text-sm">Status</th>
                <th className="py-3 px-4 font-semibold text-sm text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-gray-200">
                  <td className="py-3 px-4 text-gray-700">{user.name}</td>
                  <td className="py-3 px-4 text-gray-700">{user.email}</td>
                  <td className="py-3 px-4 text-gray-700">{user.balance} Coins</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    {user.status === 'Active' ? (
                      <Button
                        onClick={() => handleFreeze(user.id)}
                        className="bg-red-600 hover:bg-red-700 text-sm"
                        disabled={loadingAction === user.id}
                      >
                        {loadingAction === user.id ? 'Freezing...' : 'Freeze'}
                      </Button>
                    ) : (
                      <Button
                        onClick={() => handleUnfreeze(user.id)}
                        className="bg-green-600 hover:bg-green-700 text-sm"
                        disabled={loadingAction === user.id}
                      >
                        {loadingAction === user.id ? 'Unfreezing...' : 'Unfreeze'}
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default UsersPage;