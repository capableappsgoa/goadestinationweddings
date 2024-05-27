import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/photos/IMG_0067.jpg"
import image2 from "../assets/photos/IMG_0237.jpg"
import image3 from "../assets/photos/IMG_0253.jpg"
import image4 from "../assets/photos/IMG_0268.jpg"
import image5 from "../assets/photos/IMG_0430.jpg"
import image6 from "../assets/photos/IMG_0622.jpg"
import image7 from "../assets/photos/IMG_0710.jpg"
import image8 from "../assets/photos/IMG_4005.jpg"
import image9 from "../assets/photos/IMG_7080.jpg"
import image10 from "../assets/photos/IMG_7871.jpg"
import image11 from "../assets/photos/IMG_7782.jpg"
import image12 from "../assets/photos/IMG_8753.jpg"
import image13 from "../assets/photos/IMG_9201.jpg"
import "./carousle.css"

const Carousle = () => {



  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    Arrow: false,
    accessibility: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='responsiveCarousleWrapper'>
    <div className='responsiveCarousleWrapperChildren'>
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={image1} alt='image'/>
        </div>
        <div>
        <img src={image2} alt='image'/>
        </div>
        <div>
        <img src={image3} alt='image'/>
        </div>
        <div>
        <img src={image4} alt='image'/>
        </div>
        <div>
        <img src={image5} alt='image'/>
        </div>
        <div>
        <img src={image6} alt='image'/>
        </div>
        <div>
        <img src={image7} alt='image'/>
        </div>
        <div>
        <img src={image8} alt='image'/>
        </div>
        <div>
        <img src={image9} alt='image'/>
        </div>
        <div>
        <img src={image10} alt='image'/>
        </div>
        <div>
        <img src={image11} alt='image'/>
        </div>
        <div>
        <img src={image12} alt='image'/>
        </div>
        <div>
        <img src={image13} alt='image'/>
        </div>
      </Slider>
    </div>
    </div>
    </div>
  );
}

export default Carousle