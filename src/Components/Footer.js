import React from "react";
import { Link as LinkScroll } from "react-scroll";
const Footer = () => {
  return (
    <div className="mt-[0rem] relative" id="Footer">
      <div className="w-full bg-[#2F6DA3]  md:px-10 px-5">
        <div className="  md:max-w-[1400px]  md:px-10 px-5 mx-auto flex w-full">
          <div className="w-full uppercase flex md:justify-between md:flex-row justify-center   mx-auto  gap-x-2 items-start  md:gap-x-16 md:gap-y-5 my-5 gap-y-8">
            {/* <div className="flex flex-col justify-start text-[#ffffff]">
            <img
              src="./assets/images/FooterLogo.png"
              className="h-auto w-[135px] my-6"
            />
            <p className="text-[18px] font-semibold leading-[30px] ">
              Zraviya is named after the sanskrit word, which means goal.
              Zraviya LLC is the place, where you can get help to convert your
              ideas to reality. Because we believe your zraviya is our
              zraviya.
            </p>
          </div> */}
            <div className="flex flex-col justify-start text-[#ffffff]">
              <h1 className="my-4 text-[20px] font-semibold md:leading-[48px] leading-[25px] uppercase">
                head office
              </h1>

              <ul className="text-[14px] font-normal md:leading-[48px] leading-[25px] cursor-pointer">
                <li>
                  {" "}
                  <LinkScroll
                    to="Home"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-100}
                  >
                    Home
                  </LinkScroll>
                </li>
                <li className="my-3">
                  <LinkScroll
                    to="WhoWeAre"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-100}
                  >
                    About us
                  </LinkScroll>
                </li>
                <li className="my-3">
                  <LinkScroll
                    to="Service"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-100}
                  >
                    News & Events
                  </LinkScroll>
                </li>

                <li className="my-3">
                  <LinkScroll
                    to="Client"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-100}
                  >
                    Cleints
                  </LinkScroll>
                </li>

                <li className="my-3">
                  <LinkScroll
                    to="Contact"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-100}
                  >
                    business enquiry
                  </LinkScroll>
                </li>
                <li className="my-3">
                  <LinkScroll
                    to="Contact"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-100}
                  >
                    contacts us
                  </LinkScroll>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-start text-[#ffffff]">
              <h1 className="my-4 text-[20px] font-semibold md:leading-[48px] leading-[25px] uppercase">
                Products and Services
              </h1>

              <ul className="text-[14px] font-normal md:leading-[48px] leading-[25px]">
                <li>Download</li>
                <li className="my-3"> machines</li>
                <li className="my-3">texttile </li>
                <li className="my-3"> brochure </li>
              </ul>
            </div>
            <div className="flex flex-col justify-start text-[#ffffff]">
              <h1 className="my-4 text-[20px] font-semibold md:leading-[48px] leading-[25px] uppercase ">
                address and contacts
              </h1>

              <ul className="text-[14px] font-normal md:leading-[23px] ">
                <li>
                  ROOM-A, UNIT-402, 4 F/F, HILDER <br/>CENTRE, NO.2 SUNG PING STREET,
                  HUNGHOM, KOWLOON, HONG KONG{" "}
                </li>
                <li className="my-3"> +852 6278 8222 </li>

                <li className="my-3"> info@royalstarhk.com </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#2F6DA3] py-5 md:px-10 px-5">
        <div className="md:max-w-[1400px] md:px-10 px-5 items-start flex w-full md:justify-start flex-col  text-[#FFFFFF]">
          <div className="flex md:text-[18px] text-[15px] font-semibold leading-[30px]">
            <div>
              <img src="./assets/images/f.png" className="h-[3rem] w-auto " />
            </div>
            <div className="ml-4">
              <img src="./assets/images/g.png" className="h-[3rem] w-auto " />
            </div>
            <div className="ml-4">
              <img src="./assets/images/y.png" className="h-[3rem] w-auto " />
            </div>
            <div className="ml-4">
              <img src="./assets/images/v.png" className="h-[3rem] w-auto " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
