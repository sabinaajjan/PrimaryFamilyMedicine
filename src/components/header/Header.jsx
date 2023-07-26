import React from 'react'
import './header.css'
import CTA from './CTA'
import LOGO from '../../assets/logo.png'
//import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
   <header>
      <div className = ".container.header__container">
        <h5><center>live healthy, live happy</center></h5>
        <h1><center>Primary Family Medicine</center></h1>
        <h5 className = "text-light"><center>a family clinic</center></h5>
        <center><CTA /></center>
      

        <div classname = "logo">
          <img src={LOGO} alt = "logo" class = "center"/>
        </div>

        <a href ="#contact" className ='scroll__down'>Scroll Down</a>
      </div>

   </header>
  )
}

export default Header