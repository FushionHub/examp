'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { mockTutorials } from '@/lib/mock-tutorials';
import { Tutorial, TutorialContent } from '@/types/tutorials';

const TutorialPage = () => {
  const params = useParams();
  const id = params.id;
  const tutorial: Tutorial | undefined = mockTutorials.find((t) => t.id === Number(id));

  if (!tutorial) {
    return <div className="p-8 text-center">Tutorial not found.</div>;
  }

  const renderContent = (content: TutorialContent) => {
    switch (content.type) {
      case 'paragraph':
        return <p className="mb-4">{content.content}</p>;
      case 'image':
        return <img src={content.content} alt={tutorial.title} className="my-4 rounded-lg" />;
      case 'video':
        return (
          <div className="my-4 aspect-w-16 aspect-h-9">
            <iframe
              src={content.content}
              title={tutorial.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-2">{tutorial.title}</h1>
        <p className="text-lg text-gray-600 mb-8">{tutorial.subject}</p>
        <div>{tutorial.content.map((item, index) => renderContent(item))}</div>
      </div>
    </div>
  );
};

export default TutorialPage;