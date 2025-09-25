'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const CreateTutorialPage = () => {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const response = await fetch('/api/tutorials', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, subject, description, content }),
    });

    if (response.ok) {
      setSuccess('Tutorial created successfully!');
      setTimeout(() => router.push('/dashboard/lecturer'), 2000);
    } else {
      const data = await response.json();
      setError(data.error || 'Something went wrong.');
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Create New Tutorial</h1>
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
          <label className="block mb-2 text-sm font-medium">Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
          Create Tutorial
        </button>
      </form>
    </div>
  );
};

export default CreateTutorialPage;