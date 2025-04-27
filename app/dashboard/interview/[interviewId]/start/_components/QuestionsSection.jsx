import { Lightbulb, Volume2 } from "lucide-react";
import React from "react";

function QuestionsSection({ mockInterviewQuestion, activeQuestionIndex }) {
  const textToSpeech = (text) => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry, Your browser does not support Text to speech");
    }
  };
  return (
    mockInterviewQuestion && (
      <div className="p-5 border mt-9 mb-2 rounded-lg bg-purple-100 shadow-lg relative ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          {mockInterviewQuestion &&
            mockInterviewQuestion.map((question, index) => (
              <h2
                key={index} // ✅ Key added
                className={`p-2 rounded-full text-xs md:text-sm text-center cursor-pointer
                  ${activeQuestionIndex === index ? "bg-purple-500 text-white font-semibold shadow-lg" : "bg-purple-200 text-purple-700 font-semibold shadow-inner"}
                `}
                
              >
                Question #{index + 1}
              </h2>
            ))}
        </div>
        <div >
        <h2 className="my-5 text-md md:text-lg">
          {" "}
          {mockInterviewQuestion[activeQuestionIndex]?.question}{" "}
        </h2>

        </div>

        
        <Volume2
          className="cursor-pointer  bg-purple-200 rounded-xl"
          onClick={() =>
            textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question)
          }
        />
        <div className="border rounded-lg p-5 bg-blue-100 shadow-inner absolute right-4 left-4 bottom-4 ">
          <h2 className="flex gap-2 items-center text-primary">
            <Lightbulb />
            <strong>Note:</strong>
          </h2>
          <h2 className="text-sm text-primary my-2">
            {process.env.NEXT_PUBLIC_QUESTION_NOTE}
          </h2>
        </div>
      </div>
    )
  );
}

export default QuestionsSection;
