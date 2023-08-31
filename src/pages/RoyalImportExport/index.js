import Footer from '@/Components/Footer'
import Headertwo from '@/Components/HeaderTwo/Headertwo'
import Quality from '@/Components/Quality/Quality'
import React, { useState } from 'react'
import Contact from '../Contact/Contact'
import HomeTwo from '../Home/HomeTwo'
import Newslatter from '../NewsLatter/Newslatter'
import Service from '../Service/Service'

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
    <div> <Headertwo
    isOpen={isOpen}
    openModal={openModal}
    CloseModal={CloseModal}
    showNav={showNav}
    setShowNav={setShowNav}
    onMoboClicks={onMoboClicks}
  />
  <HomeTwo/>
 <Service/>
  <Quality/>
  <Contact/>
<Newslatter/>
<Footer/></div>
  )
}

export default index