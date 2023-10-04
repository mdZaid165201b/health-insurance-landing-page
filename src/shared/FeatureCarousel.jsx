import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function FeatureCarousel(props) {
  const { imgFile, title, body } = props;
  return (
      <div className="w-[330px] h-[350px] bg-white shadow-[6px_6px_0px_0px_rgba(71,181,255,1)] rounded-[2px] flex items-center px-8">
        <div className="w-full h-full flex flex-col items-center  gap-y-4 py-10">
          <div className="w-[60px] h-[60px] bg-[#47B5FF82] rounded-full flex items-center p-2 relative">
            <img
              src={imgFile}
              alt="LanguageIcon"
              className="w-full p-2 h-full absolute left-5"
            />
          </div>
          <div className="text-[22px] text-[#0B4C74]  font-bold">
            <h1>{title}</h1>
          </div>
          <div className="w-full text-[#677B88] font-normal text-[14px] text-center font-Jakarta leading-[25px]">
            <p>{body}</p>
          </div>
        </div>
      </div>
  );
}

export default FeatureCarousel;
