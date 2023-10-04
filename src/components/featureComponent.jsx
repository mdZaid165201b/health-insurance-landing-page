import React from 'react';
import FeatureBG from '../assets/FeatureBG.png';
import PlanCamparsionIcon from '../assets/PlanCamparisonToolIcon.png';
import JargonFreeIcon from '../assets/JaragonFreeIcon.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
function FeatureComponent() {
    return (
        <section className='w-full z-50 h-fit sm:h-[585px] mb-10 relative '>
            {/*<div className='w-full h-full relative -z-50'>*/}
                <img src={FeatureBG} alt="FeatureBG" className='absolute w-full h-full object-cover -z-40'/>
            {/*</div>*/}
            <div className='z-50 p-5 sm:p-10 h-full w-full'>
                <div className='w-full h-full flex sm:flex-row flex-col font-bold text-2xl'>
                        <div className='w-full sm:w-[40%] h-full flex justify-center px-0 py-5 sm:p-10'>
                            <div className='sm:w-[350px] flex flex-col gap-y-5 w-full justify-center'>
                                <div className='text-4xl text-white  font-Jakarta sm:font-bold'>
                                    <h1>Our Features Specially For You</h1>
                                </div>
                                <div className='text-[15px] sm:text-[17px] font-normal tracking-wide font-Jakarta text-white capitalize'>
                                    <h1>Our top features which makes us unique from all platforms.</h1>
                                </div>
                                <div>
                                    <button className=' w bg-[#1D6996] sm:bg-[#FDD619] hover:sm:bg-[#e3c016] hover:bg-[#1a5e87] text-white [word-spacing:3px] sm:text-black duration-150 w-[178px] h-[66px] text-[17px] font-semibold font-Jakarta rounded-[8px] shadow-2xl shadow-black/40'>Get Started</button>
                                </div>
                            </div>
                        </div>
                        <div className='w-full sm:w-[60%] h-full sm:flex flex-col sm:flex-row justify-between  items-center p-10 hidden '>
                            <Swiper
                                spaceBetween={-200}
                                slidesPerView={2}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                className='w-full h-full sm:flex  justify-center items-center hidden'
                            >
                                <SwiperSlide className='w-full h-full sm:w-[330px] sm:h-[350px]'>
                                    <div className='w-full h-full sm:w-[330px] sm:h-[350px] bg-white shadow-[6px_6px_0px_0px_rgba(71,181,255,1)] rounded-[2px] flex items-center px-8'>
                                        <div className='w-full h-full flex flex-col items-center  gap-y-4 py-10'>
                                            <div className='w-[60px] h-[60px] bg-[#47B5FF82] rounded-full flex items-center p-2 relative'>
                                                <img src={PlanCamparsionIcon} alt="LanguageIcon" className='w-full p-2 h-full absolute left-5'/>
                                            </div>
                                            <div className='text-[22px] text-[#0B4C74]  font-bold'>
                                                <h1>Plan Comparison Tool</h1>
                                            </div>
                                            <div className='w-full text-[#677B88] font-normal text-[14px] text-center font-Jakarta leading-[25px]'>
                                                <p>Easily compare insurance plans side by side to see what's covered and what's not.</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='w-[330px] h-[350px]'>
                                    <div className='w-[330px] h-[350px] bg-white shadow-[6px_6px_0px_0px_rgba(71,181,255,1)] rounded-[2px] flex items-center px-8'>
                                        <div className='w-full h-full flex flex-col items-center  gap-y-4 py-10'>
                                            <div className='w-[60px] h-[60px] bg-[#47B5FF82] rounded-full flex items-center p-2 relative'>
                                                <img src={JargonFreeIcon} alt="LanguageIcon" className='w-full p-2 h-full absolute top-2 left-5'/>
                                            </div>
                                            <div className='text-[22px] text-[#0B4C74]  font-bold'>
                                                <h1>Jargon-Free Explanations</h1>
                                            </div>
                                            <div className='w-full text-[#677B88] font-normal text-[14px] text-center font-Jakarta leading-[25px]'>
                                                <p>We break down insurance terms and jargon so you can understand your coverage.</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    <div className='w-full sm:w-[60%] h-full flex flex-col gap-y-5 justify-between  items-center p-5 sm:hidden '>
                        <div className='w-full h-full sm:w-[330px] sm:h-[350px] bg-white shadow-[6px_6px_0px_0px_rgba(71,181,255,1)] rounded-[2px] flex items-center px-8'>
                            <div className='w-full h-full flex flex-col items-center  gap-y-4 py-10'>
                                <div className='w-[60px] h-[60px] bg-[#47B5FF82] rounded-full flex items-center p-2 relative'>
                                    <img src={PlanCamparsionIcon} alt="LanguageIcon" className='w-full p-2 h-full absolute left-5'/>
                                </div>
                                <div className='text-[22px] text-[#0B4C74]  font-bold'>
                                    <h1>Plan Comparison Tool</h1>
                                </div>
                                <div className='w-full text-[#677B88] font-normal text-[14px] text-center font-Jakarta leading-[25px]'>
                                    <p>Easily compare insurance plans side by side to see what's covered and what's not.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-full sm:w-[330px] sm:h-[350px] bg-white shadow-[6px_6px_0px_0px_rgba(71,181,255,1)] rounded-[2px] flex items-center px-8'>
                            <div className='w-full h-full flex flex-col items-center  gap-y-4 py-10'>
                                <div className='w-[60px] h-[60px] bg-[#47B5FF82] rounded-full flex items-center p-2 relative'>
                                    <img src={PlanCamparsionIcon} alt="LanguageIcon" className='w-full p-2 h-full absolute left-5'/>
                                </div>
                                <div className='text-[22px] text-[#0B4C74]  font-bold'>
                                    <h1>Plan Comparison Tool</h1>
                                </div>
                                <div className='w-full text-[#677B88] font-normal text-[14px] text-center font-Jakarta leading-[25px]'>
                                    <p>Easily compare insurance plans side by side to see what's covered and what's not.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeatureComponent;