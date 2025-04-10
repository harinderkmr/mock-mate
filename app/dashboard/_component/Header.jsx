"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {

    const path=usePathname();
    useEffect(() => {
        console.log(path+"hello ji");

    },[])
    
  return (
    <div className='flex p-4 items-center justify-between bg-slate-50 shadow-lg'>
        <Image src={'/logo.svg'}  width={160} height={100} alt='logo'/>
        <ul className=' hidden md:flex gap-6'>
            <li className={`hover:text-purple-500 hover:font-bold transition-all cursor-pointer 
                ${path=='/dashboard'&&'text-purple-500 font-bold'}
            `}>Dashboard</li>
            <li className={`hover:text-purple-500 hover:font-bold transition-all cursor-pointer 
                ${path=='/dashboard/Questions'&&'text-purple-500 font-bold'}
            `}>Questions</li>
            <li className={`hover:text-purple-500 hover:font-bold transition-all cursor-pointer 
                ${path=='/dashboard/Upgrade'&&'text-purple-500 font-bold'}
            `}>Upgrade</li>
            <li className={`hover:text-purple-500 hover:font-bold transition-all cursor-pointer 
                ${path=='/dashboard/How it works'&&'text-purple-500 font-bold'}
            `}>How it works</li>
        </ul>
        <UserButton/>
    </div>
  )
}

export default Header