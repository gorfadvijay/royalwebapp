import React, { useState, useEffect } from "react";

import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/Components/Header/Header";
import Home from "./Home/Home"
import Mission from "./Mission/Mission";
import Vision from "./Vision/Vision";
import Values from "./Values/Values";
import Clients from "./Clients/Clients";
import Director from "./Director/Director";
import Contact from "./Contact/Contact";
import Form from "@/Components/FormComp/Form";
import Newslatter from "./NewsLatter/Newslatter";
import Footer from "@/Components/Footer";
import Global from "./Global/Global"
export default function index() {
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
   <>
  
    <Header
        isOpen={isOpen}
        openModal={openModal}
        CloseModal={CloseModal}
        showNav={showNav}
        setShowNav={setShowNav}
        onMoboClicks={onMoboClicks}
      />
      <Home/>
     
      <Mission/>
      <Vision/>
      <Values/>
      <Clients/>
      <Director/>
      <Global/>
      <Contact/>
    <Newslatter/>
    <Footer/>
   </>
  );
}
