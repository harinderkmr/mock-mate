'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { toast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';

const Footer = () => {
  const [email, setEmail] = useState('');
  // const [form, setForm] = useState({
  //   email: "",
  // });
  //  const handleChange = (e) => {
  //    setForm({ ...form, [e.target.name]: e.target.value });
  //  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try{
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
  
    const data = await res.json();

      if (res.ok) {
        toast({
          title: "✅ Subscribed!",
          description: "Thankyou.",
        });
        
      } else {
        toast({
          title: "❌ Failed to send",
          description: data.message || "Please try again.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "🚨 Server Error",
        description: "Something went wrong. Try again later.",
        variant: "destructive",
      });
      console.error(err);
    }
  };
  
  

  return (
    <footer className="bg-purple-900 text-white py-7 mt-0 animate-fadeInUp">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Logo + Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold tracking-wide hover:animate-pulse cursor-pointer">
            <Link href="/" className="hover:text-white transition duration-300">
              MockMate
            </Link>
          </h2>
          <p className="mt-2 text-sm text-purple-200">
            Level up your interviews with AI-powered mock sessions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-4 text-sm text-purple-200">
            <li><Link href="/" className="hover:text-white transition duration-300">Home</Link></li>
            <li><a href="#features" className="hover:text-white transition duration-300">Features</a></li>
            <li><Link href="/pages/contactus" className="hover:text-white transition duration-300">ContactUs</Link></li>
            <li><a href="https://github.com/harinderkmr" className="hover:text-white transition duration-300">Developer</a></li>
          </ul>
        </div>

        {/* Social + Subscribe */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h3 className="text-lg font-semibold mb-1">Connect</h3>
          <p className="text-sm text-purple-200">Follow us for updates & tips!</p>

          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a href="#" className="hover:text-pink-300 transition"><FaTwitter /></a>
            <a href="https://www.linkedin.com/in/harinder-kumar07/" className="hover:text-blue-300 transition"><FaLinkedin /></a>
            <a href="https://github.com/harinderkmr" className="hover:text-gray-300 transition"><FaGithub /></a>
          </div>

          {/* Subscription Form */}
          <form onSubmit={handleSubscribe} className="mt-3 w-full max-w-xs">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-md text-sm text-black focus:outline-none"
              required
            />
            <button
              type="submit"
              className="mt-2 w-full bg-purple-700 hover:bg-purple-600 text-white text-sm py-2 rounded-md transition"
            >
              Subscribe
            </button>
          </form>
          <Toaster />
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-5 border-t border-purple-700 pt-2 text-center text-sm text-purple-300">
        © {new Date().getFullYear()} MockMate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
