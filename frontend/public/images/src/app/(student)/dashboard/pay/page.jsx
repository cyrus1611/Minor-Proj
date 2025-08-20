// frontend/src/app/(student)/pay/page.jsx

"use client";

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
// import { QrScanner } from '@yudiel/react-qr-scanner'; // Example QR scanner library

const PayPage = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleScan = (result) => {
    if (result) {
      setScanResult(result);
      setIsScanning(false);
      // Here you would parse the QR code data to get merchant info
      console.log('QR Code Scanned:', result);
    }
  };

  const handlePayment = () => {
    // In a real app, this would trigger an API call to process the payment
    if (!scanResult || !amount) {
      setError('Please scan a QR code and enter an amount.');
      return;
    }
    console.log(`Processing payment of ${amount} Coins to merchant from QR: ${scanResult}`);
    // Show a success message and redirect
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <Card className="w-full max-w-md p-6 text-center space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">Pay with QR</h1>
        <p className="text-gray-500">Scan the merchant's QR code to make a payment.</p>

        {!isScanning && !scanResult && (
          <Button onClick={() => setIsScanning(true)} className="w-full bg-blue-600">
            Start QR Scanner
          </Button>
        )}

        {/* This would be the component for the camera feed */}
        {isScanning && (
          <div className="aspect-square w-full bg-gray-200 flex items-center justify-center rounded-lg">
            <p className="text-gray-500">Camera scanning for QR code...</p>
            {/* <QrScanner
              onDecode={handleScan}
              onError={(err) => console.error(err)}
            /> */}
          </div>
        )}

        {scanResult && (
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-md text-left">
              <p className="font-semibold">Merchant Scanned:</p>
              <p className="text-sm break-all">{scanResult}</p>
            </div>
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700 text-left">
                Amount in Collex Coins
              </label>
              <input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button onClick={handlePayment} className="w-full bg-green-500">
              Confirm Payment
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default PayPage;
