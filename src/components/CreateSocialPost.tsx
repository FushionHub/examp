'use client';

import React, { useState } from 'react';

const CreateSocialPost = () => {
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const response = await fetch('/api/social/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    });

    if (response.ok) {
      setSuccess('Post created successfully!');
      setContent('');
    } else {
      const data = await response.json();
      setError(data.error || 'Something went wrong.');
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-8">
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full p-2 border border-gray-300 rounded-md"
          rows={3}
          required
        ></textarea>
        {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
        {success && <p className="text-sm text-green-500 mt-2">{success}</p>}
        <button
          type="submit"
          className="w-full mt-2 p-2 text-white bg-brand-primary rounded-md"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CreateSocialPost;