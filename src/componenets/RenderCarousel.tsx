import React, { useState } from 'react'
import { slideData } from '../assets/data/Carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'


const carouselSlide = slideData.map(image => (
  <div key={image.alt}>
      <div className='relative'>
        <img src={image.src}/>
        <div className="m-3 absolute z-10 top-40 text-white text-7xl font-sans">
        {image.title}<br/>
        <div className='mt-5 text-2xl'>
        {image.content}
        </div>
      </div>
        </div>
      
  </div>
))

const renderCarousel = () => {

   const [currentIndex, setCurrentIndex ] = useState("");
   const handleChange = (index:any) => {
      setCurrentIndex(index);
   }

  return (
    <div className='h-50 md:h-full'>
       <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        selectedItem={slideData[currentIndex]}
        onChange={handleChange}
        >
        {carouselSlide}  
       </Carousel>
    </div>
  )
}

export default renderCarousel;