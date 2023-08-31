import React from 'react'
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const Global = () => {
    const items = [
        <div className="flex justify-center items-center mx-auto  w-full ">
          <div className="flex  mx-auto py-10 items-center px-5">
            <img
              src="./assets/images/flagi.png  "
              className="md:h-[30vh] h-auto w-auto"
            />
          </div>
        </div>,
    
        <div className="flex justify-center items-center mx-auto  w-full  ">
          <div className="flex mx-auto py-10 items-center px-5">
            <img
              src="./assets/images/flagii.png  "
              className="md:h-[30vh] h-auto w-auto"
            />
          </div>
        </div>,
         <div className="flex justify-center items-center mx-auto  w-full  ">
         <div className="flex mx-auto py-10 items-center px-5">
           <img
             src="./assets/images/flagi.png  "
             className="md:h-[30vh] h-auto w-auto"
           />
         </div>
       </div>, <div className="flex justify-center items-center mx-auto  w-full  ">
          <div className="flex mx-auto py-10 items-center px-5">
            <img
              src="./assets/images/flagii.png  "
              className="md:h-[30vh] h-auto w-auto"
            />
          </div>
        </div>,
      ];
      const responsive = {
        464: { items: 1 },
        768: { items: 1 },
        1024: { items: 1 },
      };
      const Globalresponsive = {
        464: { items: 1 },
        768: { items: 1 },
        1024: { items: 1 },
      };
      
      const Globalitems = [
        <div className="flex justify-center items-center mx-auto  w-full ">
          <div className="flex  mx-auto py-10 items-center px-5">
            <img
              src="./assets/images/flagi.png  "
              className="md:h-[30vh] h-auto w-auto"
            />
          </div>
        </div>,
    
        <div className="flex justify-center items-center mx-auto  w-full  ">
          <div className="flex mx-auto py-10 items-center px-5">
            <img
              src="./assets/images/flagii.png  "
              className="md:h-[30vh] h-auto w-auto"
            />
          </div>
        </div>,
         <div className="flex justify-center items-center mx-auto  w-full ">
         <div className="flex  mx-auto py-10 items-center px-5">
           <img
             src="./assets/images/flagi.png  "
             className="md:h-[30vh] h-auto w-auto"
           />
         </div>
       </div>,
        <div className="flex justify-center items-center mx-auto  w-full ">
        <div className="flex  mx-auto py-10 items-center px-5">
          <img
            src="./assets/images/flagii.png  "
            className="md:h-[30vh] h-auto w-auto"
          />
        </div>
      </div>,
       <div className="flex justify-center items-center mx-auto  w-full ">
       <div className="flex  mx-auto py-10 items-center px-5">
         <img
           src="./assets/images/flagi.png  "
           className="md:h-[30vh] h-auto w-auto"
         />
       </div>
     </div>,
      ];
  return (
    <div id="Global"> 
    <div class="w-full md:mt-[10rem] relative  md:max-w-[1920px] " >
       <div class="w-full  relative ">
        <div class="flex  flex-wrap lg:flex-row   relative  md:mt-[8rem] md:gap-14">
          <div className="md:flex hidden   justify-center items-center rounded-r-full  bg-[#2F6DA3] b work  md:w-[390px] h-[140px] w-full sm:w-full "></div>
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
                  Global Presence
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div className="flex lg:justify-between md:max-w-[1400px] w-full md:flex-row items-center justify-center flex-col mx-auto w-full mt-[4rem]">
        {" "}
        <div className="md:flex hidden mx-auto py-10 items-center px-5">
          <img
            src="./assets/images/leftarrow.png  "
            className="h-[5vh] w-auto"
          />
        </div>
      
        <AliceCarousel
          mouseTracking
          autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={2000}
        animationDuration={1000}
          items={Globalitems}
          responsive={Globalresponsive}
          infinite={true}
          
          renderPrevButton={() => {
            return (
              <div className="p-4 absolute left-[-4%] top-[35%] cursor-pointer md:flex hidden">
                 <img
            src="./assets/images/leftarrow.png  "
            className="h-[5vh] w-auto"
          />
              </div>
            );
          }}
          renderNextButton={() => {
            return (
              <div className="p-4 absolute right-[4%] top-[35%] cursor-pointer md:flex hidden">
              <img
            src="./assets/images/rightarrow.png  "
            className="h-[5vh] w-auto"
          />
              </div>
            );
          }}
        />
        {/* <div className="md:flex hidden mx-auto py-10 items-center px-5">
          <img
            src="./assets/images/rightarrow.png  "
            className="h-[5vh] w-auto"
          />
        </div> */}
      </div>
      <div class="w-full  relative ">
        <div class="flex  flex-wrap lg:flex-row   relative  md:mt-[8rem] md:gap-14">
          <div className="flex   justify-center items-center   md:rounded-r-full  bg-[#2F6DA3]  items-center w-full sm:w-full md:w-[990px] h-[140px] ">
            <h1 className="text-[#FFFFFF] uppercase font-bold text-[32px] md:text-[64px] md:leading-[109px]">
              Trusted Partners
            </h1>
          </div>
          <div class=" flex justify-end items-end lex-col md:w-[40%] uppercase">
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
      <div className="flex lg:justify-between md:max-w-[1000px] w-full md:flex-row items-center justify-center flex-col mx-auto w-full mt-[4rem]">
        {" "}
        <div className="md:flex hidden mx-auto py-10 items-center px-5">
          <img
            src="./assets/images/leftarrow.png  "
            className="h-[5vh] w-auto"
          />
        </div>
        {/* <div className="flex mx-auto py-10 items-center px-5">
          <img
            src="./assets/images/flagi.png  "
            className="md:h-[30vh] h-auto w-auto"
          />
        </div>{" "}
        <div className="flex mx-auto py-10 items-center px-5">
          <img
            src="./assets/images/flagii.png  "
            className="md:h-[30vh] h-auto w-auto"
          />
        </div> */}
        <AliceCarousel
          mouseTracking
          autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={2000}
        animationDuration={1000}
          items={items}
          responsive={responsive}
          infinite={true}
          
          renderPrevButton={() => {
            return (
              <div className="p-4 absolute left-[-4%] top-[35%] cursor-pointer md:flex hidden">
                 <img
            src="./assets/images/leftarrow.png  "
            className="h-[5vh] w-auto"
          />
              </div>
            );
          }}
          renderNextButton={() => {
            return (
              <div className="p-4 absolute right-[4%] top-[35%] cursor-pointer md:flex hidden">
              <img
            src="./assets/images/rightarrow.png  "
            className="h-[5vh] w-auto"
          />
              </div>
            );
          }}
        />
        {/* <div className="md:flex hidden mx-auto py-10 items-center px-5">
          <img
            src="./assets/images/rightarrow.png  "
            className="h-[5vh] w-auto"
          />
        </div> */}
      </div>
      {/* <div className="md:hidden flex  md:flex-row items-center  justify-center mx-auto w-full ">
        {" "}
        <div className="md:hidden flex mx-auto py-10 items-center px-5">
          <img
            src="./assets/images/leftarrow.png  "
            className="h-[5vh] w-auto"
          />
        </div>
        <div className="md:hidden flex mx-auto py-10 items-center px-5">
          <img
            src="./assets/images/rightarrow.png  "
            className="h-[5vh] w-auto"
          />
        </div>
      </div> */}
    
  </div>
  </div>
  )
}

export default Global