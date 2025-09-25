'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { mockTutorials } from '@/lib/mock-tutorials';
import { Tutorial } from '@/types/tutorials';

const EditTutorialPage = () => {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const tutorial = mockTutorials.find((t) => t.id === Number(id));
    if (tutorial) {
      setTitle(tutorial.title);
      setSubject(tutorial.subject);
      setDescription(tutorial.description);
      // For simplicity, we're assuming the content is a single string.
      // In a real application, you would handle the array of content blocks.
      setContent(tutorial.content.map(c => c.content).join('\n\n'));
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would add logic here to update the tutorial.
    // For now, we'll just redirect to the lecturer dashboard.
    router.push('/dashboard/lecturer');
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Edit Tutorial</h1>
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
        <button
          type="submit"
          className="w-full p-2 text-white bg-brand-primary rounded-md"
        >
          Update Tutorial
        </button>
      </form>
    </div>
  );
};

export default EditTutorialPage;