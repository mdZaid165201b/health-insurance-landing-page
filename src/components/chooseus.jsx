import React from 'react';
import GlowingCircle from '../assets/ChooseUs Circle.png';
import HeadingLine from '../assets/HeadingLine.png';
import LanguageIcon from '../assets/chooseUsLanguageIcon.png'
import EyeIcon from '../assets/chooseUsEye.png'

function Chooseus() {
    return (
        <section className='w-full border-2 border-green-400 relative top-10 mb-14'>
            {/* Circle */}
            <div className='relative'>
                <div className='w-[200px] absolute -z-50 hidden sm:block'>
                    <img src={GlowingCircle} alt="Glowing circle" />
                </div>
                <div className='w-full flex mt-16 sm:mt-0 justify-center'>
                    <div className='border flex flex-col items-center'>
                        <div className='w-fit flex flex-col items-center'>
                            <h1 className='text-[#06283D] tracking-wide text-[30px] font-bold sm:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[64px]'>Why Choose Us?</h1>
                            <div className='w-full flex justify-end pr-2 sm:pr-10 -mt-0 sm:-mt-4'>
                                <img src={HeadingLine} alt="Heading line" className='w-[150px] lg:w-[100px] xl:w-[200px] 2xl:w-[300px]' />
                            </div>

                        </div>
                        <div className='w-full text-center flex justify-center'>
                            <div className='lg:w-[400px] xl:w-[350px] 2xl:w-[400px] px-2 sm:px-0'>
                                <h1 className='font-Jakarta text-[15px] sm:text-[18px] text-[#06283D99]'>Why you should choose us in compare to the others platform now a days.</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' w-full flex flex-col gap-y-14 sm:gap-y-0 sm:flex-row justify-center items-center sm:items-baseline  gap-x-0 sm:gap-x-20 px-5 sm:px-[100px] md:px-[130px] lg:px-[150px] xl:px-[180px] 2xl:px-[200px] my-20 z-50'>
                    <div className='w-full sm:w-[300px] h-[300px] bg-white rounded-[20px] shadow-[40px_20px_80px_0px_rgba(101,115,137,0.10)] border border-gray-400/10 flex items-center px-8'>
                        <div className='flex flex-col  gap-y-4 h-full w-full py-10'>
                            <div className='w-[50px] h-[50px] bg-[#E7EFFC] rounded-[10px] flex items-center p-2'>
                                <img src={LanguageIcon} alt="LanguageIcon" className='w-full h-full'/>
                            </div>
                            <div className='text-[20px] text-[#06283D] font-Jakarta font-semibold'>
                                <h1>Simplified</h1>
                                <h1>Language</h1>
                            </div>
                            <div className='w-full text-[#06283D99] text-[14px] font-Jakarta leading-[28px]'>
                                <p>No More Confusing Terms - We Explain Health Insurance in Plain English.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full sm:w-[300px] h-[300px] bg-white rounded-[20px] shadow-[40px_20px_80px_0px_rgba(101,115,137,0.10)] border border-gray-400/10 flex items-center px-8'>
                        <div className='flex flex-col  gap-y-4 h-full w-full py-10'>
                            <div className='w-[50px] h-[50px] bg-[#E7EFFC] rounded-[10px] flex items-center p-2'>
                                <img src={EyeIcon} alt="LanguageIcon" className='w-full h-full'/>
                            </div>
                            <div className='text-[20px] text-[#06283D] font-Jakarta font-semibold'>
                                <h1>User-Friendly</h1>
                                <h1>Interface</h1>
                            </div>
                            <div className='w-full text-[#06283D99] text-[14px] font-Jakarta leading-[28px]'>
                                <p>Easy-to-Use Tools for Comparing Plans and Understanding Benefits.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full sm:w-[300px] h-[300px] bg-white rounded-[20px] shadow-[40px_20px_80px_0px_rgba(101,115,137,0.10)] border border-gray-400/10 flex items-center px-8'>
                        <div className='flex flex-col  gap-y-4 h-full w-full py-10'>
                            <div className='w-[50px] h-[50px] bg-[#E7EFFC] rounded-[10px] flex items-center p-2'>
                                <img src={LanguageIcon} alt="LanguageIcon" className='w-full h-full'/>
                            </div>
                            <div className='text-[20px] text-[#06283D] font-Jakarta font-semibold'>
                                <h1>Empowering You</h1>
                                {/*<h1>You</h1>*/}
                            </div>
                            <div className='w-full text-[#06283D99] text-[14px] font-Jakarta leading-[28px]'>
                                <p>No More Confusing Terms - We Explain Health Insurance in Plain English.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Chooseus;