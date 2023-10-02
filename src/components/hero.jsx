import React from 'react';
import Header from "./header";
import HeroPattern from '../assets/HeroPattren.png';
import Fire from '../assets/fire.png';
import HeadingLine from '../assets/HeadingLine.png';
import HeroRightSideImage from '../assets/HeroRightImage.png';

function Hero() {
    return (
        <section className='h-full w-full relative'>
            <div className='w-full h-full absolute'>
                <div className='w-[100%] h-full flex flex-col sm:flex-row  sm:px-14 md:px-16 lg:px-20px xl:px-24 2xl:px-28'>
                {/* left side */}
                    <div className='w-full sm:w-[50%] h-full flex flex-col py-4  sm:py-10 '>
                        <div className='w-full flex justify-center sm:justify-start'>
                            <div className='bg-[#1363DF1A] flex gap-x-2 font-Jakarta font-semibold text-[#185A81] py-2 px-3 w-[350px] rounded-full'>
                                <img src={Fire} alt="fire" />
                                <p>#1 insurance Platform With 2M+ Users</p>
                            </div>
                        </div>
                        <div className='w-full px-3 sm:px-0 text-[#06283D] capitalize font-Jakarta text-[30px] sm:text-[30px] md:text-[30px] lg:text-[45px] xl:text-[50px] 2xl:text-[70px]'>
                            <h1 className='font-bold tracking-wide'>welcome to zemta <br />
                                <span className='flex flex-col my-0 sm:-my-5  gap-y-0 sm:-gap-y-3'>
                                    <h1>your Health Insurance</h1>
                                    <div className='w-full flex justify-end pr-7 sm:px-44 md:-mt-2 xl:-mt-4'><img src={HeadingLine} alt="Heading line" className='w-[150px] sm:w-[400px] border' /></div>
                                </span>
                                made simple!”</h1>
                        </div>
                        <div className='font-Jakarta text-[#06283D99] w-full px-3 sm:pr-28 my-2'>
                            <h1 className='text-[15px] sm:text-[20px]'>
                                Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein Layout ansieht. Der Punkt, Lorem Ipsum zu nutzen, ist, dass es mehr oder weniger die normale
                            </h1>
                        </div>
                        <div className=''>
                            <button className='hidden sm:block rounded-[8px] bg-[#47A5DC] py-3 px-7 font-Jakarta text-white hover:bg-[#6BB7E2] duration-150 drop-shadow-2xl shadow-black/40 shadow-2xl hover:shadow-black/50'>Get Started - It's Free!</button>
                        </div>
                    </div>
                    <div className='w-full sm:w-[45%] h-[200px] sm:h-full flex items-center'>
                        <img src={HeroRightSideImage} alt="Right side" className='w-full object-cover bg-clip-content' />
                    </div>
                </div>
                <div className='relative sm:absolute bottom-0 h-[70px] sm:h-fit z-50 w-full'>
                    <img src={HeroPattern} alt="Hero bottom pattern" className='h-full w-full' />
                </div>
            </div>
        </section>
    );
}

export default Hero;