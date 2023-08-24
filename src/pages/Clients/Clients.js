import React, { useRef } from "react";

function Clients() {
  return (
    <div className="relative  mt-10 md:mt-[8rem]" id="Clients">
        <div class="w-full  relative ">
        <div class="flex  flex-wrap lg:flex-row   relative  md:mt-[8rem] md:gap-14">
          <div className="md:flex hidden   justify-center items-center rounded-r-full  bg-[#2F6DA3]  md:w-[390px] h-[140px] w-full sm:w-full ">
          
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
                 clients
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:max-w-[1400px] md:px-10 mx-auto relative md:my-20 px-5">
        <div className="md:flex ">
          <div className="flex flex-col uppercase justify-center md:text-start items-start  mx-auto text-primary relative">
            {/* <div className="flex flex-col">
              <div>
                {" "}
                <h1 className="md:text-[84px] text-blue md:mt-[1rem] text-[30px] leading-[35px] font-bold  md:leading-[75px]">
                  OUR
                </h1>
              </div>
              <div className="">
                {" "}
                <h1 className="text-[#1A1A1A] md:text-[84px] text-[30px] leading-[35px] font-bold  md:leading-[75px] ">
                  Clients
                </h1>
              </div>
            </div> */}
            <div className="flex lg:justify-between md:flex-row items-center flex-col mx-auto w-full my-[4rem]">
                {" "}
                <div className="flex justify-end mx-auto py-10 items-center px-5">
                  <img
                    src="./assets/images/lasercorn.png  "
                    className="h-[20vh] w-auto"
                  />
                </div>
                <div className="flex justify-end mx-auto py-10 items-center px-5">
                  <img
                    src="./assets/images/hl.png  "
                    className="h-[20vh] w-auto"
                  />
                </div>   <div className="flex justify-end mx-auto py-10 items-center px-5">
                  <img
                    src="./assets/images/other.png  "
                    className="h-[20vh] w-auto"
                  />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
