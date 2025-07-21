import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick/lib/slider";

function FeatuedCollection() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-center pb-5 text-3xl font-medium uppercase">
        Hot Deals
      </h1>
      <div className="">
        <Slider {...settings} className="">
          <Link to={"/"} className="p-2">
            <img src="/slide1.png" />
          </Link>
          <Link to={"/"} className="p-2">
            <img src="/slide2.png" />
          </Link>
          <Link to={"/"} className="p-2">
            <img src="/slide3.png" />
          </Link>
          <Link to={"/"} className="p-2">
            <img src="/slide4.png" />
          </Link>
          <Link to={"/"} className="p-2">
            <img src="/slide5.png" />
          </Link>
          <Link to={"/"} className="p-2">
            <img src="/slide6.png" />
          </Link>
        </Slider>
      </div>
    </div>
  );
}

export default FeatuedCollection;
