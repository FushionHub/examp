'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const CreatePostPage = () => {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, excerpt, content }),
    });

    if (response.ok) {
      setSuccess('Post created successfully!');
      setTimeout(() => router.push('/dashboard/lecturer'), 2000);
    } else {
      const data = await response.json();
      setError(data.error || 'Something went wrong.');
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Create New Post</h1>
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
        {error && <p className="text-sm text-red-500">{error}</p>}
        {success && <p className="text-sm text-green-500">{success}</p>}
        <button
          type="submit"
          className="w-full p-2 text-white bg-brand-primary rounded-md"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePostPage;