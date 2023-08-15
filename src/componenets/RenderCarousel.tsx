import React, { useState } from 'react'
import { slideData } from '../assets/data/Carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import { Link, To } from 'react-router-dom';


const carouselSlide = slideData.map((image:any) =>
  <div className="h-80 md:h-full">
      <img src={image.src} className="h-full" />
      <div className="absolute transform -translate-y-1/2 md:left-20 top-1/2 mx-8">
        <div className="text-white text-left">
          <h1 className="text-3xl md:text-5xl font-bold">{image.title}</h1>
          <p className="py-4 md:text-2xl">{image.content}</p>
          <button className="btn">
            <Link to={image.path}>바로가기 &#8594;</Link>
          </button>
        </div>
      </div>
    </div>
)

const renderCarousel = () => {

   const [currentIndex, setCurrentIndex ] = useState(0);
   
   const handleChange = (index:any) => {
      setCurrentIndex(index);
   }

  return (
       <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        selectedItem={currentIndex}
        onChange={handleChange}
        >
        {carouselSlide}  
       </Carousel>
  )
}

export default renderCarousel;