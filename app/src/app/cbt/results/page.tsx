'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { mockQuestions } from '@/lib/mock-data';

const ResultsPage = () => {
  const searchParams = useSearchParams();
  const score = searchParams.get('score');
  const total = searchParams.get('total');
  const answersParam = searchParams.get('answers');
  const userAnswers = answersParam ? JSON.parse(decodeURIComponent(answersParam)) : [];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Exam Results</h1>
          <p className="text-xl mb-4">
            You scored {score} out of {total}.
          </p>
          <Link href="/cbt">
            <div className="bg-brand-primary text-white px-8 py-2 rounded-md inline-block cursor-pointer">
              Try Again
            </div>
          </Link>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Review Your Answers</h2>
          {mockQuestions.map((question, index) => (
            <div key={question.id} className="mb-6 pb-6 border-b">
              <p className="font-semibold mb-2">{`Question ${index + 1}: ${question.question}`}</p>
              <p className={`mb-2 ${userAnswers[index] === question.answer ? 'text-green-600' : 'text-red-600'}`}>
                Your Answer: {userAnswers[index] || 'Not Answered'}
              </p>
              <p className="mb-2 text-green-600">Correct Answer: {question.answer}</p>
              <p className="text-gray-700">{question.explanation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;