import React from 'react';
import './IntroSection.css';
import logo from '../../images/logo3.png';
import ActionButtons from './ActionButtons';
import SocialMediaBarCrafted from './SocialMedia';
import Slider from  '../LogoCarrousel/LogoCarrousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IntroSection = props =>(
    <div className="intro_section" >
        <SocialMediaBarCrafted/>
        <div className="container_marca">
          <img className="logo" src={logo} alt="logo"></img>
          <div className="slogan">LARGA VIDA AL MOTOR DE TU AUTO</div>
          <ActionButtons/>  
        </div>

       
       <Slider/>
       
    </div>

);

export default IntroSection;