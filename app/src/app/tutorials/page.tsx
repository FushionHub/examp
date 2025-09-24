import React from 'react';
import { mockTutorials } from '@/lib/mock-tutorials';
import { Tutorial } from '@/types/tutorials';
import Link from 'next/link';

const TutorialsPage = () => {
  const tutorialsBySubject: { [key: string]: Tutorial[] } = mockTutorials.reduce((acc, tutorial) => {
    if (!acc[tutorial.subject]) {
      acc[tutorial.subject] = [];
    }
    acc[tutorial.subject].push(tutorial);
    return acc;
  }, {} as { [key: string]: Tutorial[] });

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Tutorials</h1>
        {Object.keys(tutorialsBySubject).map((subject) => (
          <div key={subject} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{subject}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tutorialsBySubject[subject].map((tutorial) => (
                <Link key={tutorial.id} href={`/tutorials/${tutorial.id}`}>
                  <div className="bg-white rounded-lg shadow-md p-4 h-full cursor-pointer hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
                    <p className="text-gray-600">{tutorial.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorialsPage;