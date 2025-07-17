import React from "react";
import Slider from "react-slick";
import Slideshow from "../sections/Slideshow";
import CollectionList from "../sections/CollectionList";

function Home() {
  return (
    <div>
      <Slideshow />
      <CollectionList />
    </div>
  );
}

export default Home;
