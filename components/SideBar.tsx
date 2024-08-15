import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { AlignRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'
import { ModeToggle } from './ModeToggle'


export const SideBar: React.FC = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <AlignRight />
            </SheetTrigger>
            <SheetContent>
                <nav className='mt-[3rem] '>
                    <ul>
                        <li className=' mb-[1.3rem]' >
                        <Link href={'#home'} className=' dark:font-light text-[.9rem] dark:text-stone-200 w-full'>Home</Link>
                        </li>
                        <li className=' mb-[1.3rem]' >    
                        <Link href={'#about'} className=' dark:font-light text-[.9rem] dark:text-stone-200 w-full'>About Me</Link>
                        </li>
                        <li className=' mb-[1.3rem]' >    
                        <Link href={'#services'} className=' dark:font-light text-[.9rem] dark:text-stone-200 w-full'>Services</Link>
                        </li>
                        <li className=' mb-[1.3rem]' >    
                        <Link href={'#projects'} className=' dark:font-light text-[.9rem] dark:text-stone-200 w-full'>Projects</Link>
                        </li>
                        <li className=' mb-[1.3rem]' >    
                        <Link href={'#testimonials'} className=' dark:font-light text-[.9rem] dark:text-stone-200 w-full'>Testimonials</Link>
                        </li>
                        <li className=' mb-[1.3rem]' >    
                        <Link href={'#contact'} className=' dark:font-light text-[.9rem] dark:text-stone-200 w-full'>Contact</Link>
                        </li>
                        <Button variant={"orange"} className=' font-light w-full'>
                            Download CV
                        </Button>
                    </ul>
                </nav>
            </SheetContent>
        </Sheet>

    )
}
