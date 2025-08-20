// frontend/src/app/(auth)/login/page.jsx

"use client"; // Marks the component as a Client Component, allowing it to use hooks like useState and useRouter.

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate an API call
    try {
      // In a real app, you would make an API call here:
      // const response = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password }),
      // });
      // const data = await response.json();

      // For this example, we'll use a mock response
      const mockLoginResponse = {
        success: true,
        user: { id: 'user123', name: 'John Doe', role: 'student' },
        token: 'mock-jwt-token'
      };

      if (mockLoginResponse.success) {
        // Store user and token information (e.g., in localStorage or a state management store)
        localStorage.setItem('user', JSON.stringify(mockLoginResponse.user));
        localStorage.setItem('token', mockLoginResponse.token);

        // Redirect based on user role
        if (mockLoginResponse.user.role === 'admin') {
          router.push('/admin/dashboard');
        } else {
          router.push('/student/dashboard');
        }
      } else {
        setError(mockLoginResponse.message || 'Login failed.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-sm">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-700">Collex</h1>
          <p className="text-sm text-gray-500 mt-1">Your Campus Wallet</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              University Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="e.g., student@university.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>
          {error && (
            <div className="text-red-500 text-sm mt-2">{error}</div>
          )}
          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Logging In...' : 'Log In'}
          </Button>
        </form>
        <div className="text-center text-sm text-gray-500 mt-4">
          <p>Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a></p>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;