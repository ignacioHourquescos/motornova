
import React from 'react';
import Gallery from 'react-photo-gallery';
import './PhotoGallery.css';


const BasicRows = props =>{
let photos = [
  
    {
      src:require('../../images/galeriaFotos/foto4.jpg'),
      width: 2,
      height: 1
    },    {
      src:require('../../images/galeriaFotos/foto5.jpg'),
      width: 2,
      height: 1
    },       {
      src:require('../../images/galeriaFotos/foto6.jpg'),
      width: 2,
      height: 1
    },
    {
      src:require('../../images/galeriaFotos/foto7.jpg'),
      width: 2,
      height: 1
    },
    {
      src:require('../../images/galeriaFotos/foto8.jpg'),
      width: 4,
      height: 3
    },
    {
      src:require('../../images/galeriaFotos/foto9.png'),
      width: 3,
      height: 2
    },
 
    
    {
      src:require('../../images/galeriaFotos/foto1.jpg'),
      width: 4,
      height: 1
    },

  ]; 
  return(
  <div className="container">
  <Gallery photos={photos} />
  </div>
  )

}

export default BasicRows; 

