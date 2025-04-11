import Image from "next/image";
import React from "react";

const Features = () => {
  const features = [
    {
      title: "Practice and feedback",
      description:
        " Real-Time Feedback powered by the Gemini AI model to help users understand their strengths and areas of improvement immediately.",
      imgSrc: "/practice.jpg",
      alt: "Illustration of practice.jpg",
    },
    {
      title: "Realistic interview environments.",
      description:
        "Reducing anxiety through familiarization with realistic interview environments.",
      imgSrc: "/interview-environment.jpg",
      alt: "Illustration of Realistic interview environments",
    },
    {
      title: "Accessible anytime",
      description:
        "Making interview practice accessible anytime, anywhere, without scheduling human mock interviewers.",
      imgSrc: "/anytime.png",
      alt: "Illustration of Accessible anytime",
    },
  ];

  return (
    <div id="features" className="bg-white text-gray-800 min-h-screen w-full flex items-center  ">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-purple-600 mb-4">Features</h1>
        <p className="text-gray-500 mb-12">
          MockMate’s comprehensive approach transforms interview preparation{" "}
          <br />
          from passive study into active simulation, providing users with the
          confidence and readiness they need to succeed.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg rounded-lg p-8 my-30 max-w-xs transform transition-transform duration-300 ease-in-out hover:shadow-2xl hover:ring-2 hover:ring-purple-300
 hover:-translate-y-2 
  ${index === 1 ? "-translate-y-8" : ""}`}
            >
              <Image
                src={feature.imgSrc}
                width={100}
                height={100}
                alt={feature.alt}
                className="mx-auto mb-4"
              />
              {/* <img
      src={feature.imgSrc}
      alt={feature.alt}
      width={100}
      height={100}
      className="mx-auto mb-4"
    /> */}
              <h2 className="text-xl font-bold text-purple-600 mb-2">
                {feature.title}
              </h2>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
