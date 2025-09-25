'use client';

import { useSession } from 'next-auth/react';
import React from 'react';

const ProfilePage = () => {
  const { data: session } = useSession();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <pre className="bg-gray-100 p-4 rounded-md">
        {JSON.stringify(session, null, 2)}
      </pre>
    </div>
  );
};

export default ProfilePage;