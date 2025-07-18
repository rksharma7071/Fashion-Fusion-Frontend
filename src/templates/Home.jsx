import React from "react";
import Slider from "react-slick";
import Slideshow from "../sections/Slideshow";
import CollectionList from "../sections/CollectionList";
import FeatuedCollection from "../sections/FeatuedCollection";

function Home() {
  return (
    <div>
      <Slideshow />
      <CollectionList />
      <FeatuedCollection />
    </div>
  );
}

export default Home;
