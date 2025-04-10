"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Header2() {
  const path = usePathname();
  const { isSignedIn, isLoaded } = useUser();

  const isPublicPage = path === "/" || path === "/sign-in" || path === "/sign-up";

  return (
    <div className="flex p-4 items-center justify-between bg-slate-50 shadow-lg  relative">
    

      <Link href="/">
        <Image src="/logo11.png" width={200} height={144} alt="MockMate logo" />
      </Link>

      <ul className="hidden md:flex gap-6 items-center">
        {isLoaded && isSignedIn ? (
          <>
            <Link href="/">
              <li
                className={`hover:text-purple-500 hover:font-bold transition-all cursor-pointer 
                ${path === "/" && "text-purple-500 font-bold"}`}
              >
                Home
              </li>
            </Link>
            <Link href="/dashboard">
              <li
                className={`hover:text-purple-500 hover:font-bold transition-all cursor-pointer 
                ${path === "/dashboard" && "text-purple-500 font-bold"}`}
              >
                Dashboard
              </li>
            </Link>
            <Link href="/dashboard/Questions">
              <li
                className={`hover:text-purple-500 hover:font-bold transition-all cursor-pointer 
                ${path === "/dashboard/Questions" && "text-purple-500 font-bold"}`}
              >
                Questions
              </li>
            </Link>
            <Link href="/dashboard/Upgrade">
              <li
                className={`hover:text-purple-500 hover:font-bold transition-all cursor-pointer 
                ${path === "/dashboard/Upgrade" && "text-purple-500 font-bold"}`}
              >
                Upgrade
              </li>
            </Link>
            <Link href="/dashboard/how-it-works">
              <li
                className={`hover:text-purple-500 hover:font-bold transition-all cursor-pointer 
                ${path === "/dashboard/how-it-works" && "text-purple-500 font-bold"}`}
              >
                How it works
              </li>
            </Link>
          </>
        ): (
          <>
            <Link href="/">
              <li
                className={`hover:text-purple-500 hover:font-bold transition-all cursor-pointer 
                ${path === "/" && "text-purple-500 font-bold"}`}
              >
                Home
              </li>
            </Link>
            <Link href="/Features">
              <li
                className={`hover:text-purple-500 hover:font-bold transition-all cursor-pointer 
                ${path === "/Features" && "text-purple-500 font-bold"}`}
              >
                Features
              </li>
            </Link>
            <Link href="/dashboard/Questions">
              <li
                className={`hover:text-purple-500 hover:font-bold transition-all cursor-pointer 
                ${path === "/dashboard/Questions" && "text-purple-500 font-bold"}`}
              >
                Questions
              </li>
            </Link>
            <Link href="/dashboard/Upgrade">
              <li
                className={`hover:text-purple-500 hover:font-bold transition-all cursor-pointer 
                ${path === "/dashboard/Upgrade" && "text-purple-500 font-bold"}`}
              >
                Upgrade
              </li>
            </Link>
            <Link href="/dashboard/how-it-works">
              <li
                className={`hover:text-purple-500 hover:font-bold transition-all cursor-pointer 
                ${path === "/dashboard/how-it-works" && "text-purple-500 font-bold"}`}
              >
                How it works
              </li>
            </Link>
          </>
  )}
      </ul>

      <div className="flex items-center space-x-4">
        {isLoaded && !isSignedIn && isPublicPage ? (
          <>
            <Link href="/sign-in">
              <button className="text-gray-700 border-2 border-black px-4 py-1 rounded-full transition-all duration-300 hover:text-white hover:bg-purple-500 hover:border-purple-500 hover:font-bold">
                Login
              </button>
            </Link>
            <Link href="/sign-up">
              <button className="bg-purple-500 text-white border-2 border-purple-500 px-3 py-1 mr-6 rounded-full transition-all duration-300 hover:bg-white hover:text-purple-500 hover:font-bold">
                Sign Up <i className="fas fa-arrow-right"></i>
              </button>
            </Link>
          </>
        ) : (
          isLoaded && isSignedIn && <UserButton afterSignOutUrl="/" />
        )}
      </div>
    </div>
  );
}

export default Header2;
