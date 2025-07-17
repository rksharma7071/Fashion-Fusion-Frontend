import React from "react";
import Slider from "react-slick";

function Slideshow() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="">
      <Slider {...settings} className="">
        <div className="bg-pink-500 h-80">
          <img src="/slide1.jpg"/>
        </div>
        <div className="bg-gray-500 h-80">
          <img src="/slide2.jpg"/>
        </div>
        <div className="bg-red-500 h-80">
          <img src="/slide3.jpg"/>
        </div>
        <div className="bg-blue-500 h-80">
          <img src="/slide4.jpg"/>
        </div>
      </Slider>
    </div>
  );
}

export default Slideshow;
