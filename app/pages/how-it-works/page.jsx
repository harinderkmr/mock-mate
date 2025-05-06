"use client"
import React, { useState } from 'react';

const MockMateFeatures = () => {
  const [jobRole, setJobRole] = useState('Frontend Developer');
  const [experience, setExperience] = useState('Intermediate');
  const [preferences, setPreferences] = useState({
    technical: true,
    behavioral: true,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setPreferences((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <div className="bg-purple-100 min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-900">How it Works ?</h1>
        <p className="text-lg text-gray-600 mt-2">Your Smart Interview Preparation Partner</p>
      </div>

      <div className="bg-purple-200 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-10 border-2 rounded-xl max-w-5xl p-8">
        {/* Step 1 */}
        <div>
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <div className="flex flex-col items-start space-y-3 text-left">
              <label className="font-medium text-gray-700">Job Role</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
              >
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
                <option>Data Scientist</option>
              </select>

              <label className="font-medium text-gray-700">Experience Level</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>

              <div className="mt-4">
                <label className="block">
                  <input
                    type="checkbox"
                    name="technical"
                    checked={preferences.technical}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  Technical, HR
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    name="behavioral"
                    checked={preferences.behavioral}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  Behavioral
                </label>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-1 text-center">
            <h3 className="mt-2 text-lg font-semibold text-purple-900">1. Input Your Role & Preferences</h3>
            <p>Select your job role and experience level to customize your interview experience.</p>
          </div>
        </div>

        {/* Step 2 */}
        <div>
          <div className="bg-white rounded-3xl shadow-md p-6 w-full max-w-md space-y-4">
            {/* Question Block */}
            <div className="flex items-start space-x-2">
              <div className="bg-purple-100 p-2 rounded-full">
                <svg
                  className="w-5 h-5 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <div className="bg-purple-100 rounded-xl px-4 py-2 text-sm text-gray-800">
                <p>Explain the concept of state in React</p>
              </div>
            </div>

            {/* Response Block */}
            <div className="relative bg-purple-50 rounded-xl p-4 text-sm text-gray-800">
              <p className="font-semibold text-gray-900">Response</p>
              <p>
                Good explanation <span className="text-gray-400">strate</span>, Mention how it can be changed with{' '}
                <code className="bg-gray-200 px-1 rounded">setState</code>.
              </p>

              <button className="absolute bottom-2 right-2 bg-purple-800 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mic-icon lucide-mic">
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
              <line x1="12" x2="12" y1="19" y2="22"/>
              </svg>
              </button>
            </div>
          </div>
          <div className="rounded-xl p-1 text-center">
            <h3 className="mt-2 text-lg font-semibold text-purple-900">2. Real-Time Interview Session</h3>
            <p>Answer questions live and receive on-the-spot guidance.</p>
          </div>
        </div>

        {/* Step 3 */}
        <div>
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <div className="bg-purple-50 p-4 rounded-lg mb-4 text-left">
              <p className="text-sm text-gray-700 mb-1">
                <strong>Score: 7.5</strong>
              </p>
              <p className="text-sm text-gray-600">
                Good explanation of state. Mention how it can be changed with setState.
              </p>
              <button className="mt-3 px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm">📊 Track & Improve</button>
            </div>
          </div>
          <div className="rounded-xl p-1 text-center">
            <h3 className="mt-2 text-lg font-semibold text-purple-900">3. Instant Feedback & Scoring</h3>
            <p>Get feedback based on clarity, confidence, and relevance.</p>
          </div>
        </div>
      </div>

      <footer className="mt-10 text-purple-900 text-sm">
        <p>
          <strong>Get Mocked, Get Hired</strong> — with{' '}
          <span className="text-purple-900 font-semibold">MockMate</span>
        </p>
      </footer>
    </div>
  );
};

export default MockMateFeatures;
