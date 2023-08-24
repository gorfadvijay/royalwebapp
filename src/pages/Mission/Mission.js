import React, { useRef } from "react";

function Mission() {
  return (
    <div className="relative -mt-[25rem] md:-mt-[20rem]" id="Mission">
      <div className="md:block hidden absolute rounded-r-full  bg-[#2F6DA3] b work  md:w-[250px] max-h-[240px] top-[0%] left-0">
        <div className="flex justify-end mx-auto py-10 items-center px-5">
          <img
            src="./assets/images/mission .png  "
            className="h-[4rem] w-[4rem] "
          />
        </div>
      </div>
      <div className="w-full lg:max-w-[1400px] md:px-10 mx-auto relative md:my-20 px-5">
        <div className="md:flex ">
          <div className="flex flex-col justify-center md:text-start md:items-start items-center  mx-auto text-primary relative">
            <div className="flex flex-col">
              <div>
                {" "}
                <h1 className="md:text-[84px] text-blue md:mt-[2rem] text-[30px] leading-[35px] font-bold  md:leading-[75px]">
                  OUR
                </h1>
              </div>
              <div className="">
                {" "}
                <h1 className="text-[#1A1A1A] md:text-[84px] text-[30px] leading-[35px] font-bold  md:leading-[75px] ">
                  MISSION
                </h1>
              </div>
            </div>
            <p className="md:text-[36px] text-[18px] md:mt-[8rem] text-secondary font-semibold leading-[35px] md:leading-[69px] my-4 md:text-start items-start justify-center flex mx-auto  w-full">
              At Royal Group, our mission goes beyond simply delivering
              exceptional products. We believe in delivering the utmost quality
              in our services, values, commitment, and respect to our esteemed
              customers. We aim to build strong and positive relationships that
              make a real difference in our customers' business goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
