import React from 'react'
import img1 from "@/public/illustration.png"
import img2 from "@/public/mobile-app.png"
import img3 from "@/public/ux-design.png"
import img4 from "@/public/web-design.png"

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'



export const Services: React.FC = () => {
    const cards = [
        {
            title: 'UI/UX',
            img: img1
        },
        {
            title: 'Web Design',
            img: img4
        },
        {
            title: 'App Design',
            img: img2
        },
        {
            title: 'Graphic Design',
            img: img3
        },
    ]
    return (
        <section className='py-[4rem]'>
            <h2 className='text-[2.5rem] text-center font-medium '>Service</h2>
            <p className=' text-center font-light text-stone-700 dark:text-stone-200 text-[.9rem] mt-2'>Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus <br /> lectus. Phasellus consequat urna tellus</p>
            <div className=' grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 mt-[2rem]'>
                {cards.map((ele, index) => (
                    <Card key={index} className=' dark:bg-stone-100'>
                        <CardHeader className='gap-[1rem]'>
                            <Image src={ele.img} alt={ele.title} className='w-[3rem] h-[3rem]' />
                            
                            <CardTitle className='dark:text-[#1e1e1e]  text-[1.1rem]'>{ele.title}</CardTitle>
                            
                            <CardDescription className='dark:text-[#1e1e1e] mt-3'>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</CardDescription>
                        </CardHeader>
                    </Card>

                ))}
            </div>
        </section>
    )
}
