// frontend/src/components/specific/admin/UserTable.jsx

"use client";

import React, { useState } from 'react';
import Button from '@/components/ui/Button';

const UserTable = ({ users: initialUsers }) => {
  const [users, setUsers] = useState(initialUsers);
  const [loadingAction, setLoadingAction] = useState(null);

  const handleToggleStatus = (userId) => {
    setLoadingAction(userId);
    
    // Simulate API call to toggle user status
    setTimeout(() => {
      setUsers(users.map(user =>
        user.id === userId ? {
          ...user,
          status: user.status === 'Active' ? 'Frozen' : 'Active'
        } : user
      ));
      setLoadingAction(null);
    }, 1000);
  };

  return (
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
            <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
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
                    onClick={() => handleToggleStatus(user.id)}
                    className="bg-red-600 hover:bg-red-700 text-sm"
                    disabled={loadingAction === user.id}
                  >
                    {loadingAction === user.id ? 'Freezing...' : 'Freeze'}
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleToggleStatus(user.id)}
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
  );
};

export default UserTable;