import React from "react";
import Slider from "react-slick";
import { Box, Heading } from "@chakra-ui/react";
import HorizontalCard from "../Card/HorizontalCard";
import { MotionBox } from "../Motion/MotionComponent";

export default function NowShowing() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const item = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <MotionBox
      marginTop="16"
      display="flex"
      w="full"
      flexDir="column"
      variants={item}
    >
      <Heading size="lg" mb="7">
        Now Showing
      </Heading>
      <Box position="relative">
        <Box paddingX={["0", "0", "3"]}>
          <Slider {...settings} className="relative">
            <HorizontalCard title="Shazam" />
            <HorizontalCard title="Captain Thunder" />
            <HorizontalCard title="LOTR" />
            <HorizontalCard title="Lalatina" />
          </Slider>
        </Box>
      </Box>
    </MotionBox>
  );
}
