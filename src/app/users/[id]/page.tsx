'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { mockUserProfiles } from '@/lib/mock-social-data';
import { UserProfile, SocialPost } from '@/types/social';

const UserProfilePage = () => {
  const params = useParams();
  const id = params.id;
  const userProfile: UserProfile | undefined = mockUserProfiles.find((p) => p.id === id);

  if (!userProfile) {
    return <div className="p-8 text-center">User not found.</div>;
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold">{userProfile.name}</h1>
          <p className="text-gray-600 mb-4">{userProfile.bio}</p>
          <div className="flex space-x-4">
            <span><strong>{userProfile.followersCount}</strong> Followers</span>
            <span><strong>{userProfile.followingCount}</strong> Following</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Posts</h2>
        <div className="space-y-8">
          {userProfile.posts.map((post: SocialPost) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">{post.content}</p>
              <div className="text-sm text-gray-500">
                Posted on {new Date(post.timestamp).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;