import React from 'react'
import { Button } from '@/components/ui/button'
import { FacebookIcon, Instagram, Linkedin, Twitter } from 'lucide-react'

export const Hero:React.FC = () => {
    return (
        <section className=' lg:h-[100vh] h-[60vh] lg:flex  items-center justify-between  '>
            <div className='lg:hidden lg:w-[50%] pt-[7rem] flex items-center justify-center'>
                <div className=' flex items-center justify-center flex-col  w-full gap-2'>
                    <img 
                        src={"https://s3-alpha-sig.figma.com/img/8aeb/1fc9/979b379ab7f66745a5c557015bf995d5?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p7qnOOi7RvdBltV-bRZXFEf6epZoJy1pfpt5gM014F0-kpaMk4cGmKWVcZifKwBppE5EaS8XJ2AGxlwUlxUsbtL3v3w6MTRYghyThMp2Mi0DmDlZL3sM5eOIV~5vwCccy95Racy0K7t~TGse2bAp6RfB3BnWcB-hiBHktjozoqsn7gLlnQHIExdfwKtGjGDTnAyfeA45r2Gu--vBxllz4RohlqVZIL9YJbjzzd-etUxfB6kliMSqgVv827rN4psfe8i2XRKIozWP4Rd6a-e8juOH8now4DoiM-wrQoDw9qRz5eoY9IN~8Vn5pOdAbzXg-9BsLWgRPKeEhKzK4g0N0w__"} 
                        className=' lg:w-[25rem] w-[10rem]  lg:h-[25rem] h-[10rem] object-contain rounded-full' 
                        alt='hero' 
                    />

                    <div className=' flex items-center justify-center gap-3 mt-3'>
                        <FacebookIcon/>
                        <Twitter />
                        <Instagram/>
                        <Linkedin/>
                    </div>
                </div>
            </div>
            <div className='lg:w-[50%] lg:mt-0 mt-[2rem]  '>
                <span className=' text-[#1e1e1e] dark:text-stone-100 text-[.9rem] lg:text-left text-center block'>Hii i am</span>
                <p className='text-[#FD6F00] text-[1.2rem] lg:text-left text-center'>Muhammad Umair </p>
                <h1 className='text-[#1e1e1e] dark:text-stone-100 lg:text-[5rem] md:text-[3rem] text-[2rem] font-bold lg:text-left text-center'>
                    UI & UX <br className='lg:block hidden' /><span className=' lg:ml-[11rem] ml-0'>Designer</span>
                </h1>
                <p className=' font-light text-stone-700 dark:text-stone-200 text-[.9rem] lg:text-left text-center mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum deleniti quibusdam esse est odio inventore nihil, explicabo ullam in, ducimus, nobis exercitationem recusandae dolorum repudiandae .</p>
                <Button variant={"orange"} className=' mt-5 font-light'>
                    Hire Me
                </Button>
            </div>
            <div className='  lg:w-[50%]  h-full lg:flex  hidden items-center justify-center'>
                <div className=' flex items-center justify-center flex-col  w-full gap-2'>
                    <img 
                        src={"https://s3-alpha-sig.figma.com/img/8aeb/1fc9/979b379ab7f66745a5c557015bf995d5?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p7qnOOi7RvdBltV-bRZXFEf6epZoJy1pfpt5gM014F0-kpaMk4cGmKWVcZifKwBppE5EaS8XJ2AGxlwUlxUsbtL3v3w6MTRYghyThMp2Mi0DmDlZL3sM5eOIV~5vwCccy95Racy0K7t~TGse2bAp6RfB3BnWcB-hiBHktjozoqsn7gLlnQHIExdfwKtGjGDTnAyfeA45r2Gu--vBxllz4RohlqVZIL9YJbjzzd-etUxfB6kliMSqgVv827rN4psfe8i2XRKIozWP4Rd6a-e8juOH8now4DoiM-wrQoDw9qRz5eoY9IN~8Vn5pOdAbzXg-9BsLWgRPKeEhKzK4g0N0w__"} 
                        className=' lg:w-[25rem] w-[10rem]  lg:h-[25rem] h-[10rem] object-contain rounded-full' 
                        alt='hero' 
                    />

                    <div className=' flex items-center justify-center gap-3 mt-3'>
                        <FacebookIcon/>
                        <Twitter />
                        <Instagram/>
                        <Linkedin/>
                    </div>
                </div>
            </div>
        </section>
    )
}
