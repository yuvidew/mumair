import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import logo from "@/public/logo.svg"
import Link from 'next/link'
import { FacebookIcon, Instagram, Linkedin, Twitter } from 'lucide-react'


export const Footer:React.FC = () => {
    return (
        <footer className=' pt-[5rem]'>
            <div className=' container'>
                <h2 className='text-[2.5rem] text-center font-medium '>Lets Design Together</h2>
                <p className=' text-center font-light text-stone-700 dark:text-stone-200 text-[.9rem] mt-2'>Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus <br /> lectus. Phasellus consequat urna tellus</p>
                <div className=' flex items-center justify-center gap-[3rem] mt-[3rem]'>
                    <Input type='email' placeholder='Enter Your Email' className='w-[30rem] dark:bg-stone-100 bg-slate-100 text-stone-700 p-5' />
                    <Button variant={"orange"} className='h-full'>
                        Contact Me
                    </Button>
                </div>
                <div className=' flex items-center justify-center gap-[2rem] lg:flex-col py-[4rem] mt-[2rem]'>
                    <div className='flex items-center justify-start gap-3 '>
                        <Image src={logo} alt='logo' className='w-9 h-9' />
                        <h1 className=' text-[#1E1E1E] dark:text-stone-100 text-[1.3rem] font-light'>
                            <span className=' font-medium'>M</span>umair
                        </h1>
                    </div>
                    <nav className=' lg:flex hidden items-center gap-[2.3rem]'>
                        <Link href={'#home'} className=' dark:font-light text-[.9rem] dark:text-stone-200 '>Home</Link>
                        <Link href={'#about'} className=' dark:font-light text-[.9rem] dark:text-stone-200 '>About Me</Link>
                        <Link href={'#services'} className=' dark:font-light text-[.9rem] dark:text-stone-200 '>Services</Link>
                        <Link href={'#projects'} className=' dark:font-light text-[.9rem] dark:text-stone-200 '>Projects</Link>
                        <Link href={'#testimonials'} className=' dark:font-light text-[.9rem] dark:text-stone-200 '>Testimonials</Link>
                        <Link href={'#contact'} className=' dark:font-light text-[.9rem] dark:text-stone-200 '>Contact</Link>
                    </nav>
                    <div className=' flex items-center justify-center gap-3 mt-3'>
                        <FacebookIcon/>
                        <Twitter />
                        <Instagram/>
                        <Linkedin/>
                    </div>
                </div>
            </div>
            <div className=' flex items-center justify-center py-[1.7rem] bg-stone-700 dark:bg-[#101010]'>
                <h2 className='text-stone-100'>© 2023 <span className='text-[#FD6F00]'>Mumair</span> All Rights Reserved , Inc.</h2>
            </div>
        </footer>
    )
}
