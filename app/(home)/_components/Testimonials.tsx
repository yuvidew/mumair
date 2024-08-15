"use client"
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from '@/hook/useDotButton'
import { cn } from '@/lib/utils'

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export const Testimonials: React.FC = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [ClassNames()])

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

    return (
        <section className='py-[4rem]'>
            <h2 className='text-[2.5rem] text-center font-medium '>Testimonials</h2>
            <p className=' text-center font-light text-stone-700 dark:text-stone-200 text-[.9rem] mt-2'>Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus <br /> lectus. Phasellus consequat urna tellus</p>
            <br />
            <br />
            <br />
            <div className="embla  w-full " >
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container ">
                        {SLIDES.map((index) => (
                            <div className="embla__slide embla__class-names" key={index}>
                                <div className='embla__slide__img flex items-center justify-center '>
                                    <article className=' w-[75%] px-[2rem] rounded-lg h-full bg-[#F8F8F8] flex items-center justify-center  gap-3'>
                                        <div className=' w-[30%] h-full flex items-center'>
                                            <img 
                                                src='https://s3-alpha-sig.figma.com/img/ac6c/6fee/baa649092172e33f9b1e0e4eb8df495d?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dXZZ53vmGB-MU83LfG8sisQg3200USCDDM9hEPhvUWP5on1iY040sNILVeBDhfiL8fQZX926KeaKgaTVlGXMP59QFm5eO2CMy9EBUaZritbRUGma-QeTQNFCPCcakEapa17JDY7hKmkDHpGknR6nV2Kh2W5ueTs96RPIrpCjFuC2c5~fD1C46Agc-YLchrLSj3DqtXw-hCcNhxy0U0YgvtrGpBQQNsaKaCCBywYeDIcN~Y1h2oEUOey6JOGAJTgAqSfTKw7in8XDK~vFd-Hm7qjgyB1y4LHbtxituuxMQuOPm7r4Y5zamlH~fvEXFnPEJHUhL9yIAdNIOZXBrkwYiw__'
                                                alt = "image"
                                                className=' w-[80%] h-[65%] rounded-full object-cover'
                                            />
                                        </div>
                                        <div className='w-[70%]'>
                                            <p className='text-[#424242]'> <span className='text-orange-500 '>"</span> Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum 
                                            convallis dignissim malesuada commodo ultrices. <span className='text-orange-500 '>"</span></p>
                                            <h3 className=' font-bold mt-3 text-[#000000]' >Name</h3>

                                            <h4 className=' text-[.9rem] font-light text-[#424242]'>CEO</h4>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <div className=' flex items-center justify-center'>
                    <div className="embla__controls  flex items-center justify-center ">
                        <div className="embla__dots flex items-center justify-center gap-5 ">
                            {scrollSnaps.map((_, index) => (
                                <DotButton
                                    key={index}
                                    onClick={() => onDotButtonClick(index)}
                                    className={ cn( 'embla__dot rounded-lg' , 
                                        index === selectedIndex ? ' embla__dot--selected bg-[#FD6F00]' : ' bg-[#D9D9D9]'
                                    )}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
        </section>
    )
}
