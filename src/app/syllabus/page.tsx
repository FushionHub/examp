import React from 'react';
import { mockSyllabus } from '@/lib/mock-syllabus';
import { Syllabus } from '@/types/syllabus';

const SyllabusPage = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Syllabus</h1>
        {mockSyllabus.map((syllabus: Syllabus) => (
          <div key={syllabus.id} className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">{`${syllabus.exam} - ${syllabus.subject}`}</h2>
            {syllabus.topics.map((topic, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-semibold">{topic.title}</h3>
                <ul className="list-disc list-inside ml-4">
                  {topic.subTopics.map((subTopic, subIndex) => (
                    <li key={subIndex}>{subTopic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SyllabusPage;