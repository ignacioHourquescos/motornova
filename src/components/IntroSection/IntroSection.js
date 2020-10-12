import React from 'react';
import './IntroSection.css';
import logo from '../../images/logo3.png';
import ActionButtons from './ActionButtons'

const IntroSection = props =>(
    <div className="intro_section" >
        
        <div className="container_logo">
          <img className="logo" src={logo} alt="logo"></img>
        </div>
       <ActionButtons/>        
    </div>

);

export default IntroSection;