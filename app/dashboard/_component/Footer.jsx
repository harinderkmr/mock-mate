import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-10 mt-0 animate-fadeInUp">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Logo + Tagline */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide hover:animate-pulse cursor-pointer">
            MockMate
          </h2>
          <p className="mt-2 text-sm text-purple-200">
            Level up your interviews with AI-powered mock sessions.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm text-purple-200">
            <li><a href="#" className="hover:text-white transition duration-300">Home</a></li>
            <li><a href="#" className="hover:text-white transition duration-300">Features</a></li>
            <li><a href="#" className="hover:text-white transition duration-300">About</a></li>
            <li><a href="#" className="hover:text-white transition duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-2 text-xl">
            <a href="#" className="hover:text-pink-300 hover:animate-bounce"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-300 hover:animate-bounce"><FaLinkedin /></a>
            <a href="#" className="hover:text-gray-300 hover:animate-bounce"><FaGithub /></a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-purple-700 pt-4 text-center text-sm text-purple-300">
        © {new Date().getFullYear()} MockMate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
