'use client';

import { useSession } from 'next-auth/react';
import React from 'react';
import { User } from '@/types/users';

const ProfilePage = () => {
  const { data: session } = useSession();
  const user = session?.user as User;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <pre className="bg-gray-100 p-4 rounded-md mb-8">
        {JSON.stringify(session, null, 2)}
      </pre>

      {user?.role === 'admin' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Admin Controls</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="mb-4">
              As an admin, you can switch to another user's view to test features and understand the user experience.
            </p>
            {/* Placeholder for role-switching functionality */}
            <input
              type="text"
              placeholder="Enter user ID or email"
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <button className="bg-brand-primary text-white px-4 py-2 rounded-md">
              Switch View
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;