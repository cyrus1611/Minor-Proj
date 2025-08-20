// frontend/src/components/shared/Sidebar.jsx

"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navItems = [
  { name: 'Dashboard', href: '/student/dashboard' },
  { name: 'Events & Clubs', href: '/student/events' },
  { name: 'Canteen & Shops', href: '/student/shops' },
  { name: 'History', href: '/student/history' },
  { name: 'Rewards', href: '/student/rewards' },
  { name: 'Profile', href: '/student/profile' },
  { name: 'Support', href: '/student/support' },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200 shadow-sm p-4">
      <div className="flex-shrink-0 flex items-center justify-center p-4">
        <span className="text-2xl font-bold text-blue-700">Collex</span>
      </div>
      <nav className="mt-8 flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} legacyBehavior>
                <a className={`
                  flex items-center px-4 py-2 rounded-lg text-sm font-medium
                  ${pathname === item.href ? 'bg-gray-200 text-blue-800' : 'text-gray-600 hover:bg-gray-100'}
                `}>
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-200 mt-auto">
        {/* Placeholder for logout button */}
        <button className="w-full text-left py-2 px-4 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;