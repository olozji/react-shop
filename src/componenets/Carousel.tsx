import React from 'react'
import slideData from '../assets/data/Carousel.js';

const Carousel = () => {

    const carouselSlide = slideData.map(image => (
        <div key={image.key}>
            <img src={image.image}/> 
        </div>
    ))


  return (
    <div className='h-100 md:h-full'>
        <img className='h-full' src='../assets/react.svg' alt='carousel'/>
    </div>
  )
}

export default Carousel