import { Slider } from '@/components/ui/slider'
import React from 'react'

export const About:React.FC = () => {
    const skills = [
        {
            text : 'UX',
            rating : 80
        },
        {
            text : 'Website Design',
            rating : 75
        },
        {
            text : 'App Design',
            rating : 90
        },
        {
            text : 'Graphic Design',
            rating : 80
        }
    ] 
    return (
        <section className=' flex items-center justify-between lg:my-[5rem] my-[9rem]'>
            <div className='w-[50%] lg:block hidden'>
                <img 
                    src={"https://s3-alpha-sig.figma.com/img/6dea/b4e8/80f48cd1d9fa0014c092574df5520d15?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=URFPwLBHbJluupLq8wuqCg~57ByOUh-xZz5SsKxXm~JI2mYJVNfLf~Z4FNUp-p9vsLH6sDVhDejBpfkInIgnAf1NcRbcVuvaUzzRQVWiOI5draU2a034t97sCCpbORWKTTQRei9EdZHDUOI28D5ud8vPovoZcb2Ax19-AthMHd73SIWQVm95WkJCMHO~Cvxe8LIz1G7aMbvqaHwH2HcDRW~HiRMBgY89YEOOpmnpy35-yFszJkZIAUO9bV-13osDI~KgQRRc4-HcTgfo6jFwhb86GePnLhVVp-kL~vaBXjCICmLTypFoYyzQjTYh4JYW6VRHR4C3H9rHY4mm-Ry-2w__"} 
                    className=' w-[25rem] h-[25rem] object-contain rounded-full' 
                    alt='hero' 
                />
            </div>
            <div className=' lg:w-[50%] w-full h-full'>
                <h2 className=' text-[#1e1e1e] dark:text-stone-100 text-[2.5rem] font-medium'>About Me</h2>
                <p className=' font-light text-stone-700 dark:text-stone-200 text-[.9rem] mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam itaque debitis dolorum minima non dignissimos quia quibusdam officia cupiditate, officiis doloremque? Et delectus accusantium praesentium, odit natus error exercitationem quidem.</p>
                {skills.map((ele , index) => (
                    <div key={index} className=' mt-4'>
                        <h2 className='mb-2'>{ele.text}</h2>
                        <Slider  defaultValue={[ele.rating]} max = {100} />
                    </div>
                ))}
            </div>
        </section>
    )
}
