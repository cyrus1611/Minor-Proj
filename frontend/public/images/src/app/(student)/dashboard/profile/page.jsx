// frontend/src/app/(student)/profile/page.jsx

import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

// Mock data
const mockUserProfile = {
  name: 'Alex Johnson',
  email: 'alex.j@university.edu',
  universityId: 'U202212345',
  joinDate: 'August 15, 2024',
};

const ProfilePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Profile</h1>
      <Card className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-gray-500">Full Name</p>
              <p className="text-lg font-medium text-gray-800">{mockUserProfile.name}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500">University ID</p>
              <p className="text-lg font-medium text-gray-800">{mockUserProfile.universityId}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500">University Email</p>
              <p className="text-lg font-medium text-gray-800">{mockUserProfile.email}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-gray-500">Member Since</p>
              <p className="text-lg font-medium text-gray-800">{mockUserProfile.joinDate}</p>
            </div>
            <div className="pt-4">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Edit Profile</Button>
              <Button className="w-full bg-red-600 hover:bg-red-700 mt-2">Change Password</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;