import React, { useRef } from "react";

function Mission() {
  return (

    <div id="Mission">
    <div className="relative -mt-[25rem]  md:-mt-[20rem]" >
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
                 mission
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:max-w-[1920px] md:px-10 mx-auto relative md:my-20 px-5">
        <div className="md:flex ">
          <div className="flex flex-col justify-center md:text-start md:items-start items-center  mx-auto text-primary relative">
            
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
    </div>
  );
}

export default Mission;
