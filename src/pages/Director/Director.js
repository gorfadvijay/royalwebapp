import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
function Director() {
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
    <div className="relative md:mt-[8rem] flex flex-col" id="Director">
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
      {/* <div className="w-full lg:max-w-[1400px] md:px-10 mx-auto relative md:my-20 px-5">
        <div className="flex lg:justify-between md:flex-row items-center  justify-center flex-col mx-auto w-full mt-[4rem]">
          {" "}
          <div className="md:flex hidden mx-auto py-10 items-center px-5">
            <img
              src="./assets/images/leftarrow.png  "
              className="h-[5vh] w-auto"
            />
          </div>
          <div className="flex mx-auto py-10 items-center px-5">
            <img
              src="./assets/images/flagi.png  "
              className="md:h-[30vh] h-auto w-auto"
            />
          </div>{" "}
          <div className="md:flex hidden mx-auto py-10 items-center px-5">
            <img
              src="./assets/images/rightarrow.png  "
              className="h-[5vh] w-auto"
            />
          </div>
        </div>
        <div className="md:hidden flex  md:flex-row items-center  justify-center mx-auto w-full ">
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
        </div>
      </div> */}
      <div className="flex lg:justify-between md:max-w-[1400px] w-full md:flex-row items-center justify-center flex-col mx-auto w-full mt-[4rem]">
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
      <div class="w-full mt-[8rem]">
        <div class="relative overflow-hidden scursor-pointer">
          <img
            class="object-cover w-full h-screen md:h-[70vh] "
            src="https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80"
            alt="Flower and sky"
          />

          <div class="absolute flex-col w-full h-full top-0 flex justify-center items-center mx-auto  px-6 py-4">
            <h1 className="text-[#FFFFFF] text-center font-bold md:text-[48px] text-[24px] md:leading-[38px] leading-[28px] my-[3rem]">
              We Value Quality Over Quantity
            </h1>

            <div className="flex flex-col items-center justify-center mt-3">
              <h3 className="text-[#0088C1] font-bold text-[1]5px] leading-[25px] ">
                WIN-WIN WITH CLIENTS
              </h3>
              <p className="text-[#FFFFFF] font-medium text-[15px] leading-[25px] ">
                {" "}
                We shall finalize only such deals that promises growth to our
                clients.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mt-3">
              <h3 className="text-[#0088C1] font-bold text-[1]5px] leading-[25px] ">
                PROVIDE CONTINUOUS UPDATES{" "}
              </h3>
              <p className="text-[#FFFFFF] font-medium text-[15px] leading-[25px] ">
                We shall work in such a network that helps our customers to
                solve their queries and also provide them continuous information
                of latest developments.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mt-3">
              <h3 className="text-[#0088C1] font-bold text-[1]5px] leading-[25px] ">
                PROVIDE TRAINING FOR OPTIMUM UTILIZATION{" "}
              </h3>
              <p className="text-[#FFFFFF] font-medium text-[15px] leading-[25px] ">
                {" "}
                We shall provide all the required training to our clients which
                will not only help them to gain product's knowledge but also
                help them to make optimum utilization of the product purchased.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mt-3">
              <h3 className="text-[#0088C1] font-bold text-[1]5px] leading-[25px] ">
                NO SHORT CUTS: NO OPERATOR SWITCHING
              </h3>
              <p className="text-[#FFFFFF] font-medium text-[15px] leading-[25px] ">
                For selling products to new clients, we shall never resort to
                short cuts like switching the operators from one client to
                another.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mt-3">
              <h3 className="text-[#0088C1] font-bold text-[1]5px] leading-[25px] ">
                NO BRIBING
              </h3>
              <p className="text-[#FFFFFF] font-medium text-[15px] leading-[25px] ">
                {" "}
                We shall never entertain any bribing/commission to clients'
                officers or managers towards the accomplishment of any desired
                task.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mt-3">
              <h3 className="text-[#0088C1] font-bold text-[1]5px] leading-[25px] ">
                CONSISTENT QUALITY IMPROVEMENT
              </h3>
              <p className="text-[#FFFFFF] font-medium text-[15px] leading-[25px] ">
                {" "}
                We shall always aim at continuous improvement in the quality
                with an intention of providing the best quality to it clients.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mt-3 md:pb-0 pb-[10rem]">
              <h3 className="text-[#0088C1] font-bold text-[1]5px] leading-[25px] ">
                IN-TIME DELIVERY{" "}
              </h3>
              <p className="text-[#FFFFFF] font-medium text-[15px] leading-[25px] ">
                {" "}
                Delivery of the ordered product shall always be provided in time
                as we not only value our own time but also of our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Director;
