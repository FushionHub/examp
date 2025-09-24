'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const ResultsPage = () => {
  const searchParams = useSearchParams();
  const score = searchParams.get('score');
  const total = searchParams.get('total');

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Exam Results</h1>
        <p className="text-xl mb-8">
          You scored {score} out of {total}.
        </p>
        <Link href="/cbt">
          <div className="bg-brand-primary text-white px-8 py-2 rounded-md cursor-pointer">
            Try Again
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ResultsPage;