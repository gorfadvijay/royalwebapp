// import Signup from "../Signup/Signup";
import React, { useState, useEffect } from "react";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { Link as LinkScroll } from "react-scroll";
function Header(props) {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);


  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  const onMoboClick = () => {
    props.onMoboClicks();
  };

  return (
    <>
  
 

      <div
        className={
          "md:fixed md:top-0 md:z-[1000] md:shadow-md  md:w-full md:py-[10px]  md:transition-all " +
          (scrollActive ? " md:z-[1000] md:shadow-md  md:bg-white" : " pt-4")
        }
     >
        {/* <div className='w-full h-screen relative'>
        <video className='w-full h-[60vh] object-cover' src='https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4'
        autoPlay loop muted/>
        <div className='absolute w-full h-full top-0 left-0'></div>
        <div className='absolute top-0 w-full h-full  flex flex-col justify-center items-center text-center text-white text-[56px]'><h1>Video of Royal Group</h1></div>
    </div> */}
    <div >
        <div className="md:max-w-[1400px] w-full bg-white md:px-10 px-5 mx-auto ">
          <div className="flex  justify-between  md:items-center  ">
            <div className="flex justify-start items-start">
              <img
                src="./assets/images/RoyalLogo.png  "
                className="h-auto w-[8rem] "
              />
            </div>
            <div className=" md:flex hidden ">
              <div className=" text-[18px] font-medium leading-[22px]  cursor-pointer">
                <LinkScroll
                  activeClass="active"
                  to="Home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onSetActive={() => {
                    setActiveLink("Home");
                  }}
                  className={
                    "px-4 py-2 Workcursor-pointer animation-hover inline-block relative" +
                    (activeLink === "Home"
                      ? " text-blue animation-active "
                      : " text-black")
                  }>
                  Home
                </LinkScroll>
              </div>

              <div className="text-[18px] font-medium leading-[22px] text-black mx-4 cursor-pointer">
                <LinkScroll
                  activeClass="active"
                  to="About"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-200}
                  onSetActive={() => {
                    setActiveLink("About");
                  }}
                  className={
                    "px-4 py-2 Workcursor-pointer animation-hover inline-block relative" +
                    (activeLink === "About"
                      ? " text-blue animation-active "
                      : " text-black")
                  }>
                  About
                </LinkScroll>
              </div>
              <div className="text-[18px] font-medium leading-[22px] text-black mx-4 cursor-pointer">
                <LinkScroll
                  activeClass="active"
                  to="Our Ventures"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onSetActive={() => {
                    setActiveLink("Our Ventures");
                  }}
                  className={
                    "px-4 py-2 Workcursor-pointer animation-hover inline-block relative" +
                    (activeLink === "Our Ventures"
                      ? " text-blue animation-active "
                      : " text-black")
                  }>
                  Our Ventures
                </LinkScroll>
              </div>
                <div className="text-[18px] font-medium leading-[22px] text-black mx-4 cursor-pointer">
                  <LinkScroll
                    activeClass="active"
                    to="Clients"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onSetActive={() => {
                      setActiveLink("Clients");
                    }}
                    className={
                      "px-4 py-2 Workcursor-pointer animation-hover inline-block relative" +
                      (activeLink === "Clients"
                        ? " text-blue animation-active "
                        : " text-black")
                    }>
                    Clients
                  </LinkScroll>
                </div>

              <div className="text-[18px] font-medium leading-[22px] text-black mx-4 cursor-pointer">
                <LinkScroll
                  activeClass="active"
                  to="Team"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onSetActive={() => {
                    setActiveLink("Team");
                  }}
                  className={
                    "px-4 py-2 Workcursor-pointer animation-hover inline-block relative" +
                    (activeLink === "Team"
                      ? " text-blue animation-active "
                      : " text-black")
                  }>
               Team
                </LinkScroll>
              </div>
              <div className="text-[18px] font-medium leading-[22px] text-black mx-4 cursor-pointer">
                <LinkScroll
                  activeClass="active"
                  to="Careers"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onSetActive={() => {
                    setActiveLink("Careers");
                  }}
                  className={
                    "px-4 py-2 Workcursor-pointer animation-hover inline-block relative" +
                    (activeLink === "Careers"
                      ? " text-blue animation-active "
                      : " text-black")
                  }>
               Careers
                </LinkScroll>
              </div>
              <div className="text-[18px] font-medium leading-[22px] text-black mx-4 cursor-pointer">
                <LinkScroll
                  activeClass="active"
                  to="HelpDesk"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onSetActive={() => {
                    setActiveLink("HelpDesk");
                  }}
                  className={
                    "px-4 py-2 Workcursor-pointer animation-hover inline-block relative" +
                    (activeLink === "HelpDesk"
                      ? " text-blue animation-active "
                      : " text-black")
                  }>
               HelpDesk
                </LinkScroll>
              </div>
              <div className="text-[18px]  font-medium leading-[22px] text-black mx-4 cursor-pointer border-[#2F6DA3] border-solid border-[1px] py-[1px]  px-[3px]  rounded-[5px] md:flex hidden text-[18px] font-medium leading-[22px] text-black cursor-pointer  text-center">
                <LinkScroll
                  activeClass="active"
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onSetActive={() => {
                    setActiveLink("About");
                  }}
                  className={
                    "px-4 py-2 Workcursor-pointer animation-hover inline-block relative" +
                    (activeLink === "About"
                      ? " text-blue animation-active "
                      : " text-black")
                  }>
                  Contact Us
                </LinkScroll>
              </div>
            </div>
            <div className="text-[18px] font-medium leading-[22px] text-black cursor-pointer ">
            
            <a href="https://api.whatsapp.com/send?phone=9687338429&text=Hello%20there!">
<img
                src="./assets/images/whatsapp.png  "
                className="h-[2rem] w-[2rem] mx-4"
              />
</a>

              <div className="md:hidden flex justify-center items-center">
              

<a href="https://api.whatsapp.com/send?phone=9687338429&text=Hello%20there!">
<img
                src="./assets/images/whatsapp.png  "
                className="h-[2rem] w-[2rem] mx-4"
              />
</a>

<div  onClick={onMoboClick}>  {props.showNav ? (
                  <AiOutlineCloseCircle size={24} />
                ) : (
                  <AiOutlineMenu size={24} />
                )}</div>
              
                
              </div>
            </div>

            <div
              className={
                props.showNav
                  ? "fixed top-[4rem] left-0 bg-[#1F0048] w-full ease-in-out duration-500 z-[1000]"
                  : "fixed top-[-100%]"
              }>
              <ul className="md:hidden flex text-white p-5  flex-col mx-auto justify-center items-center">
                <li className="my-2 leading-[30px] text-[18px] font-semibold ">
                  {" "}
                  <LinkScroll
                    activeClass="active"
                    to="Home"
                    spy={true}
                    offset={-100}
                    smooth={true}
                    duration={500}
                    onSetActive={() => {
                      setActiveLink("Home");
                    }}
                    className={
                      "px-4 py-2 Workcursor-pointer animation-hover inline-block relative" +
                      (activeLink === "Home"
                        ? " text-[#ea2b4f] animation-active "
                        : " text-white")
                    }>
                    Home
                  </LinkScroll>
                </li>
                <li className="my-2 leading-[30px] text-[18px] font-semibold">
                  {" "}
                  <LinkScroll
                    activeClass="active"
                    to="WhoWeAre"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onSetActive={() => {
                      setActiveLink("WhoWeAre");
                      props.setShowNav(false);
                    }}
                    className={
                      "px-4 py-2 Workcursor-pointer animation-hover inline-block relative" +
                      (activeLink === "WhoWeAre"
                        ? " text-[#ea2b4f] animation-active "
                        : " text-white")
                    }>
                    About Us
                  </LinkScroll>
                </li>
                <li className="my-2 leading-[30px] text-[18px] font-semibold">
                  {" "}
                  <LinkScroll
                    activeClass="active"
                    to="Our Ventures"
                    offset={-100}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onSetActive={() => {
                      setActiveLink("Our Ventures");
                      props.setShowNav(false);
                    }}
                    className={
                      "px-4 py-2 Workcursor-pointer animation-hover inline-block relative" +
                      (activeLink === "Our Ventures"
                        ? " text-[#ea2b4f] animation-active "
                        : " text-white")
                    }>
                    Our Venturess
                  </LinkScroll>
                </li>
                  <li
                    className="my-2 le
                ading-[30px] text-[18px] font-semibold">
                    {" "}
                    <LinkScroll
                      activeClass="active"
                      to="Client"
                      offset={-100}
                      spy={true}
                      smooth={true}
                      duration={500}
                      onSetActive={() => {
                        setActiveLink("Client");
                        props.setShowNav(false);
                      }}
                      className={
                        "px-4 py-2 Workcursor-pointer animation-hover inline-block relative" +
                        (activeLink === "Client"
                          ? " text-[#ea2b4f] animation-active "
                          : " text-white")
                      }>
                      Testimonials
                    </LinkScroll>
                  </li>

                <li className="my-2 leading-[30px] text-[18px] font-semibold">
                  {" "}
                  <LinkScroll
                    activeClass="active"
                    to="Contact"
                    spy={true}
                    offset={-100}
                    smooth={true}
                    duration={500}
                    onSetActive={() => {
                      setActiveLink("Contact");
                      props.setShowNav(false);
                    }}
                    className={
                      "px-4 py-2 Workcursor-pointer animation-hover inline-block relative" +
                      (activeLink === "Contact"
                        ? " text-[#ea2b4f] animation-active "
                        : " text-white")
                    }>
                    Contact Us
                  </LinkScroll>
                </li>
                <li>
                  {" "}
                  <button
                    className="font-bold border-solid border-[1px] py-2 my-2 px-6 rounded-md border-white"
                    onClick={props.openModal}>
                    Get Started
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </div>
      {/* {props.isOpen && <Signup CloseModal={props.CloseModal} />} */}
    </>
  );
}

export default Header;