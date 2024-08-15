"use client"

import useScrollTop from '@/hook/useScrollTop'
import { cn } from '@/lib/utils'
import React from 'react'
import logo from "@/public/logo.svg"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ModeToggle'
import { SideBar } from '@/components/SideBar'

export const Header:React.FC = () => {
    const { scrolled } = useScrollTop()
    return (
        <header 
            className={cn(
                'z-50 bg-background fixed dark:bg-[#1E1E1E] top-0 flex items-center w-full p-6 ',
                scrolled && 'border-b shadow-sm'
            )}
        >
            <div className=' container '>
                <main className=' flex items-center justify-between'>
                    <div className='flex items-center justify-start gap-3'>
                        <Image src={logo} alt='logo' className='w-9 h-9' />
                        <h1 className=' text-[#1E1E1E] dark:text-stone-100 text-[1.3rem] font-light'>
                            <span className=' font-medium'>M</span>umair
                        </h1>
                    </div>
                    <div className=' flex items-center justify-end lg:gap-[2.3rem] gap-5'>
                        <nav className=' lg:flex hidden items-center gap-[2.3rem]'>
                            <Link href={'#home'} className=' dark:font-light text-[.9rem] dark:text-stone-200 '>Home</Link>
                            <Link href={'#about'} className=' dark:font-light text-[.9rem] dark:text-stone-200 '>About Me</Link>
                            <Link href={'#services'} className=' dark:font-light text-[.9rem] dark:text-stone-200 '>Services</Link>
                            <Link href={'#projects'} className=' dark:font-light text-[.9rem] dark:text-stone-200 '>Projects</Link>
                            <Link href={'#testimonials'} className=' dark:font-light text-[.9rem] dark:text-stone-200 '>Testimonials</Link>
                            <Link href={'#contact'} className=' dark:font-light text-[.9rem] dark:text-stone-200 '>Contact</Link>
                            <Button variant={"orange"} className=' font-light'>
                                Download CV
                            </Button>
                        </nav>
                        <ModeToggle/>
                        <div className=' lg:hidden block'>
                            <SideBar/>
                        </div>
                    </div>
                </main>
            </div>
        </header>
    )
}
