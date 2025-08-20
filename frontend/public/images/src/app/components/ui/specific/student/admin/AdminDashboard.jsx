// frontend/src/components/specific/admin/AdminDashboard.jsx

import React from 'react';
import Card from '@/components/ui/Card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for the dashboard charts and cards
const mockDashboardData = {
  totalTransactions: 9876,
  activeUsers: 2453,
  dailyRevenue: 15450,
  transactionData: [
    { name: 'Mon', transactions: 500 },
    { name: 'Tue', transactions: 750 },
    { name: 'Wed', transactions: 600 },
    { name: 'Thu', transactions: 900 },
    { name: 'Fri', transactions: 1200 },
    { name: 'Sat', transactions: 850 },
    { name: 'Sun', transactions: 700 },
  ],
  revenueData: [
    { name: 'Canteen', revenue: 45000 },
    { name: 'Events', revenue: 25000 },
    { name: 'Clubs', revenue: 15000 },
    { name: 'Shops', revenue: 12000 },
  ],
};

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
      
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <p className="text-gray-500 text-sm">Total Transactions</p>
          <p className="text-3xl font-bold text-gray-800 mt-1">{mockDashboardData.totalTransactions}</p>
        </Card>
        <Card className="p-6">
          <p className="text-gray-500 text-sm">Active Users</p>
          <p className="text-3xl font-bold text-gray-800 mt-1">{mockDashboardData.activeUsers}</p>
        </Card>
        <Card className="p-6">
          <p className="text-gray-500 text-sm">Daily Revenue (Coins)</p>
          <p className="text-3xl font-bold text-green-500 mt-1">{mockDashboardData.dailyRevenue}</p>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Daily Transactions</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockDashboardData.transactionData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="transactions" fill="#1D4ED8" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Revenue by Category</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockDashboardData.revenueData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;