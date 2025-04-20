import React from "react";
import { carouseldata } from "../constants/carouseldata";
import AliceCarousel from "react-alice-carousel";

function Carousel() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  const items = carouseldata.map((item) => (
    <img className="cursor-pointer" src={item.image} height={400} width={400} alt=""></img>
  ));

  return (
    <div className=" pb-24 pt-20 ">
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        responsive={responsive}
      />
    </div>
    
  );
}

export default Carousel;
