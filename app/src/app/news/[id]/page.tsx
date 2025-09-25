'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { mockPosts } from '@/lib/mock-posts';
import { Post } from '@/types/posts';

const PostPage = () => {
  const params = useParams();
  const id = params.id;
  const post: Post | undefined = mockPosts.find((p) => p.id === Number(id));

  if (!post) {
    return <div className="p-8 text-center">Post not found.</div>;
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-md text-gray-500 mb-8">
          By {post.author} on {post.date}
        </p>
        <div className="prose lg:prose-xl">
          {post.content}
        </div>
      </div>
    </div>
  );
};

export default PostPage;