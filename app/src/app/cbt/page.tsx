'use client';

import React, { useState } from 'react';
import { mockQuestions } from '@/lib/mock-data';
import { Question } from '@/types/questions';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Timer from '@/components/Timer';

const CBTPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion: Question = mockQuestions[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < mockQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleQuestionSelect = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">{`JAMB ${currentQuestion.subject}`}</h1>
          <Timer initialMinutes={60} />
        </div>
        <div className="mb-8">
          <p className="text-lg mb-4">{`Question ${currentQuestionIndex + 1}`}</p>
          <p className="text-lg mb-4">{currentQuestion.question}</p>
          <ul>
            {currentQuestion.options.map((option, index) => (
              <li key={index} className="mb-2">
                <label className="flex items-center">
                  <input type="radio" name="option" className="mr-2" />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center mb-8">
          <button onClick={handlePrev} className="p-2 rounded-full hover:bg-gray-200">
            <AiOutlineArrowLeft size={24} />
          </button>
          <button onClick={handleNext} className="p-2 rounded-full hover:bg-gray-200 ml-4">
            <AiOutlineArrowRight size={24} />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 flex-wrap">
            {mockQuestions.map((q, index) => (
              <button
                key={q.id}
                onClick={() => handleQuestionSelect(index)}
                className={`w-10 h-10 rounded-md ${
                  index === currentQuestionIndex
                    ? 'bg-brand-secondary text-white'
                    : 'bg-gray-200'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button className="bg-brand-primary text-white px-8 py-2 rounded-md">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CBTPage;