import React from "react";
import Slider from "react-slick";

function Slideshow() {
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <div className="">
      <Slider {...settings} className="">
        <div className="bg-pink-500">
          <img src="/slide1.png" />
        </div>
        <div className="bg-gray-500 h-80">
          <img src="/slide2.png" />
        </div>
        <div className="bg-red-500 h-80">
          <img src="/slide3.png" />
        </div>
        <div className="bg-blue-500 h-80">
          <img src="/slide4.png" />
        </div>
        <div className="bg-blue-500 h-80">
          <img src="/slide5.png" />
        </div>
        <div className="bg-blue-500 h-80">
          <img src="/slide6.png" />
        </div>
      </Slider>
    </div>
  );
}

export default Slideshow;
