import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import MyComponent from "@/Components/MyComponent";
function Newslatter() {
 
  return (
    <div class="w-full mt-[8rem]" id="Newslatter">
      <div class="relative overflow-hidden scursor-pointer">
        <img
          class="object-cover w-full h-screen md:h-[70vh] "
          src="https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80"
          alt="Flower and sky"
        />

        <div class="absolute flex-col w-full h-full bg-black/50  top-0 flex justify-center items-center mx-auto  px-6 py-4">
          <h1 className="text-[#FFFFFF] text-center font-bold md:text-[34px] text-[24px] md:leading-[38px] leading-[28px] my-[3rem]">
            Subscribe Our Newsletter
          </h1>

          <div className="flex flex-col items-center justify-center mt-3">
            <p className="text-[#FFFFFF] font-medium text-[18px] leading-[25px] ">
              Kindly enter your e-mail Address here, so that you are always up
              to date with any new updates by Lexus and Team.
            </p>
          </div>
          <div className="flex md:flex-row flex-col items-center justify-center mt-12  w-[600px]">
            <div className=" w-full">
              <input
                className={`h-12 border text-[#FFFF] bg-[#FFFFFF]/40 focus:border-[#E6E6E6] w-full ring-0 focus:ring-0 outline-none  placeholder-[#FFFF] px-4`}
                type="email"
                placeholder="Enter your valid email address here .."
              />
            </div>
            <div className="font-bold text-[16px] leading-[52px]  md:ml-3 uppercase">
              <input
                type="submit"
                className="cursor-pointer text-white bg-[#2F6DA3] flex justify-center items-center h-12 w-full text-center py-[2px] px-[15px] font-bold text-[16px] leading-[52px]"
                value="Subscribe Now"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        {" "}
        {/* <div className="">
          <img src="./assets/images/map.png" className="h-auto w-auto " />
        </div> */}
  
      </div>
    </div>
  );
}

export default Newslatter;
