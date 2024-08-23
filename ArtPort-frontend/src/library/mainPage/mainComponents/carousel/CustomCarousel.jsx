import React from "react";
import Carousel from "react-multi-carousel";


const defaultResponsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const CustomCarousel = ({ items, responsive = defaultResponsive }) => {
  return (
    <Carousel responsive={responsive}>
      {items.map((item, index) => (
        <div key={index} className="carousel-item">
          {item}
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;