// frontend/src/app/(auth)/signup/page.jsx

"use client"; // Marks the component as a Client Component.

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { useRouter } from 'next/navigation';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [universityId, setUniversityId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate an API call to the backend for user registration
    try {
      // In a real application, you would make a fetch request:
      // const response = await fetch('/api/signup', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ name, universityId, email, password }),
      // });
      // const data = await response.json();

      // For this example, we'll use a mock success response
      const mockSignupResponse = {
        success: true,
        message: 'Account created successfully! Please log in.',
      };

      if (mockSignupResponse.success) {
        // Redirect to the login page upon successful signup
        router.push('/login');
      } else {
        setError(mockSignupResponse.message || 'Signup failed.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-lg">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-700">Join Collex</h1>
          <p className="text-sm text-gray-500 mt-1">Create your campus wallet account</p>
        </div>
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="universityId" className="text-sm font-medium text-gray-700">
              University ID
            </label>
            <input
              id="universityId"
              type="text"
              value={universityId}
              onChange={(e) => setUniversityId(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              University Email
            </label>
            <input
              id="email"
              type="email"
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
            {loading ? 'Creating Account...' : 'Sign Up'}
          </Button>
        </form>
        <div className="text-center text-sm text-gray-500 mt-4">
          <p>Already have an account? <a href="/login" className="text-blue-600 hover:underline">Log In</a></p>
        </div>
      </Card>
    </div>
  );
};

export default SignupPage;