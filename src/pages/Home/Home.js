import VideoWithText from '@/Components/VideoWithText';
import React, { useRef } from 'react';

function Home() {

  return (
    <div className="relative mt-[8rem]" id="Home">
               
      <div className="w-full md:max-w-[1920px] mx-auto relative ">
        <div className="md:flex ">

          <div className="flex flex-col justify-center md:text-start items-start  mx-auto text-primary relative">

             <div class="w-full  mt-[16rem] relative ">
        <div class="flex  flex-wrap lg:flex-row   relative  md:mt-[8rem] md:gap-14">
          <div className="md:flex hidden   justify-center items-center rounded-r-full  bg-[#2F6DA3]  md:w-[390px] h-[140px] w-full sm:w-full ">
   
          </div>
          <div className="flex flex-col  uppercase justify-center md:text-start md:mx-0 mx-auto items-center  text-primary relative">
            <div className="flex flex-col md:justify-start justify-center md:px-0 px-8">
            <h1 className="md:text-[84px] text-blue md:mt-[2rem] text-[30px] leading-[35px] font-bold  md:leading-[75px]">
          Welcome to
            </h1></div>
            <div className="md:ml-8">  <h1 className="text-[#1A1A1A] md:text-[84px] text-[30px] leading-[35px] font-bold  md:leading-[75px] ">
            Royal Group
            </h1>
            </div>
          </div>
        </div>
      </div>
            <p className="md:text-[36px] md:px-10 px-5 text-[18px] md:mt-[8rem] text-secondary font-semibold leading-[35px] md:leading-[69px] my-4 md:text-start items-start justify-center flex mx-auto  w-full">
            Welcome to Royal Group, a trusted provider of high-quality laser parts and services. With over two decades of experience since our establishment in 2000, we have built a strong foundation of expertise and reliability in the industry. Our unwavering commitment to customer satisfaction and a vision of becoming the most beloved and valuable company drives us to exceed expectations in every aspect of our business.


            </p>
           
          </div>
        </div>

      </div>
   <VideoWithText/>

    </div>
  );
}

export default Home;