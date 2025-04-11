import React from "react";
import Head from "next/head";
import Link from "next/link";
import AnimatedHeading1 from "./AnimatedHeading1";


function HeroSection() {
  return (
    <div className="bg-white">
    {/* <div className="bg-gray-50"> */}
    
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        /> */}
      </Head>

      <main className=" flex flex-col lg:flex-row items-center justify-between py-4 lg:py-0  px-8 lg:px-8">
        <div className="text-center lg:text-left lg:w-1/2 space-y-4 lg:pl-8">
          {/* <h2 className="text-4xl lg:text-6xl font-bold text-purple-500  ">
            Mock Mate,{" "}
            <span className="text-gray-800">Placements Simplified!!!</span>
          </h2> */}
          <AnimatedHeading1/>
          <Link href="/sign-up">
            <button className="bg-purple-500 text-white mt-10 mb-6 px-6 py-3 rounded-full text-lg  border-2 border-purple-500 transition-all duration-300 hover:bg-white hover:text-purple-500 hover:font-bold">
              Sign Up for Free
            </button>
          </Link>
          <div className="flex justify-center lg:justify-start space-x-4 text-purple-500">
            <div className="flex items-center space-x-1">
              <i className="fa-solid fa-check"></i>

              <span>Aptitude</span>
            </div>
            <div className="flex items-center space-x-1">
              <i className="fas fa-check"></i>
              <span>Coding</span>
            </div>
            <div className="flex items-center space-x-1">
              <i className="fas fa-check"></i>
              <span>Interview Prep</span>
            </div>
            <div className="flex items-center space-x-1">
              <i className="fas fa-check"></i>
              <span>New Age Skills</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-2">
              <img
                src="https://storage.googleapis.com/a1aa/image/Hsue8DwAyF5RFuNQN911xIPQL1Ou7IgamQUcXZu2_mc.jpg"
                alt="User 1"
                className="w-10 h-10 rounded-full border-2 border-white"
                width="40"
                height="40"
              />
              <img
                src="https://storage.googleapis.com/a1aa/image/I7JuTCvHb9WZJoISPalIFv4j19fkSfExUBVUO0jZ5c0.jpg"
                alt="User 2"
                className="w-10 h-10 rounded-full border-2 border-white"
                width="40"
                height="40"
              />
              <img
                src="https://storage.googleapis.com/a1aa/image/tGD8MXcBuIDFOTUEBpo7Tbt4ubhE0vTCibnCaMfVxEg.jpg"
                alt="User 3"
                className="w-10 h-10 rounded-full border-2 border-white"
                width="40"
                height="40"
              />
              <img
                src="https://storage.googleapis.com/a1aa/image/EUjCsB4HqdgJamw8niFhLOKZN369qJL-r1MZ12Tuxgc.jpg"
                alt="User 4"
                className="w-10 h-10 rounded-full border-2 border-white"
                width="40"
                height="40"
              />
            </div>
            <div>
              <p className="text-lg font-bold">10 Million+</p>
              <p className="text-gray-500">Monthly Active Learners</p>
            </div>
          </div>
        </div>

        <div className="relative lg:w-1/2 mt-8 lg:mt-0 ">
          <img
            src="/grid.svg"
            alt="Grid"
            className="  w-full h-full object-cover  z-0 opacity-15 "
          />
          {/* absolute inset-0: makes the image fill the entire container (top: 0; right: 0; bottom: 0; left: 0)
          w-full h-full: ensures the image stretches to the parent size
          object-cover: keeps the aspect ratio while filling the container (crops if needed)
          */}

          <img
            src="/girl-book-p.png"
            alt="Girl with book"
            className="absolute top-8 left-8 rounded-lg drop-shadow-xl z-10 "
            width={660}
            height={825}
          />
        </div>
      </main>
    </div>
  );
}

export default HeroSection;
