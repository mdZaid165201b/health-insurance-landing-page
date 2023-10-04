import React, { useRef } from 'react';
import HeadingLine from "../assets/HeadingLine.png";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import LanguageIcon from "../assets/chooseUsLanguageIcon.png";
import User1 from '../assets/user1Img.png';
import RatingImg from '../assets/ratingImg.png';
// import SwiperCore, {  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
// import 'swiper/swiper-bundle.min.css';

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// SwiperCore.use([Navigation]);
function UserReviewsComponent() {
    const leftSwiperRef = useRef(null);
    const rightSwiperRef = useRef(null);

    const handleNextClick = () => {
        console.log('handleNextClick ::');
        console.log('leftSwiperRef -->', leftSwiperRef.current);
        if (leftSwiperRef.current && rightSwiperRef.current) {
            leftSwiperRef.current.slideNext();
            rightSwiperRef.current.slideNext();
        }
    };

    return (
        <section className='w-full flex flex-col border border-red-900'>
            <div className='flex flex-col  w-full h-full border border-green-500'>
                <div className='px-32'>
                    <div className='w-full sm:w-[500px] border border-teal-400 '>
                        <h1 className='text-[#06283D] tracking-tight text-[30px] font-bold sm:text-[30px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px]'>See What Our Users <span>
                        <div className='w-full flex justify-end px-10 border border-green-500 -mb-6'>
                        <img src={HeadingLine} alt="Heading line" className='flex justify-end w-[200px] h-[14px] lg:w-[100px] xl:w-[200px] 2xl:w-[300px] -mt-3' />
                    </div>
                    </span>Are Saying</h1>
                    </div>
                    <div className='w-full border border-yellow-300 flex justify-end gap-x-5 '>
                        <button className='w-[72px] h-[72px] rounded-full bg-[#1D6996] hover:bg-[#1a5e87] duration-150 flex items-center justify-center'>
                            <MdKeyboardArrowLeft  size={50} className='text-white'/>
                        </button>
                        <button className='w-[72px] h-[72px] rounded-full bg-[#47A5DC] hover:bg-[#3f94c6] duration-150 flex items-center justify-center' onClick={handleNextClick}>
                            <MdKeyboardArrowRight size={50} className='text-white' />
                        </button>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='w-full flex gap-x-10 my-5 relative -left-10'>
                        {/*{*/}
                        {/*    Array.from({ length: 10 }).map((current, index) => {*/}
                        {/*        return (*/}
                        {/*            */}
                        {/*        )*/}
                        {/*    })*/}
                        {/*}*/}
                        <Swiper spaceBetween={100}
                                slidesPerView={4}
                                loop={true}
                                rewind={true}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                navigation={true}
                                className='w-full  flex gap-x-10 my-14 relative -left-1'
                                ref={leftSwiperRef}
                        >
                            {
                                Array.from({length: 10}).map((current, index) => (
                                    <SwiperSlide className='w-full sm:min-w-[398px] min-h-[292px]'>
                                        <div className=' w-full sm:min-w-[398px] min-h-[292px] bg-white rounded-[20px] shadow-[40px_20px_80px_0px_rgba(101,115,137,0.10)] border border-gray-400/10 flex items-start px-8'>
                                            <div className='flex flex-col  gap-y-4 h-full w-full py-10'>
                                                <div className='flex gap-x-2'>
                                                    <div className='w-[64px] h-[64px] rounded-full '>
                                                        <img src={User1} alt="User" />
                                                    </div>
                                                    <div className='flex flex-col justify-start border'>
                                                        <h1 className='text-[18px] font-bold text-[#06283D] font-Jakarta'>Jane Cooper</h1>
                                                        <h1 className='text-[#06283D99] -mt-1 text-[14px] font-Jakarta'>Marketing Coordinator</h1>
                                                    </div>
                                                </div>
                                                <div className='w-[160px]'>
                                                    <img src={RatingImg} alt="rating" />
                                                </div>
                                                <div className='w-full text-[#06283D] text-[16px] font-Jakarta leading-[28px]'>
                                                    <p>“I value simplicity and this platform made health insurance a breeze.”</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    <div className='w-full flex gap-x-10 relative -left-10'>
                        {/*{*/}
                        {/*    Array.from({ length: 10 }).map((current, index) => {*/}
                        {/*        return (*/}
                        {/*            */}
                        {/*        )*/}
                        {/*    })*/}
                        {/*}*/}
                        <Swiper spaceBetween={100}
                                slidesPerView={4}
                                navigation={true}
                                loop={true}
                                rewind={true}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                className='w-full  bg-white flex gap-x-10 mb-5 relative -left-28'
                                ref={rightSwiperRef}
                        >
                            {
                                Array.from({length: 10}).map((current, index) => (
                                    <SwiperSlide className='w-full sm:min-w-[398px] min-h-[292px]'>
                                        <div className=' w-full sm:min-w-[398px] min-h-[292px] bg-white rounded-[20px] shadow-[40px_20px_80px_0px_rgba(101,115,137,0.10)] border border-gray-400/10 flex items-start px-8'>
                                            <div className='flex flex-col  gap-y-4 h-full w-full py-10'>
                                                <div className='flex gap-x-2'>
                                                    <div className='w-[64px] h-[64px] rounded-full '>
                                                        <img src={User1} alt="User" />
                                                    </div>
                                                    <div className='flex flex-col justify-start border'>
                                                        <h1 className='text-[18px] font-bold text-[#06283D] font-Jakarta'>Jane Cooper</h1>
                                                        <h1 className='text-[#06283D99] -mt-1 text-[14px] font-Jakarta'>Marketing Coordinator</h1>
                                                    </div>
                                                </div>
                                                <div className='w-[160px]'>
                                                    <img src={RatingImg} alt="rating" />
                                                </div>
                                                <div className='w-full text-[#06283D] text-[16px] font-Jakarta leading-[28px]'>
                                                    <p>“I value simplicity and this platform made health insurance a breeze.”</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>


        </section>
    );
}

export default UserReviewsComponent;