import React from 'react'


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'


export const Project: React.FC = () => {
    const tabs = ["all", "ui/ux", "web design", "app design", "graphic design"]
    const cards = [
        {
            img: "https://s3-alpha-sig.figma.com/img/35f5/4291/466e1911ebe5383b65f5e9a7095f7e2c?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BPyq4z-AI2oEhx1uYNkgj0kZelOXlwtaaBq5HYXXEcB7fugcsFVWlsCkJJcR6FXbBVQLOyRh0c8iw-l-gI37153SR5zYou3jw-lwW-8Tfu6L-zVXeuHlbbnNAiAap1ylcAlXmVa1~i9NnbzQoykJDxGuSkUeHzJQOHmU5-Apicl3TfavyGfX~n-PrqUNyDQWltiMoilfMs6AHIxwKDxPIUedBixUmyz9cDJLe5rd~DK8LtZCXSKWhlwDBXLNahh0jkx2jTzWFOwAtf2bt3G9IRxkyqtpYwFVBgerPCQMKbO3c0tXLzjoauMIKUDnrNoyPuIxb5VU1Tk1ugVNTTmu1w__",
            title: 'AirCalling Landing Page Design'
        },
        {
            img: "https://s3-alpha-sig.figma.com/img/99ad/9ecd/c7e4761db8fcbee96701dabc95083a4d?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pw7ieWqQZSAPwHshvhzpMCKwRcwc99wYUq6HAHak-gmlSFYopBtihqFUpFAhU5SIedCd4dY~blVQPYTJBt-3uF8wHYZYuteqkMNwTP6WdqJmtguNaApzAcnQnWD~Il0iKk1CwNbrKCXI1ofSv7hVuks5SkOu6kuSgCxtJ4xA~WVko9McwSPOBao4sL9NOXOkvyt6aNjGacgxRaH5pI8KdG4TI5JFMXf1G0PMvy52dLcvR1MZJEKJTIQS4XwJ0SJ5AIWHBzW41QzbseuyUmvcnM6x4u8olJKVp6NPi9mELeNm8frmbSA7g0TZKBoM9BEyfUl3SL5r0Vfa~QRXqrpsZg__",
            title: 'Business Landing Page Design'
        },
        {
            img: "https://s3-alpha-sig.figma.com/img/08a3/15aa/af2fb38ce2fa59072d26b09da15537ed?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oKlFPgdd3SOC8y08OOnU3NPsdF4uwBJQB~KdJGMZCobuHp-dLU-BJ66juDafoSTHn~65UwtGRJiybl5lSvRBx6UKV6ISq6mY8D48baphIaGQAw9I3X788Yw0kuV5~JhnpMhYb-HyoEpOOWkbaJRXQS3fUXzKzkGuq19ovXaK-2uECYOIBl2RFq6KyCGPhYjJ9VVPAAQYu4VfVFCRn9ahmHai1r8lJq6ESj~wq33m05nb3kyp~nu9g0nCm-0lLS8ousgqL~ejYCVG-KEwoOlvGg2aCYBi~17lcvd2JbuN11RSEtgNmTWKYLX9uVS5b3yemPxTyMV6sXMe6RnwyZiUtw__",
            title: 'E-com Web Page Design'
        },
    ]
    return (
        <section className='py-[4rem]' >
            <h2 className='text-[2.5rem] text-center font-medium '>My Project</h2>
            <p className=' text-center font-light text-stone-700 dark:text-stone-200 text-[.9rem] mt-2'>Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus <br /> lectus. Phasellus consequat urna tellus</p>
            <Tabs defaultValue="all" className='mt-[2rem]'>
                <TabsList className=' w-full bg-transparent '>
                    <div className=' overflow-x-auto flex items-center gap-3 theScroll'>
                        {tabs.map((ele, index) => (
                            <TabsTrigger key={index} value={ele} className=' capitalize'>{ele}</TabsTrigger>
                        ))}
                    </div>
                </TabsList>
                {tabs.map((ele, index) => (
                    <TabsContent key={index} value={ele} className=' mt-[2rem]'>
                        <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[2rem]'>
                            {cards.map((ele, index) => (
                                <Card key={index} className='p-5 dark:bg-transparent border-none'>
                                    <CardHeader className=' h-[20rem] overflow-hidden bg-[#FFEBDB] rounded-md text-center relative'>
                                        <img className=' object-contain w-[50%] rounded-md absolute z-10 left-[25%]' src={ele.img} alt={ele.title} />
                                        <img className=' object-contain w-[60%] rounded-md absolute left-[30%] bottom-[20%]' src={ele.img} alt={ele.title} />
                                    </CardHeader>
                                    <CardContent className=' mt-[2rem]'>
                                        <p className=' text-[#FD6F00]'>Web Design</p>
                                    </CardContent>
                                    <CardFooter>
                                        <p>{ele.title}</p>
                                    </CardFooter>
                                </Card>

                            ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>

        </section>
    )
}
