"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { use, useEffect, useState } from "react";
import QuestionsSection from "./_components/QuestionsSection";
import RecordAnswerSection from "./_components/RecordAnswerSection";
import Link from "next/link";

function StartInterview({ params }) {
  const resolvedParams = use(params);
  const [interviewData, setInterviewData] = useState(null); // ✅ Default to null
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState([]); // ✅ Default to empty array
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  useEffect(() => {
    GetInterviewDetails();
  }, []);

  // -------------------------------------
  // Get interview details by mockId
  // -------------------------------------
  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, resolvedParams.interviewId));

    if (!result.length) {
      console.error("No interview data found!");
      return;
    }

    const jsonMockResp = JSON.parse(result[0].jsonMockResp);
    setMockInterviewQuestion(jsonMockResp);
    setInterviewData(result[0]);
  };

  // ✅ Log mockInterviewQuestion AFTER it updates
  useEffect(() => {
    console.log("Updated mockInterviewQuestion:", mockInterviewQuestion);
    console.log("Is Array?", Array.isArray(mockInterviewQuestion));
  }, [mockInterviewQuestion]); // ✅ Runs when state changes

  return (
    <div  >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10  ">
        {/* Question */}
        <QuestionsSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
        />

        {/* video/audio recording */}
        <RecordAnswerSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
          interviewData={interviewData}
        />
      </div>

      <div className="flex  ">
        <div className="lg:w-1/2 "></div>
        <div className="lg:w-1/2 flex justify-between ">
          <div className="ml-6">
            {activeQuestionIndex > 0 && (
              <Button
                onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
              >
                Previous Question
              </Button>
            )}
          </div>
          <div className="flex gap-4 ">
            {activeQuestionIndex !== mockInterviewQuestion?.length - 1 && (
              <Button
                onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
              >
                Next Question
              </Button>
            )}
            {activeQuestionIndex === mockInterviewQuestion?.length - 1 &&
              interviewData && (
                <Link
                  href={`/dashboard/interview/${interviewData.mockId}/feedback`}
                >
                  <Button>End Interview</Button>
                </Link>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartInterview;
