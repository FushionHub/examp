import React from 'react';
import { mockPosts } from '@/lib/mock-posts';
import Link from 'next/link';
import CreatePostButton from '@/components/CreatePostButton';

const NewsPage = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">News & Updates</h1>
          <CreatePostButton />
        </div>
        <div className="space-y-8">
          {mockPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-2">
                <Link href={`/news/${post.id}`}>
                  <div className="cursor-pointer hover:text-brand-primary">{post.title}</div>
                </Link>
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                By {post.author} on {post.date}
              </p>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <Link href={`/news/${post.id}`}>
                <div className="text-brand-primary font-semibold cursor-pointer hover:underline">
                  Read More
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;