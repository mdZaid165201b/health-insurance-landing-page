import React from 'react';
import GlowingCircle from '../assets/ChooseUs Circle.png'
import ConfidentRightImage from '../assets/ConfidentRightImage.png';

function FeelingConfident() {
    return (
        <section className='w-full h-[400px] border border-blue-600 bg-[#47A5DC] relative'>
            <div className='relative'>
                <div className='w-[100px] absolute z-50 hidden sm:block'>
                    <img src={GlowingCircle} alt="Circle" />
                </div>
            </div>
            <div className='w-full flex h-full border border-red-500 p-10'>
            {/* left side */}
                <div className='w-[50%] border border-rose-700 px-10 py-5'>
                    <div className='flex flex-col w-[500px] border border-purple-700 text-white'>
                        <h1 className='font-bold text-[60px]'>
                            Start Feeling Confident .
                        </h1>
                        <p className='text-[16px] font-Jakarta'>Learn about how we got started and explore all our plans and insights</p>
                        <div className='w-full flex gap-x-5 my-5'>
                            <button className='rounded-[8px] bg-white  py-3 sm:py-4 px-8 text-[14px] sm:px-14 font-Jakarta font-semibold text-black hover:bg-[#6BB7E2] duration-150 drop-shadow-2xl shadow-black/20 shadow-2xl'>Explore Plans</button>
                            <button className='rounded-[8px] bg-[#1D6996] py-3 sm:py-4 px-8 text-[14px] sm:px-14 font-Jakarta  text-white hover:bg-[#1a5e87] duration-150 drop-shadow-2xl shadow-black/20 shadow-2xl'>Learn more about us</button>
                        </div>
                    </div>
                </div>
                {/* right side */}
                <div className='w-[50%] h-full border border-green-950'>
                    <div className='h-full'>
                        <img src={ConfidentRightImage} alt="Confident Right" className='h-full' />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeelingConfident;