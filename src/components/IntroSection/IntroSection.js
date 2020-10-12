import React from 'react';
import './IntroSection.css';
import logo from '../../images/logo3.png';
import ActionButtons from './ActionButtons';
import SocialMediaBarCrafted from './SocialMedia';

const IntroSection = props =>(
    <div className="intro_section" >
        <SocialMediaBarCrafted/>
        <div className="container_marca">
          <img className="logo" src={logo} alt="logo"></img>
          <div className="slogan">LARGA VIDA AL MOTOR DE TU AUTO</div>
        </div>
       <ActionButtons/>        
    </div>

);

export default IntroSection;