import React from 'react';
import CompareBoyImage from "../assets/ComparePlanImage.png";
import HeadingLine from "../assets/DarkHeadingLine.png";

function ComparePlans() {
    return (
        <div className='h-full w-[100%] flex flex-col sm:flex-row px-5 sm:px-20'>
            {/* left side */}
            <div className='w-full h-full sm:w-[45%] py-0 sm:py-5 px-0 sm:px-20'>
                <img src={CompareBoyImage} alt="Left side Boy image" className='h-full w-full object-cover'/>
            </div>
            {/* right side */}
            <div className='w-full sm:w-[45%] py-5 sm:py-10 px-0 sm:px-20'>
                <div className='relative flex flex-col justify-center items-center w-full h-full'>
                    <div className='flex flex-col w-full px-0'>
                        <div className='w-full '>
                            <h1 className='text-[#06283D] tracking-wide text-[30px] font-extrabold sm:text-[30px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px]'>Compare Plans*</h1>
                            <div className='w-full'>
                                <img src={HeadingLine} alt="Heading line" className='w-[200px] h-[14px] lg:w-[100px] xl:w-[200px] 2xl:w-[400px]' />
                            </div>
                        </div>
                        <div className='w-full sm:w-[400px] text-[15px] sm:text-[18px] font-Jakarta text-[#06283D99] mt-3'>
                            <h1>Compare and Customize Your Ideal Insurance Plans Hassle-Free.</h1>
                        </div>
                        <div className='w-full flex gap-x-10 my-5 sm:my-10'>
                            <button className='w-[221px] h-[46px] py-4 sm:py-7 flex justify-center items-center rounded-[8px] bg-[#47A5DC] text-[14px] font-Jakarta font-semibold text-white hover:bg-[#6BB7E2] duration-150 drop-shadow-2xl shadow-black/20 shadow-2xl'>See Plans</button>
                            <button className='w-[221px] h-[46px] py-4 sm:py-7 flex justify-center items-center rounded-[8px] bg-[#1D6996]  text-[14px] font-Jakarta font-semibold text-white hover:bg-[#1a5e87] duration-150 drop-shadow-2xl shadow-black/20 shadow-2xl'>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComparePlans;