import React from "react";

function Service() {
  return (
    <div>
      <div className="w-full relative">
        <div className="flex flex-col my-4 mx-auto justify-center items-center md:max-w-[1920px] w-full">
          <h3 class="md:text-[64px] md:leading-[75px] font-bold text-blue  my-8 ">
            Services
          </h3>
          <div className="flex flex-col my-4 mx-auto justify-center items-center md:max-w-[1920px] w-full">  
          <div className="flex flex-col md:w-[1000px] w-full">
            <div className="image">
              <img
                src="./assets/images/s1.png"
                className="h-[q0rem] w-full mx-4"
              />
            </div>
            <div className="content flex mx-3 my-2  ">
              <h1 className="text-[#666666] md:text-[48px] md:leading-[56px] font-bold">
                1. Sea Freight
              </h1>
            </div>
            <div className="mx-3 text-[#2F6DA3] font-medium">
              <p>
                MPCVD machine stands for Microwave Plasma Chemical Vapor
                Deposition. It is a tool used for growing high quality diamond
                films in laboratories by using carbon containing gas
              </p>
            </div>
          </div>
          <div className="flex flex-col md:w-[1000px] w-full mt-[4rem] ">
            <div className="image">
              <img
                src="./assets/images/s2.png"
                className="h-[q0rem] w-full mx-4"
              />
            </div>
            <div className="content flex mx-3 my-2  ">
              <h1 className="text-[#666666] md:text-[48px] md:leading-[56px] font-bold">
              2. Air Freight
              </h1>
            </div>
            <div className="mx-3 text-[#2F6DA3] font-medium">
              <p>
              MPCVD machine stands for Microwave Plasma Chemical Vapor Deposition. It is a tool used for growing high quality diamond films in laboratories by using carbon containing gas
              </p>
            </div>
          </div>   
          <div className="flex flex-col md:w-[1000px] w-full mt-[4rem] ">
            <div className="image">
              <img
                src="./assets/images/s3.png"
                className="h-[q0rem] w-full mx-4"
              />
            </div>
            <div className="content flex mx-3 my-2  ">
              <h1 className="text-[#666666] md:text-[48px] md:leading-[56px] font-bold">
              3. Road Freight
              </h1>
            </div>
            <div className="mx-3 text-[#2F6DA3] font-medium">
              <p>
              MPCVD machine stands for Microwave Plasma Chemical Vapor Deposition. It is a tool used for growing high quality diamond films in laboratories by using carbon containing gas
              </p>
            </div>
          </div>   
          <div className="flex flex-col md:w-[1000px] w-full mt-[4rem] ">
            <div className="image">
              <img
                src="./assets/images/s4.png"
                className="h-[q0rem] w-full mx-4"
              />
            </div>
            <div className="content flex mx-3 my-2  ">
              <h1 className="text-[#666666] md:text-[48px] md:leading-[56px] font-bold">
              4. Warehousing Service
              </h1>
            </div>
            <div className="mx-3 text-[#2F6DA3] font-medium">
              <p>
              MPCVD machine stands for Microwave Plasma Chemical Vapor Deposition. It is a tool used for growing high quality diamond films in laboratories by using carbon containing gas
              </p>
            </div>
          </div>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
