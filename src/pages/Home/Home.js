import VideoWithText from '@/Components/VideoWithText';
import React, { useRef } from 'react';

function Home() {

  return (
    <div className="relative " id="Home">
                  <div className=" absolute rounded-r-full  bg-[#2F6DA3] b work  md:w-[250px] h-[140px] top-[0%] left-0"></div>
      <div className="w-full lg:max-w-[1400px] md:px-10 mx-auto relative my-20 px-5">
        <div className="md:flex ">

          <div className="flex flex-col justify-center md:text-start items-start  mx-auto text-primary relative">

            <div className="flex flex-col">
          <div>  <h1 className="md:text-[84px] text-blue md:mt-[2rem] text-[30px] leading-[35px] font-bold  md:leading-[75px]">
          Welcome to
            </h1></div>
            <div className="md:ml-8">  <h1 className="text-[#1A1A1A] md:text-[84px] text-[30px] leading-[35px] font-bold  md:leading-[75px] ">
            Royal Group
            </h1></div>
            </div>
            <p className="md:text-[36px] text-[18px] md:mt-[8rem] text-secondary font-semibold leading-[35px] md:leading-[69px] my-4 md:text-start items-start justify-center flex mx-auto  w-full">
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