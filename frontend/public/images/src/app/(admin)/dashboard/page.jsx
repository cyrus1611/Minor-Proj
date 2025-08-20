// frontend/src/app/(student)/dashboard/page.jsx

import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import WalletBalance from '@/components/specific/student/WalletBalance';
import TransactionList from '@/components/specific/student/TransactionList';

// Mock data for demonstration purposes
const mockStudentData = {
  name: "Alex Johnson",
  walletBalance: 2500, // in Collex Coins
  recentTransactions: [
    { id: 1, type: 'Canteen', description: 'Lunch at Campus Canteen', amount: 50, date: '2025-08-19' },
    { id: 2, type: 'Events', description: 'Movie Night Ticket', amount: 150, date: '2025-08-18' },
    { id: 3, type: 'Clubs', description: 'Photography Club Fee', amount: 200, date: '2025-08-17' },
  ],
};

const StudentDashboardPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome, {mockStudentData.name}!
        </h1>
      </div>

      {/* Wallet Balance Card */}
      <WalletBalance balance={mockStudentData.walletBalance} />

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button className="w-full bg-green-500 hover:bg-green-600">Top-Up Wallet</Button>
        <Button className="w-full bg-blue-600 hover:bg-blue-700">Pay via QR</Button>
        <Button className="w-full bg-orange-500 hover:bg-orange-600">Browse Shops & Events</Button>
      </div>

      {/* Recent Transactions */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Transactions</h2>
        <TransactionList transactions={mockStudentData.recentTransactions} />
        <div className="mt-4">
          <a href="/student/history" className="text-blue-600 hover:underline">
            View All History →
          </a>
        </div>
      </Card>
    </div>
  );
};

export default StudentDashboardPage;