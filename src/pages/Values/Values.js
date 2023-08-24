import VideoWithText from "@/Components/VideoWithText";
import React, { useRef } from "react";

function Values() {
  return (
    <div className="relative -mt-[30rem] md:-mt-[30rem]" id="Mission">
      <div className="w-full bg-[#2F6DA3] flex justify-center items-center mx-auto text-center my-[10rem]">
        <p className="uppercase md:text-[55px] text-[30px] font-semibold text-white py-10">
          Values that are shaping us
        </p>
      </div>

      <div class="w-full  my-10 relative ">
        <div class="flex  flex-wrap lg:justify-between md:flex-row  flex-col-reverse  justify-center items-center relative  md:mt-[8rem] md:gap-14">
          <div class=" md:p-10 p-4 sm:w-full md:w-[47%]  my-4 md:my-0  md:h-[330px]    md:rounded-r-lg  ">
            <div class="flex justify-center md:mx-10 flex-col text-blue  md:pl-10 mx-5  ">
              <p class=" md:text-[32px] md:leading-[56px] leading-[25px]  my-3 font-semibold">
                Our customers are at the heart of everything we do. We forge
                strong partnerships based on trust and understanding, working
                collaboratively to ensure their business goals are achieved.
              </p>
            </div>
          </div>

          <div className="flex  bg-[#D9D9D9] md:p-10 p-4 space-x-8 items-center sm:w-full md:w-[47%]  my-4 md:my-0  md:h-[330px]     md:rounded-l-full ">
            <div className="md:pl-8">
              {" "}
              <img
                src="./assets/images/handshake.png  "
                className="h-[10rem] w-[10rem] "
              />
            </div>
            <div className="flex  md:px-[4rem]">
              {" "}
              <h1 class="md:text-[64px] text-[32px] md:leading-[73px] leading-[30px] text-xl text-blue  font-semibold my-3 uppercase">
                Customer
                <br />
                commitments
              </h1>
            </div>
          </div>
        </div>
        <div class="flex  flex-wrap lg:justify-between   justify-center items-center relative  md:mt-[8rem] md:gap-14">
          <div className="flex md:mt-[5rem] bg-[#D9D9D9] md:p-10 p-4 space-x-8 items-center w-full sm:w-full md:w-[47%]  my-4 md:my-0  md:h-[330px]     md:rounded-r-full ">
            <div className="flex  md:px-[4rem]">
              {" "}
              <h1 class="md:text-[64px] text-[32px] md:leading-[73px] leading-[30px] text-xl text-blue  font-semibold my-3 uppercase">
                quality
              </h1>
            </div>
            <div className="">
              {" "}
              <img
                src="./assets/images/setting.png  "
                className="h-[10rem] w-[10rem] "
              />
            </div>
          </div>
          <div class=" md:p-10 p-4 sm:w-full    md:w-[47%]  my-4 md:my-0  md:h-[330px]    md:rounded-l-lg  ">
            <div class="flex justify-center md:mx-10 flex-col text-blue  md:pl-10 mx-5  ">
              <p class=" md:text-[32px] md:leading-[56px] leading-[25px]  my-3 font-semibold">
                We hold ourselves to the highest standards of integrity and
                quality. Each action we take is driven by a commitment to
                delivering products and services of exceptional quality,
                reliability, and performance.
              </p>
            </div>
          </div>
        </div>
        <div class="flex  flex-wrap lg:justify-between  md:flex-row  flex-col-reverse  justify-center items-center relative  md:mt-[8rem] md:gap-14">
          <div class=" md:p-10 p-4 sm:w-full md:w-[47%]  my-4 md:my-0  md:h-[330px]    md:rounded-r-lg  ">
            <div class="flex justify-start md:mx-10 flex-col text-blue  md:pl-10 mx-5  ">
              <p class=" md:text-[32px] md:leading-[56px] leading-[25px]  my-3 font-semibold">
                We foster a culture of teamwork, breaking down boundaries and
                working together to meet the diverse needs of our customers. By
                leveraging our collective expertise and resources, we strive to
                help both our customers and our company succeed.
              </p>
            </div>
          </div>

          <div className="flex md:mt-[5rem] bg-[#D9D9D9] md:p-10 p-4 w-full space-x-8 items-center sm:w-full md:w-[47%]  my-4 md:my-0  md:h-[330px]     md:rounded-l-full ">
            <div className="md:pl-8">
              {" "}
              <img
                src="./assets/images/teamwork.png  "
                className="h-[10rem] w-[10rem] "
              />
            </div>
            <div className="flex  md:px-[4rem]">
              {" "}
              <h1 class="md:text-[64px] text-[32px] md:leading-[73px] leading-[30px] text-xl text-blue  font-semibold my-3 uppercase">
                team work
              </h1>
            </div>
          </div>
        </div>
        <div class="flex  flex-wrap lg:justify-between  justify-center items-center relative  mt-10 md:mt-[8rem] md:gap-14">
          <div className="flex mt-10 bg-[#D9D9D9] md:p-10 md:mt-[5rem] w-full p-4 space-x-8 items-center sm:w-full md:w-[47%]  my-4 md:my-0  md:h-[330px]     md:rounded-r-full ">
            <div className="flex  md:px-[4rem]">
              {" "}
              <h1 class="md:text-[64px] text-[32px] md:leading-[73px] leading-[30px] text-xl text-blue  font-semibold my-3 uppercase">
                respect to
                <br />
                customer
              </h1>
            </div>
            <div className="">
              {" "}
              <img
                src="./assets/images/respect .png  "
                className="h-[10rem] w-[10rem] "
              />
            </div>
          </div>
          <div class=" md:p-10 p-4 sm:w-full    md:w-[47%]  my-4 md:my-0  md:h-[330px]    md:rounded-l-lg  ">
            <div class="flex justify-center md:mx-10 flex-col text-blue  md:pl-10 mx-5  ">
              <p class=" md:text-[32px] md:leading-[56px] leading-[25px]  my-3 font-semibold">
                Our team members are our greatest asset. We value their unique
                contributions and actively encourage their personal and
                professional development. We recognize and reward exceptional
                performance while treating everyone with respect, fairness, and
                dignity.
              </p>
            </div>
          </div>
        </div>
      
      </div>
      <div className="flex md:mt-[10rem] justify-center items-center">
              <img
                src="./assets/images/Diamond.png"
                className="h-auto w-full object-cover "
              />
            </div>
    </div>
  );
}

export default Values;
