'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const CreatePostButton = () => {
  const { data: session } = useSession();
  const user = session?.user as any;

  if (user?.role === 'lecturer' || user?.role === 'blogger') {
    return (
      <Link href="/news/create">
        <div className="bg-brand-primary text-white px-4 py-2 rounded-md cursor-pointer">
          Create Post
        </div>
      </Link>
    );
  }

  return null;
};

export default CreatePostButton;