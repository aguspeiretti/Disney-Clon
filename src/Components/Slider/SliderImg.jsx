import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import "./SliderImg.css"

function SliderImg() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };
      return (
        <div className='sliderContainer'>
        <Slider {...settings}>
          <div>
            <img src="/images/slider-badging.jpg" alt="" />
          </div>
          <div>
          <img src="/images/slider-badag.jpg" alt="" />
          </div>
          <div>
          <img src="/images/slider-scale.jpg" alt="" />
          </div>
          <div>
          <img src="/images/slider-scales.jpg" alt="" />
          </div>
        
        </Slider>
        </div>
    
  )
}

export default SliderImg