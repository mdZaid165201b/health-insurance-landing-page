import React from 'react';
import StartBG from '../assets/HeaderStar.png';
import HeadingLine from '../assets/HeadingLine.png';
import CompareBoyImage from '../assets/ComparePlanImage.png'
import HowItWorkCircle from '../assets/HowItWorklCircle.png';
import UnderstandBenefitBG from '../assets/UnderstandBenefitsImage.png';
import UnderstandBenefitComponent from "./understandBenefitComponent";
import InformedChoice from "./informedChoice";

function HowItWorkComponent() {
    return (
        <section className='w-full relative  mb-0 sm:mb-14 bg-[#F8F8F8]'>
            {/* Circle */}
            <div className='relative h-full'>
                <div className='w-[200px] absolute z-50 hidden sm:block'>
                    <img src={StartBG} alt="Start Background" className='opacity-30' />
                </div>
                <div className='w-full flex mt-0 sm:mt-16 justify-center'>
                    <div className='flex flex-col items-center'>
                        <div className='w-fit flex flex-col items-center'>
                            <h1 className='text-[#06283D] tracking-wide text-[30px] font-bold sm:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[64px]'>How it Works?</h1>
                            <div className='w-full flex justify-end pr-2 sm:pr-0 -mt-0 sm:-mt-4'>
                                <img src={HeadingLine} alt="Heading line" className='w-[150px] lg:w-[100px] xl:w-[200px] 2xl:w-[300px]' />
                            </div>

                        </div>
                    </div>
                </div>
                {/* content area */}
                <div className=' h-full w-[100%] px-5 sm:px-20 border border-red-500'>
                {/* section one */}
                    <div className='w-full flex flex-col sm:flex-row justify-center'>
                        {/* left side */}
                        <div className='w-full h-full sm:w-[45%] py-0 sm:py-5 px-0 sm:px-20'>
                            <img src={CompareBoyImage} alt="Left side Boy image" className='h-full w-full object-cover'/>
                        </div>
                        {/* right side */}
                        <div className='w-full sm:w-[45%] py-5 sm:py-10 px-0 sm:px-20'>
                            <div className='relative flex flex-col justify-center items-center w-full h-full'>
                                <div className='flex flex-col w-full px-0 sm:px-5'>
                                    <div className='w-full'>
                                        <h1 className='text-[#06283D] tracking-wide text-[30px] font-bold sm:text-[30px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px]'>Compare Plans*</h1>
                                        <div className='w-full'>
                                            <img src={HeadingLine} alt="Heading line" className='w-[150px] lg:w-[100px] xl:w-[200px] 2xl:w-[400px]' />
                                        </div>
                                    </div>
                                    <div className='w-full sm:w-[400px] text-[15px] sm:text-[18px] font-Jakarta text-[#06283D99] mt-3'>
                                        <h1>Compare and Customize Your Ideal Insurance Plans Hassle-Free.</h1>
                                    </div>
                                    <div className='w-full flex gap-x-10 my-5 sm:my-10'>
                                        <button className='rounded-[8px] bg-[#47A5DC] py-3 sm:py-3 px-8 sm:px-14 text-[14px] font-Jakarta font-semibold text-white hover:bg-[#6BB7E2] duration-150 drop-shadow-2xl shadow-black/20 shadow-2xl'>See Plans</button>
                                        <button className='rounded-[8px] bg-[#1D6996] py-3 sm:py-3 px-8 sm:px-14 text-[14px] font-Jakarta font-semibold text-white hover:bg-[#1a5e87] duration-150 drop-shadow-2xl shadow-black/20 shadow-2xl'>Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/*  Understand area  */}
                <UnderstandBenefitComponent />
            {/*    Make Informed Choices area*/}
                <InformedChoice />
            </div>
        </section>
    );
}

export default HowItWorkComponent;