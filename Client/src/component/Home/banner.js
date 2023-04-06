import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { styled } from "@mui/material";
import { bannerData } from "../../constact/data";

const Image = styled("img")({
  width: "100%",
  height: 300,
});

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const Banner = () => {
  return (
    <Carousel
      responsive={responsive}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlaySpeed={1000}
    >
      {bannerData.map((data, index) => (
        <Image src={data.url} alt="nav" key={index} />
      ))}
    </Carousel>
  );
};
