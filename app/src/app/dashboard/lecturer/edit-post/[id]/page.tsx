'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { mockPosts } from '@/lib/mock-posts';
import { Post } from '@/types/posts';

const EditPostPage = () => {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const post = mockPosts.find((p) => p.id === Number(id));
    if (post) {
      setTitle(post.title);
      setExcerpt(post.excerpt);
      setContent(post.content);
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would add logic here to update the post.
    // For now, we'll just redirect to the lecturer dashboard.
    router.push('/dashboard/lecturer');
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Edit Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Excerpt</label>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows={3}
            required
          ></textarea>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows={10}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-2 text-white bg-brand-primary rounded-md"
        >
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPostPage;