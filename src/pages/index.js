import React, { useState, useEffect } from "react";

import Header from "@/Components/Header/Header";
import Home from "./Home/Home"
import Mission from "./Mission/Mission";
import Vision from "./Vision/Vision";
import Values from "./Values/Values";
import Clients from "./Clients/Clients";
import Director from "./Director/Director";
import Contact from "./Contact/Contact";
import Newslatter from "./NewsLatter/Newslatter";
import Footer from "@/Components/Footer";
import Global from "./Global/Global"
import Quality from "@/Components/Quality/Quality";
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
      <Quality/>
      <Contact/>
    <Newslatter/>
    <Footer/>



   </>
  );
}
