import VideoWithText from "@/Components/VideoWithText";
import React, { useRef } from "react";

function HomeTwo() {
  return (
    <div className="relative mt-[30rem]" id="Home">
      <div className=" absolute rounded-r-full  bg-[#2F6DA3] b work  md:w-[250px] h-[140px] top-[0%] left-0"></div>
      <div className="w-full md:max-w-[1920px] md:px-10 mx-auto relative my-20 px-5">
        <div className="md:flex ">
          <div className="flex flex-col justify-center md:text-start items-start  mx-auto text-primary relative">
            <div className="flex flex-col md:ml-[16rem]">
              <div>
                {" "}
                <h1 className="md:text-[84px] uppercase  text-blue md:mt-[2rem] text-[30px] leading-[35px] font-bold  md:leading-[75px]">
                  Welcome to
                </h1>
              </div>
              <div className="md:ml-8">
                {" "}
                <h1 className="text-[#1A1A1A] md:text-[64px] text-[30px] leading-[35px] font-bold  md:leading-[76px] ">
                  ROYAL STAR IMP AND EXP CO. LIMITED
                </h1>
              </div>
            </div>
            <p className="md:text-[36px] text-[18px] md:mt-[8rem] text-secondary font-semibold leading-[35px] md:leading-[69px] my-4 md:text-start items-start justify-center flex mx-auto  w-full">
              ROYAL STAR IMP AND EXP CO LIMITED is a trusted logistics partner
              offering comprehensive import and export solutions. With a
              commitment to excellence and customer satisfaction, we provide a
              wide range of services including sea freight, road freight, air
              freight, and warehousing. Our expertise lies in handling various
              types of cargo, including hazardous materials and special
              equipment. With a dedicated team and a strong global network of
              trusted partners, we ensure seamless transportation and efficient
              customs clearance for our clients. Whether you are shipping goods
              by sea, road, or air, Royal Star Import and Export Co. Ltd. is
              your reliable partner for reliable, tailored, and cost-effective
              logistics solutions
            </p>
          </div>
        </div>
      </div>
      <div className="h-screen flex justify-center items-center">
  <div className="w-full h-full relative">
    <video className="w-full h-full object-fill" src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4" autoPlay loop muted />
    <div className="absolute w-full h-full top-0 left-0"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-5xl">
      <h1>Welcome to Royal Group</h1>
    </div>
  </div>
</div>

    </div>
  );
}

export default HomeTwo;
