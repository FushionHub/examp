'use client';

import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import Link from 'next/link';
import { User } from '@/types/users';
import { mockTutorials } from '@/lib/mock-tutorials';
import { mockPosts } from '@/lib/mock-posts';

const LecturerDashboardPage = () => {
  const { data: session } = useSession();
  const user = session?.user as User;
  const [tutorials, setTutorials] = useState(mockTutorials);
  const [posts, setPosts] = useState(mockPosts);

  if (user?.role !== 'lecturer') {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">Access Denied</h1>
        <p>You do not have permission to view this page.</p>
      </div>
    );
  }

  const handleDeleteTutorial = async (id: number) => {
    await fetch(`/api/tutorials/${id}`, { method: 'DELETE' });
    setTutorials(tutorials.filter((t) => t.id !== id));
  };

  const handleDeletePost = async (id: number) => {
    await fetch(`/api/posts/${id}`, { method: 'DELETE' });
    setPosts(posts.filter((p) => p.id !== id));
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Lecturer Dashboard</h1>
          <p className="text-lg">Welcome, {user.name}!</p>
        </div>
        <div>
          <Link href="/dashboard/lecturer/create-tutorial">
            <div className="bg-brand-primary text-white px-4 py-2 rounded-md cursor-pointer mr-4 inline-block">
              Create Tutorial
            </div>
          </Link>
          <Link href="/dashboard/lecturer/create-post">
            <div className="bg-brand-primary text-white px-4 py-2 rounded-md cursor-pointer inline-block">
              Create Post
            </div>
          </Link>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Your Tutorials</h2>
        <div className="space-y-4">
          {tutorials.map((tutorial) => (
            <div key={tutorial.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
              <h3 className="text-xl font-semibold">{tutorial.title}</h3>
              <div>
                <Link href={`/dashboard/lecturer/edit-tutorial/${tutorial.id}`}>
                  <div className="text-blue-500 mr-4 cursor-pointer">Edit</div>
                </Link>
                <button onClick={() => handleDeleteTutorial(tutorial.id)} className="text-red-500">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Your Posts</h2>
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <div>
                <Link href={`/dashboard/lecturer/edit-post/${post.id}`}>
                  <div className="text-blue-500 mr-4 cursor-pointer">Edit</div>
                </Link>
                <button onClick={() => handleDeletePost(post.id)} className="text-red-500">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LecturerDashboardPage;