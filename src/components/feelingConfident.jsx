import React from 'react';
import GlowingCircle from '../assets/ChooseUs Circle.png'
import ConfidentRightImage from '../assets/ConfidentRightImage.png';
import HeadingLine from "../assets/HeadingLine.png";

function FeelingConfident() {
    return (
        <section className='w-full h-full sm:h-[500px]  border border-blue-600 bg-[#47A5DC] relative'>
            <div className='relative'>
                <div className='w-[100px] absolute z-50 hidden sm:block'>
                    <img src={GlowingCircle} alt="Circle" />
                </div>
            </div>
            <div className='w-full flex flex-col sm:flex-row h-full border border-red-500'>
            {/* left side */}
                <div className='w-full sm:w-[50%] flex items-center h-full border border-rose-700  sm:p-8 md:p-10 lg:p-12 xl:p-16'>
                    <div className='flex flex-col  w-full xl:w-[500px] border border-purple-700 text-white'>
                        <h1 className='font-bold text-[40px] sm:text-[60px]'>
                            Start Feeling Confident .
                        </h1>
                        <img src={HeadingLine} alt="Heading line" className='w-[200px] h-[14px] lg:w-[100px] xl:w-[220px] 2xl:w-[300px] mb-5' />
                        <p className='text-[16px] font-Jakarta'>Learn about how we got started and explore all our plans and insights</p>
                        <div className='w-full flex justify-center sm:justify-start gap-x-5 my-5'>
                            <button className='rounded-[8px] bg-white  py-3 sm:py-4 px-4 text-[11px] sm:text-[14px] sm:px-14 font-Jakarta font-semibold text-black hover:bg-[#6BB7E2] duration-150 drop-shadow-2xl shadow-black/20 shadow-2xl'>Explore Plans</button>
                            <button className='rounded-[8px] bg-[#1D6996] py-3 sm:py-4 px-8 text-[11px] sm:text-[14px] sm:px-14 font-Jakarta  text-white hover:bg-[#1a5e87] duration-150 drop-shadow-2xl shadow-black/20 shadow-2xl'>Learn more about us</button>
                        </div>
                    </div>
                </div>
                {/* right side */}
                <div className='w-full sm:w-[50%] h-full border border-green-950 pt-10'>
                    <div className='h-full'>
                        <img src={ConfidentRightImage} alt="Confident Right" className='h-full' />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeelingConfident;