"use client"
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Header2() {
  const path = usePathname();
  const { isSignedIn, isLoaded, user } = useUser();  // Assuming `user` contains the interviewId
  const [menuOpen, setMenuOpen] = useState(false);

  const isPublicPage = path === "/" || path === "/sign-in" || path === "/sign-up" ;

  // Assuming you have interviewId stored in user object, you can use it like this
  const interviewId = user?.id || "default-interview-id";  // Replace with actual logic to get interview ID

  const navItems = isLoaded && isSignedIn ? [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/dashboard/questions", label: "Questions" },
    { href: "/dashboard/upgrade", label: "Upgrade" },
    { href: "/pages/feedback", label: "Feedback" }
    //{ href: `/dashboard/interview/${interviewId}/feedback`, label: "Feedback" } // Dynamic Feedback URL
  ] : [
    { href: "/", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "/dashboard/questions", label: "Questions" },
    { href: "/dashboard/upgrade", label: "Upgrade" },
    { href: "/pages/how-it-works", label: "How it works" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-slate-50 shadow-lg p-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image src="/logo11.png" width={165} height={110} alt="MockMate logo" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 items-center">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <li className={`list-none cursor-pointer transition-all hover:text-purple-500 hover:font-bold ${
                  path === item.href ? "text-purple-500 font-bold" : ""
                }`}>
                  {item.label}
                </li>
              </Link>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoaded && !isSignedIn && isPublicPage ? (
              <>
                <Link href="/sign-in">
                  <button className="text-purple-500 border-2 border-purple-500 px-4 py-1 rounded-full hover:bg-purple-500 hover:text-white transition">
                    Login
                  </button>
                </Link>
                <Link href="/sign-up">
                  <button className="bg-purple-500 text-white px-4 py-1 border-2 border-purple-500 rounded-full hover:bg-white hover:text-purple-500 transition">
                    Sign Up
                  </button>
                </Link>
              </>
            ) : (
              isLoaded && isSignedIn && <UserButton afterSignOutUrl="/" />
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Light Blurred Background */}
      {menuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-md bg-white/40 z-40 transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Slide-in Menu from Right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-slate-50 shadow-lg z-50 p-6 transform transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
      >
        <div className="flex justify-end mb-4">
          <button onClick={() => setMenuOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <ul className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              <li className={`list-none cursor-pointer hover:text-purple-500 hover:font-bold ${
                path === item.href ? "text-purple-500 font-bold" : ""
              }`}>
                {item.label}
              </li>
            </Link>
          ))}
        </ul>

        <div className="mt-6 flex flex-col gap-2">
          {isLoaded && !isSignedIn && isPublicPage ? (
            <>
              <Link href="/sign-in" onClick={() => setMenuOpen(false)}>
                <button className="text-gray-700 border-2 border-black px-4 py-1 rounded-full hover:bg-purple-500 hover:text-white transition w-full">
                  Login
                </button>
              </Link>
              <Link href="/sign-up" onClick={() => setMenuOpen(false)}>
                <button className="bg-purple-500 text-white px-4 py-1 border-2 border-purple-500 rounded-full hover:bg-white hover:text-purple-500 transition w-full">
                  Sign Up
                </button>
              </Link>
            </>
          ) : (
            isLoaded && isSignedIn && <UserButton afterSignOutUrl="/" />
          )}
        </div>
      </div>
    </>
  );
}

export default Header2;
