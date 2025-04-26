"use client"
import React, { useState } from 'react';

const questions = [
  {
    category: 'Behavioral',
    text: 'Tell me about a time you handled a conflict in a team.',
    answer: 'During my internship, two teammates disagreed on implementation. I facilitated a discussion, understood both perspectives, and we compromised by merging ideas. This boosted collaboration and delivered results on time.',
  },
  {
    category: 'Technical',
    text: 'Explain how closures work in JavaScript.',
    answer: 'A closure is a function that remembers the variables from its lexical scope even when executed outside that scope. It allows access to outer function variables after the outer function has returned.',
  },
  {
    category: 'HR',
    text: 'Why do you want to work at our company?',
    answer: 'I admire your commitment to innovation and your culture of growth. I want to contribute to impactful projects while learning from experienced mentors.',
  },
];

const QuestionSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentQuestion = questions[currentIndex];

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowAnswer(false);
    }
  };

  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto bg-purple-100 rounded-xl shadow-lg p-8 transition-all duration-300">
        <div className="flex justify-between items-center mb-4">
          <span className="bg-purple-200 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
            {currentQuestion.category}
          </span>
          <span className="text-sm text-purple-600">
            Question {currentIndex + 1} of {questions.length}
          </span>
        </div>

        <h2 className="text-xl md:text-2xl font-semibold text-purple-900">
          {currentQuestion.text}
        </h2>

        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className="mt-4 text-purple-800 underline text-sm hover:text-purple-600 transition"
        >
          {showAnswer ? 'Hide Answer' : 'Show Answer'}
        </button>

        {showAnswer && (
          <div className="mt-4 bg-white border-l-4 border-purple-500 text-purple-800 px-4 py-3 rounded-md shadow-inner text-sm">
            {currentQuestion.answer}
          </div>
        )}

        <div className="mt-6 flex justify-between">
          <button
            onClick={prevQuestion}
            disabled={currentIndex === 0}
            className="bg-purple-700 text-white px-4 py-2 rounded-md disabled:opacity-40"
          >
            Previous
          </button>

          <button
            onClick={nextQuestion}
            disabled={currentIndex === questions.length - 1}
            className="bg-purple-700 text-white px-4 py-2 rounded-md disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuestionSection;
