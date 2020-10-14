
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './LogoCarrousel.css';

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots:false,
      infinite: false,
      arrows:false,
      slidesToShow: 8,
      slidesToScroll: 3,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 1000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint:768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 4,
            infinite: true,
        
          }
        }
      
      ]
    };
    return (
      <div className="logo_carrousel">
        <Slider {...settings}>
        <div><img id="logo" src={require('../../images/galeriaFotos/logos blanco/i01_logo1.png')} alt="logo"></img></div>
        <div><img id="logo" src={require('../../images/galeriaFotos/logos blanco/i02_logo2.png')} alt="logo"></img></div>
        <div><img id="logo" src={require('../../images/galeriaFotos/logos blanco/i03_logo3.png')} alt="logo"></img></div>
        <div><img id="logo" src={require('../../images/galeriaFotos/logos blanco/i04_logo4.png')} alt="logo"></img></div>
        <div><img id="logo" src={require('../../images/galeriaFotos/logos blanco/i05_logo5.png')} alt="logo"></img></div>
        <div><img id="logo" src={require('../../images/galeriaFotos/logos blanco/i06_logo6.png')} alt="logo"></img></div>
        <div><img id="logo" src={require('../../images/galeriaFotos/logos blanco/i07_logo7.png')} alt="logo"></img></div>
        <div><img id="logo" src={require('../../images/galeriaFotos/logos blanco/i08_logo8.png')} alt="logo"></img></div>
        <div><img id="logo" src={require('../../images/galeriaFotos/logos blanco/i09_logo9.png')} alt="logo"></img></div>
        <div><img id="logo" src={require('../../images/galeriaFotos/logos blanco/i10_logo10.png')} alt="logo"></img></div>
        <div><img id="logo" src={require('../../images/galeriaFotos/logos blanco/i11_logo11.png')} alt="logo"></img></div>
        <div><img id="logo" src={require('../../images/galeriaFotos/logos blanco/i12_logo12.png')} alt="logo"></img></div>
        <div><img id="logo" src={require('../../images/galeriaFotos/logos blanco/i14_logo14.png')} alt="logo"></img></div>
        <div><img id="logo" src={require('../../images/galeriaFotos/logos blanco/i15_logo15.png')} alt="logo"></img></div>
        <div><img id="logo" src={require('../../images/galeriaFotos/logos blanco/i16_logo16.png')} alt="logo"></img></div>
        <div><img id="logo" src={require('../../images/galeriaFotos/logos blanco/i17_logo17.png')} alt="logo"></img></div>
        </Slider>
      </div>
    );
  }
}

