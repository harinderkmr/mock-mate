"use client"
import React, { useEffect, useState } from 'react';

const FeedbackResults = ({interviewId}) => {
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching from backend
    const fetchFeedback = async () => {
      try {
        // Replace with your real API endpoint
        const res = await fetch(`/api/feedback/${userId}`);
        const data = await res.json();
        setFeedback(data);
      } catch (error) {
        console.error("Failed to fetch feedback", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, [userId]);

  if (loading) return <p className="text-center py-10">Loading feedback...</p>;
  if (!feedback) return <p className="text-center py-10">No feedback found.</p>;

  const { score, strengths, weaknesses, suggestions, remarks } = feedback;

  return (
    <section className="bg-white px-6 py-10 max-w-4xl mx-auto rounded-xl shadow-lg mt-8">
      <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center">
        Your Mock Interview Feedback
      </h2>

      <div className="text-center mb-8">
        <p className="text-lg text-gray-700">Overall Score</p>
        <div className="text-5xl font-extrabold text-purple-700">{score}/10</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base">
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <h3 className="font-semibold text-purple-700 mb-2">💪 Strengths</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {strengths.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <h3 className="font-semibold text-red-600 mb-2">⚠️ Weak Areas</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {weaknesses.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-700 mb-2">💡 Suggestions</h3>
          <p className="text-gray-700">{suggestions}</p>
        </div>

        <div className="md:col-span-2 bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="font-semibold text-green-700 mb-2">🧠 AI's Remark</h3>
          <p className="text-gray-700 italic">“{remarks}”</p>
        </div>
      </div>
    </section>
  );
};

export default FeedbackResults;
