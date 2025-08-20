// frontend/src/app/(admin)/reports/page.jsx

"use client";

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

// Mock data for the reports page
const mockReportData = [
  { id: 1, type: 'Daily', date: '2025-08-19', revenue: 15450, transactions: 1200 },
  { id: 2, type: 'Weekly', date: '2025-08-12', revenue: 85300, transactions: 7800 },
  { id: 3, type: 'Monthly', date: '2025-07-31', revenue: 325400, transactions: 29100 },
];

const ReportsPage = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload = (reportId) => {
    setLoading(true);
    // Simulate downloading a report
    console.log(`Downloading report with ID: ${reportId}`);
    setTimeout(() => {
      setLoading(false);
      alert('Report download initiated!');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Reports & Analytics</h1>
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Financial Reports</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-600">
                <th className="py-3 px-4 font-semibold text-sm">Report Type</th>
                <th className="py-3 px-4 font-semibold text-sm">Period End Date</th>
                <th className="py-3 px-4 font-semibold text-sm">Total Revenue (Coins)</th>
                <th className="py-3 px-4 font-semibold text-sm">Total Transactions</th>
                <th className="py-3 px-4 font-semibold text-sm text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockReportData.map((report) => (
                <tr key={report.id} className="border-b border-gray-200">
                  <td className="py-3 px-4 text-gray-700">{report.type}</td>
                  <td className="py-3 px-4 text-gray-700">{report.date}</td>
                  <td className="py-3 px-4 text-gray-700">{report.revenue}</td>
                  <td className="py-3 px-4 text-gray-700">{report.transactions}</td>
                  <td className="py-3 px-4 text-right">
                    <Button
                      onClick={() => handleDownload(report.id)}
                      className="bg-blue-600 hover:bg-blue-700 text-sm"
                      disabled={loading}
                    >
                      Download CSV
                    </Button>
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

export default ReportsPage;