import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
function Director() {


  return (
    <div className="relative md:mt-[8rem] flex flex-col" id="Team">
      {/* <div className=" rounded-r-full  bg-[#2F6DA3] b work  md:w-[390px] h-[140px] "></div> */}
      <div class="w-full  relative ">
        <div class="flex  flex-wrap lg:flex-row   relative  md:mt-[8rem] md:gap-14">
          <div className="md:flex hidden   justify-center items-center rounded-r-full  bg-[#2F6DA3]  md:w-[390px] h-[140px] w-full sm:w-full "></div>
          <div className="flex flex-col  uppercase justify-center md:text-start md:items-start items-center md:mx-0 mx-auto items-center  text-primary relative">
            <div className="flex flex-col md:justify-start md:mx-0 mx-auto md:items-start items-center justify-center md:px-0 px-8">
              <div>
                {" "}
                <h1 className="md:text-[84px] text-blue  text-[30px] leading-[35px] font-bold  md:leading-[75px]">
                  OUR
                </h1>
              </div>
              <div className="">
                {" "}
                <h1 className="text-[#1A1A1A] md:text-[84px] text-[30px] leading-[35px] font-bold  md:leading-[75px] ">
                  director
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center md:flex-row items-center mx-auto ">
        <div className="flex absolute rounded-bl-lg justify-center items-center text-center mx-auto h-[80vh] rounded-tr-lg mt-[20rem]  md:w-[60vw]   bg-opacity-50 bg-[#03577A]  items-center top-[80%] left-0">
          <div className="flex flex-col p-16 md:ml-[5rem] mx-auto items-center uppercase justify-center md:text-start  text-primary relative">
            <div className="flex w-full flex-col justify-center items-center mx-auto md:ml-[12rem] ">
              <div className="m">
                {" "}
                <img
                  src="./assets/images/person.png  "
                  className="h-[20rem] w-[20rem] "
                />
              </div>
              <p className="text-[#000000] font-semibold text-[32px] leading-[60px] my-4">
                Mr. Hashmukhbhai Jivrajbhai Kukadiya{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-end w-[400px] mt-[40rem]">
          {" "}
          <p className="text-[#000000] font-semibold text-[32px] leading-[60px] my-4">
            Mr. Hashmukhbhai Jivrajbhai Kukadiya{" "}
          </p>
        </div>
      </div> */}
      <div class="w-full md:mt-[6rem]  relative ">
        <div class="flex  flex-wrap lg:flex-row   relative  md:mt-[8rem] md:gap-14">
          <div className="flex md:mt-[5rem] md:-ml-10  bg-opacity-50 bg-[#03577A] md:p-10 p-4 space-x-8 items-center w-full sm:w-full md:w-7/12 w-full  my-4 md:my-0  md:h-[660px]   md:rounded-bl-lg   md:rounded-tr-lg ">
            <div className="flex flex-col justify-center items-center  mx-auto md:px-[4rem]">
              {" "}
              <div className="">
                <img
                  src="./assets/images/person.png  "
                  className="h-[20rem] w-[20rem] "
                />
              </div>
              <div className="flex justify-center items-center ">
                {" "}
                <p className="text-[#000000] font-semibold md:text-[32px] text-[22px] md:leading-[60px] my-4">
                  Mr. Hashmukhbhai Jivrajbhai Kukadiya{" "}
                </p>
              </div>
            </div>
          </div>
          <div class=" flex md:mt-[41rem] fjustify-end items-end lex-col md:w-[40%] uppercase">
            <div class="flex justify-center md:mx-10 flex-col text-blue  md:pl-10 mx-5  ">
              <p className="text-[#1A1A1A] text-[32px] font-bold md:text-[64px] md:leading-[90px] my-4 md:float-right">
                “ With <br className="hidden md:block" />
                Vision to <br className="hidden md:block" />
                Change World
              </p>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  );
}

export default Director;
