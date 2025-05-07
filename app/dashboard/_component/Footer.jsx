import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-7 mt-0 animate-fadeInUp">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Logo + Tagline */}
        <div className="h-full flex flex-col items-center md:items-start justify-start">
        <h2 className="text-2xl font-bold tracking-wide hover:animate-pulse cursor-pointer"><Link href="/" className="hover:text-white transition duration-300">
            MockMate</Link>
          </h2>
          
          <p className="mt-2 text-sm text-purple-200">
            Level up your interviews with AI-powered mock sessions.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="h-full flex flex-col items-center md:items-start justify-start pl-4">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-4 pl-1 text-sm text-purple-200  ">
            <li><Link href="/" className="hover:text-white transition duration-300">Home</Link></li>
            <li><a href="#features" className="hover:text-white transition duration-300">Features</a></li>
            <li><Link href="/pages/contactus" className="hover:text-white transition duration-300">ContactUs</Link></li>
            <li><a href="https://github.com/harinderkmr" className="hover:text-white transition duration-300">Developer</a></li>
          </ul>
        </div>

        {/* Social + CTA */}
        <div className="h-full flex flex-col items-center md:items-start justify-start space-y-3">
          <h3 className="text-lg font-semibold mb-1">Connect</h3>
          <p className="text-sm text-purple-200">Follow us for updates & tips!</p>

          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a href="#" className="hover:text-pink-300 transition"><FaTwitter /></a>
            <a href="https://www.linkedin.com/in/harinder-kumar07/" className="hover:text-blue-300 transition"><FaLinkedin /></a>
            <a href="https://github.com/harinderkmr" className="hover:text-gray-300 transition"><FaGithub /></a>
          </div>

          <form className="mt-3 w-full max-w-xs">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-md text-sm text-black focus:outline-none"
            />
            <button
              type="submit"
              className="mt-2 w-full bg-purple-700 hover:bg-purple-600 text-white text-sm py-2 rounded-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-5 m  border-t border-purple-700 pt-2  text-center text-sm text-purple-300">
        © {new Date().getFullYear()} MockMate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
