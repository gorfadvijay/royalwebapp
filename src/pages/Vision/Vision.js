import VideoWithText from "@/Components/VideoWithText";
import React, { useRef } from "react";

function Vision() {
  return (
    <div className="relative" id="Mission">
      <div className="w-full bg-[#2F6DA3] flex justify-center items-center mx-auto text-center my-5 md:my-[10rem]">
        <p className="uppercase md:text-[55px] text-[30px] font-semibold text-white py-10">
          Commitment and passion
        </p>
      </div>
      {/* <div className="md:block hidden absolute rounded-r-full  bg-[#2F6DA3] b work  md:w-[750px] max-h-[240px] top-[20%] left-0">
        <div className="flex justify-end mx-auto py-10 items-center px-5">
          <img
            src="./assets/images/vision .png  "
            className="h-[4rem] w-[4rem] "
          />
        </div>
      </div> */}
        <div class="w-full  relative ">
        <div class="flex  flex-wrap lg:flex-row   relative  md:mt-[8rem] md:gap-14">
          <div className="md:flex hidden   justify-center items-center rounded-r-full  bg-[#2F6DA3]  md:w-[390px] h-[140px] w-full sm:w-full ">
          <div className="md:flex hidden justify-end mx-auto py-10 items-end px-5">
          <img
            src="./assets/images/vision .png  "
            className="h-[4rem] w-[4rem] "
          />
        </div>
          </div>
          <div className="flex flex-col  uppercase justify-center md:text-start md:mx-0 mx-auto items-center  text-primary relative">
            <div className="flex flex-col md:justify-start justify-center md:px-0 px-8">
              <div>
                {" "}
                <h1 className="md:text-[84px] text-blue  text-[30px] leading-[35px] font-bold  md:leading-[75px]">
                  OUR
                </h1>
              </div>
              <div className="">
                {" "}
                <h1 className="text-[#1A1A1A] md:text-[84px] text-[30px] leading-[35px] font-bold  md:leading-[75px] ">
                 VISION
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:max-w-[1920px] md:px-10 mx-auto relative md:my-20 px-5">
        <div className="md:flex ">
          <div className="flex flex-col justify-center md:text-center items-center  mx-auto text-primary relative">
            {/* <div className="flex flex-col">
              <div>
                {" "}
                <h1 className="md:text-[84px] text-blue md:mt-[2rem] text-[30px] leading-[35px] font-bold  md:leading-[75px]">
                  OUR
                </h1>
              </div>
              <div className="">
                {" "}
                <h1 className="text-[#1A1A1A] md:text-[84px] text-[30px] leading-[35px] font-bold  md:leading-[75px] ">
                  VISION
                </h1>
              </div>
            </div> */}
            <p className="md:text-[36px] text-[18px] md:mt-[8rem] text-secondary font-semibold leading-[35px] md:leading-[69px] my-4 md:text-start items-start justify-center flex mx-auto  w-full">
              With a love-inspired approach, our vision is to be recognized as
              the leading and most valuable company in our industry within a
              remarkably short span of time. By inspiring admiration and loyalty
              among our customers, we aim to deliver unparalleled value through
              our top-notch products and services.
            </p>
          </div>
        </div>
      </div>
      <VideoWithText />
    </div>
  );
}

export default Vision;
