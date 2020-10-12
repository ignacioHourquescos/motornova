
import React from 'react';
import Gallery from "react-photo-gallery";


const BasicRows = props =>{
let photos = [
    {
      src:require('../../images/galeriaFotos/foto1.jpg'),
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      width: 3,
      height: 4
    },
  ]; 
  return(
  <Gallery photos={photos} />
  )

}

export default BasicRows; 

