import InputType from "@/atoms/InputType";
import Footer from "@/Components/Footer";
import HeaderThree from "@/Components/HeaderThree/HeaderThree";
import Headertwo from "@/Components/HeaderTwo/Headertwo";
import Quality from "@/Components/Quality/Quality";
import React, { useState } from "react";
import Contact from "../Contact/Contact";
import HomeTwo from "../Home/HomeTwo";
import Newslatter from "../NewsLatter/Newslatter";
import Service from "../Service/Service";

const index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setShowNav(false);
  };
  const CloseModal = () => {
    setIsOpen(false);
  };
  const onMoboClicks = () => {
    setShowNav(!showNav);
  };
  return (
    <div>
      {" "}
      <HeaderThree
        isOpen={isOpen}
        openModal={openModal}
        CloseModal={CloseModal}
        showNav={showNav}
        setShowNav={setShowNav}
        onMoboClicks={onMoboClicks}
      />
      <div className="flex flex-col">
        <div className="w-full mt-[5rem] relative flex-col ">
          <div className="flex flex-col my-4 mx-auto justify-center items-center md:max-w-[1920px] w-full">
            <h3 class="md:text-[64px] md:leading-[75px] font-bold text-blue  my-8 ">
              Air Freight
            </h3>
            <p className="md:text-[36px] text-[18px] md:mt-[2rem] text-secondary font-semibold leading-[35px] md:leading-[69px] my-4 md:text-start items-start justify-center flex mx-auto  w-full">
              MPCVD machine stands for Microwave Plasma Chemical Vapor
              Deposition. It is a tool used for growing high quality diamond
              films in laboratories by using carbon containing gas and microwave
              plasma. The MPCVD system comprises a vacuum chamber, a microwave
              generator, and a gas delivery system. The substrate temperature is
              controlled by the position of the plasma, and the temperature is
              monitored by a thermocouple. MPCVD is a promising technology for
              producing low cost, high quality large diamonds.
            </p>
          </div>
        </div>
        <div className="flex-col flex justify-center items-center">
          <div className="w-full h-1/2 relative">
            <video
              className="w-full h-full object-cover"
              src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
              autoPlay
              loop
              muted
            />
            <div className="absolute w-full h-full top-0 left-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center text-center text-white text-5xl">
              <h1>Welcome to Royal Group</h1>
            </div>
          </div>
        </div>

        {/* <div className="relative">
          <div class="w-full  relative  my-[3rem]">
            <div class="flex  flex-wrap lg:flex-row   relative  ">
              <div className="flex   justify-end  md:rounded-r-full  bg-[#2F6DA3]  items-center w-full sm:w-full md:w-[1290px] h-[140px] ">
                <h1 className="text-[#FFFFFF] px-12 uppercase font-bold text-[32px] md:text-[64px] md:leading-[109px]">
                  Photo Gallery
                </h1>
              </div>
            </div>
          </div>
          <div className="md:max-w-[1440px] mx-auto flex flex-col justify-center items-center">
            <div className="flex md:justify-between md:flex-row flex-col md:px-0 px-5 md:space-x-8 items-center md:max-w-[1440px] mx-auto ">
              <div className="">
                <img
                  src="./assets/images/Rectangle17.png"
                  className="w-[90vw] h-[30vh]"
                  loading="lazy"
                />
              </div>
              <div className="md:mt-0 mt-[20px]">
                <img
                  src="./assets/images/Rectangle18.png"
                  className="w-[90vw] h-[30vh]"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex md:justify-between md:flex-row flex-col md:px-0 px-5 md:space-x-8 items-center md:mt-[2rem] md:max-w-[1440px] mx-auto ">
              <div className="">
                <img
                  src="./assets/images/Rectangle19.png"
                  className="w-[90vw] h-[30vh]"
                  loading="lazy"
                />
              </div>
              <div className="md:mt-0 mt-[20px]">
                <img
                  src="./assets/images/Rectangle20.png"
                  className="w-[90vw] h-[30vh]"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex md:justify-between md:flex-row flex-col md:px-0 px-5 md:space-x-8 items-center md:mt-[2rem] md:max-w-[1440px] mx-auto ">
              <div className="">
                <img
                  src="./assets/images/Rectangle21.png"
                  className="w-[90vw] h-[30vh]"
                  loading="lazy"
                />
              </div>
              <div className="md:mt-0 mt-[20px]">
                <img
                  src="./assets/images/Rectangle22.png"
                  className="w-[90vw] h-[30vh]"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-full bg-[#2F6DA3] flex justify-center items-center mx-auto text-center ">
              <p className="uppercase text-[18px] font-semibold text-white py-4">
                VIEW MORE
              </p>
            </div>
          </div>
          <div class="w-full    mt-[5rem]">
          <div class="relative">
            <div className="flex   justify-start  absolute right-0   md:rounded-l-full  bg-[#2F6DA3]  items-center w-full sm:w-full md:w-[1290px] h-[140px] ">
              <h1 className="text-[#FFFFFF] px-12 uppercase font-bold text-[32px] md:text-[64px] md:leading-[109px]">
                Photo Gallery
              </h1>
            </div>
          </div>
        </div>
        </div> */}
        <div className="relative">
          <div class="w-full  relative  my-[3rem]">
            <div class="flex  flex-wrap lg:flex-row   relative  ">
              <div className="flex   justify-end  md:rounded-r-full  bg-[#2F6DA3]  items-center w-full sm:w-full lg:max-w-[1440px] h-[140px] ">
                <h1 className="text-[#FFFFFF] md:mr-[16rem] uppercase font-bold text-[32px] md:text-[64px] md:leading-[109px]">
                  Photo Gallery
                </h1>
              </div>
            </div>
          </div>
          <div className="md:max-w-[1440px] mx-auto flex flex-col justify-center items-center">
            <div className="flex md:justify-between md:flex-row flex-col md:px-0 px-5 md:space-x-8 items-center md:max-w-[1440px] mx-auto ">
              <div className="">
                <img
                  src="./assets/images/Rectangle17.png"
                  className="w-[90vw] h-[30vh]"
                  loading="lazy"
                />
              </div>
              <div className="md:mt-0 mt-[20px]">
                <img
                  src="./assets/images/Rectangle18.png"
                  className="w-[90vw] h-[30vh]"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex md:justify-between md:flex-row flex-col md:px-0 px-5 md:space-x-8 items-center md:mt-[2rem] md:max-w-[1440px] mx-auto ">
              <div className="">
                <img
                  src="./assets/images/Rectangle19.png"
                  className="w-[90vw] h-[30vh]"
                  loading="lazy"
                />
              </div>
              <div className="md:mt-0 mt-[20px]">
                <img
                  src="./assets/images/Rectangle20.png"
                  className="w-[90vw] h-[30vh]"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex md:justify-between md:flex-row flex-col md:px-0 px-5 md:space-x-8 items-center md:mt-[2rem] md:max-w-[1440px] mx-auto ">
              <div className="">
                <img
                  src="./assets/images/Rectangle21.png"
                  className="w-[90vw] h-[30vh]"
                  loading="lazy"
                />
              </div>
              <div className="md:mt-0 mt-[20px]">
                <img
                  src="./assets/images/Rectangle22.png"
                  className="w-[90vw] h-[30vh]"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-full bg-[#2F6DA3] flex justify-center items-center mx-auto text-center ">
              <p className="uppercase text-[18px] font-semibold text-white py-4">
                VIEW MORE
              </p>
            </div>
          </div>
          <div class="w-full    mt-[5rem]">
            <div class="relative">
              <div className="flex   justify-start  absolute right-0   md:rounded-l-full  bg-[#2F6DA3]  items-center w-full sm:w-full md:max-w-[1440px] h-[140px] ">
                <h1 className="text-[#FFFFFF] md:ml-[12rem]  uppercase font-bold text-[32px] md:text-[64px] md:leading-[109px]">
                  APPLICATIONS
                </h1>
              </div>
            </div>
          </div>
          <div className="md:max-w-[1440px] mt-[20rem]  justify-start mx-auto items-center">
            <div className="flex flex-col md:justify-start md:text-[36px] text-[18px]  text-secondary font-semibold leading-[25px] md:leading-[50px]  flex mx-auto  w-full ">
              <ul className="">
                <li className="my-6  list-disc ">Simplified Documentation</li>
                <li className="my-6  list-disc  ">
                  Peace of Mind Air Freight Services
                </li>
                <li className="my-6  list-disc  ">
                  Specialized Documentation for Specific Countries
                </li>
                <li className="my-6  list-disc  ">
                  Certification of Origin and Cargo Insurance
                </li>
                <li className="my-6  list-disc  ">
                  Customs Clearance Assistance
                </li>
                <li className="my-6  list-disc  ">
                  Transport & Warehousing Solutions
                </li>
                <li className="my-6  list-disc  ">
                  Multimodal Transport Integration
                </li>
              </ul>
              <div className="w-full md:max-w-[200px] mt-[3rem] rounded-[17px] bg-[#2F6DA3] flex justify-center items-center mx-auto text-center ">
                <p className=" text-[24px] font-normal leading-[1px] text-white py-8">
                  read more
                </p>
              </div>
            </div>
          </div>

          <div class="w-full    mt-[5rem]">
            <div class="relative">
              <div className="flex   justify-end  md:rounded-r-full  bg-[#2F6DA3]  items-center w-full sm:w-full lg:max-w-[1440px] h-[140px] ">
                <h1 className="text-[#FFFFFF] md:mr-[16rem] uppercase font-bold text-[32px] md:text-[64px] md:leading-[109px]">
                  SPECIFICATION
                </h1>
              </div>
            </div>
          </div>
          <div className="md:max-w-[1440px] mt-[2rem] justify-start mx-auto items-center">
            <div className="flex flex-col md:justify-start md:text-[36px] text-[18px]  text-secondary font-semibold leading-[25px] md:leading-[50px]  flex mx-auto  w-full ">
              <ul className="">
                <li className="my-6  list-disc ">
                  Muegge KMBH Germany 6 kW & 12kW Microwave Generator
                </li>
                <li className="my-6  list-disc  ">68 mm big size of molly</li>
                <li className="my-6  list-disc  ">
                  Specialized Documentation for Specific Countries
                </li>
                <li className="my-6  list-disc  ">
                  Pfeiffer KMBH Germany Rotary vane pump
                </li>
                <li className="my-6  list-disc  ">
                  Production capacity: Average production are 200 225 CT per
                  month / machine.
                </li>
                <li className="my-6  list-disc  ">
                  Goods size capacity 6mm 20mm & height 4mm 9mm
                </li>
                <li className="my-6  list-disc  ">
                  Growth rate: between 10 12.
                </li>
              </ul>
              <div className="w-full md:max-w-[200px] mt-[3rem] rounded-[17px] bg-[#2F6DA3] flex justify-center items-center mx-auto text-center ">
                <p className=" text-[24px] font-normal leading-[1px] text-white py-8">
                  read more
                </p>
              </div>
            </div>
          </div>

          <div class="w-full    mt-[5rem]">
            <div class="relative">
              <div className="flex   justify-start  absolute right-0   md:rounded-l-full  bg-[#2F6DA3]  items-center w-full sm:w-full md:max-w-[1440px] h-[140px] ">
                <h1 className="text-[#FFFFFF] md:ml-[12rem]  uppercase font-bold text-[32px] md:text-[64px] md:leading-[109px]">
                  ADVANTAGES
                </h1>
              </div>
            </div>
          </div>
          <div className="md:max-w-[1440px] mt-[20rem]  justify-start mx-auto items-center">
            <div className="flex flex-col md:justify-start md:text-[36px] text-[18px]  text-secondary font-semibold leading-[25px] md:leading-[50px]  flex mx-auto  w-full ">
              <ul className="">
                <li className="my-6  list-disc ">
                  Produces diamonds of higher purity compared to HPHT method.
                </li>
                <li className="my-6  list-disc  ">
                  Consumes less energy during the production process.
                </li>
                <li className="my-6  list-disc  ">
                  1 10Kw adjustable output microwave power for less electricity
                  consumption
                </li>
                <li className="my-6  list-disc  ">
                  Rich experienced researching team with frontier diamond
                  growing recipe support.
                </li>
                <li className="my-6  list-disc  ">
                  Exclusive technical support program for Zero diamond growing
                  experience team.
                </li>
                <li className="my-6  list-disc  ">
                  Exceptional stability, reliability, repeatability, and cost
                  effectiveness
                </li>
                <li className="my-6  list-disc  ">
                  Ideal for applications in semiconductor, optics, and jewellery
                  diamond market needs
                </li>
                <li className="my-6  list-disc  ">
                  Suitable for producing low cost, high quality large diamonds.
                </li>{" "}
                <li className="my-6  list-disc  ">
                  Capable of growing monocrystal or poly crystalline diamond
                  film
                </li>{" "}
              </ul>
              <div className="w-full md:max-w-[200px] mt-[3rem] rounded-[17px] bg-[#2F6DA3] flex justify-center items-center mx-auto text-center ">
                <p className=" text-[24px] font-normal leading-[1px] text-white py-8">
                  read more
                </p>
              </div>
            </div>
          </div>

          <div className="flex mt-[4rem]  justify-end  md:rounded-r-full  bg-[#2F6DA3]  items-center w-full sm:w-full lg:max-w-[1440px] h-[140px] ">
            <h1 className="text-[#FFFFFF] md:mr-[16rem] uppercase font-bold text-[32px] md:text-[64px] md:leading-[109px]">
              gET your BROCHURE
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full mt-[4rem]">
        <div className="bg-[#2F6DA3] p-10">
          <div className="md:max-w-[1000px] mx-auto ">
            <div className="grid grid-cols-2 md:gap-5 gap-2 mt-5 ">
              <InputType type="text" placeholder="Company Name" />

              <InputType type="text" placeholder="Company Name" />
            </div>
            <div className="grid grid-cols-2 md:gap-5 gap-2 mt-5 ">
              <InputType type="text" placeholder="Company Name" />

              <InputType type="text" placeholder="Company Name" />
            </div>
            <div className="mt-5 mb-10">
  <input
    type="submit"
    className="cursor-pointer uppercase  bg-white flex justify-center items-center h-12 w-full text-center py-[2px] px-[5px] font-semibold text-[16px] text-blue leading-[22px]"
    value="Download Brochure" 
  />
</div>
          </div>
        </div>
      </div>
      <div className="mt-[10rem]">
        <Footer />
      </div>
    </div>
  );
};

export default index;
