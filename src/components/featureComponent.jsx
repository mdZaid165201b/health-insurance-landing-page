import React from "react";
import FeatureBG from "../assets/FeatureBG.png";
import PlanCamparsionIcon from "../assets/PlanCamparisonToolIcon.png";
import JargonFreeIcon from "../assets/JaragonFreeIcon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import FeatureCarousel from "../shared/FeatureCarousel";
function FeatureComponent() {
  return (
    <section className="w-full z-50 h-[600px] mb-10 relative ">
      {/*<div className='w-full h-full relative -z-50'>*/}
      <img
        src={FeatureBG}
        alt="FeatureBG"
        className="absolute w-full h-full object-cover -z-40"
      />
      {/*</div>*/}
      <div className="z-50 p-10 h-full">
        <div className="w-full h-full flex font-bold text-2xl">
          <div className="w-[40%] h-full flex justify-center p-10">
            <div className="w-[350px] flex flex-col gap-y-5 justify-center">
              <div className="text-4xl text-white ">
                <h1>Our Features Specially For You</h1>
              </div>
              <div className="text-[17px] font-normal tracking-wide font-Jakarta text-white capitalize">
                <h1>
                  Our top features which makes us unique from all platforms.
                </h1>
              </div>
              <div>
                <button className="bg-[#FDD619] hover:bg-[#e3c016] duration-150 w-[178px] h-[66px] text-[17px] font-Jakarta rounded-[8px] shadow-2xl shadow-black/40">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="w-[60%] h-full flex  sm:gap-x-20 items-center p-10">
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <FeatureCarousel
                  imgFile={PlanCamparsionIcon}
                  title="Plan Comparison Tool"
                  body="Easily compare insurance plans side by side to see what's covered and what's not."
                />
              </SwiperSlide>
              <SwiperSlide>
                <FeatureCarousel
                  imgFile={JargonFreeIcon}
                  title="Jargon Free"
                  body="We make insurance simple and easy to understand. No jargon, no hidden fees, no surprises."
                />
              </SwiperSlide>

              <SwiperSlide>
                <FeatureCarousel
                  imgFile={JargonFreeIcon}
                  title="Jargon Free"
                  body="We make insurance simple and easy to understand. No jargon, no hidden fees, no surprises."
                />
              </SwiperSlide>

              <SwiperSlide>
                <FeatureCarousel
                  imgFile={JargonFreeIcon}
                  title="Jargon Free"
                  body="We make insurance simple and easy to understand. No jargon, no hidden fees, no surprises."
                />
              </SwiperSlide>
            </Swiper>
            {/*<div className='w-[330px] h-[350px] bg-white shadow-[6px_6px_0px_0px_rgba(71,181,255,1)] rounded-[2px] flex items-center px-8'>*/}
            {/*    <div className='w-full h-full flex flex-col items-center  gap-y-4 py-10'>*/}
            {/*        <div className='w-[60px] h-[60px] bg-[#47B5FF82] rounded-full flex items-center p-2 relative'>*/}
            {/*            <img src={PlanCamparsionIcon} alt="LanguageIcon" className='w-full p-2 h-full absolute left-5'/>*/}
            {/*        </div>*/}
            {/*        <div className='text-[22px] text-[#0B4C74]  font-bold'>*/}
            {/*            <h1>Plan Comparison Tool</h1>*/}
            {/*        </div>*/}
            {/*        <div className='w-full text-[#677B88] font-normal text-[14px] text-center font-Jakarta leading-[25px]'>*/}
            {/*            <p>Easily compare insurance plans side by side to see what's covered and what's not.</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className='w-[330px] h-[350px] bg-white shadow-[6px_6px_0px_0px_rgba(71,181,255,1)] rounded-[2px] flex items-center px-8'>*/}
            {/*    <div className='w-full h-full flex flex-col items-center  gap-y-4 py-10'>*/}
            {/*        <div className='w-[60px] h-[60px] bg-[#47B5FF82] rounded-full flex items-center p-2 relative'>*/}
            {/*            <img src={JargonFreeIcon} alt="LanguageIcon" className='w-full p-2 h-full absolute top-2 left-5'/>*/}
            {/*        </div>*/}
            {/*        <div className='text-[22px] text-[#0B4C74]  font-bold'>*/}
            {/*            <h1>Jargon-Free Explanations</h1>*/}
            {/*        </div>*/}
            {/*        <div className='w-full text-[#677B88] font-normal text-[14px] text-center font-Jakarta leading-[25px]'>*/}
            {/*            <p>We break down insurance terms and jargon so you can understand your coverage.</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureComponent;
