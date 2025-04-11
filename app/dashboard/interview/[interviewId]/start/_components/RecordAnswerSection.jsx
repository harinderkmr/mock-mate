"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import useSpeechToText from "react-hook-speech-to-text";
import { toast } from "sonner";
import { chatSession } from "@/utils/GeminiAIModal";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { Mic, StopCircle } from "lucide-react";

function RecordAnswerSection({ mockInterviewQuestion, activeQuestionIndex, interviewData }) {
  const [userAnswer, setUserAnswer] = useState("");
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  const {
    error,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });

  useEffect(() => {
    if (results.length > 0) {
      setUserAnswer(results.map((r) => r.transcript).join(" "));
    }
  }, [results]);

  useEffect(() => {
    if (!isRecording && userAnswer.length > 10) {
      UpdateUserAnswer();
    }
  }, [userAnswer]);

  const StartStopRecording = async () => {
    if (isRecording) {
      stopSpeechToText();
      
    } else {
      setUserAnswer(""); // Clear previous answer before recording
      startSpeechToText();
    }
  };

  const UpdateUserAnswer = async () => {
    setLoading(true);
    // console.log("updating user answer");
    const feedbackPrompt = `Question: ${mockInterviewQuestion[activeQuestionIndex]?.question}
    User Answer: ${userAnswer}
    Based on the question and answer, provide a rating and feedback in JSON format with fields "rating" and "feedback".`;

    const result = await chatSession.sendMessage(feedbackPrompt);

    let JsonFeedbackResp;
    try {
      const mockJsonResp = (result.response.text()).replace("```json", "").replace("```", "").trim();
      JsonFeedbackResp = JSON.parse(mockJsonResp);
    } catch (error) {
      console.log("Error:",error);
      console.error("Invalid JSON Response:", error);
      return toast.error("AI feedback parsing failed.");
    }

    if (JsonFeedbackResp) {
      await db.insert(UserAnswer).values({
        mockIdRef: interviewData?.mockId,
        question: mockInterviewQuestion[activeQuestionIndex]?.question,
        correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
        userAns: userAnswer,
        feedback: JsonFeedbackResp?.feedback,
        rating: JsonFeedbackResp?.rating,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format("DD-MM-YYYY")
      });

      toast.success("User answer recorded successfully");
      setUserAnswer("");
      setResults([]);
    }
    
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-col justify-center items-center bg-black rounded-lg p-5 my-9">
        <Image src="/webcam.png" alt="webcam" width={200} height={200}  className='absolute' />

        <Webcam mirrored={true} style={{ height: 400, width: "100%", zIndex: 10 }} />
      </div>
      
      <Button disabled={loading} variant="outline" className="mb-4" onClick={StartStopRecording}>
        {isRecording ? (
          <h2 className="text-red-600 flex gap-2">
            <StopCircle /> Stop Recording
          </h2>
        ) : (
          <h2 className="text-purple-600 flex gap-2 items-center">
            <Mic /> Record Answer
          </h2>
        )}
      </Button>

      {/* <Button onClick={() => console.log(userAnswer)}>Show Answer</Button> */}
    </div>
  );
}

export default RecordAnswerSection;
