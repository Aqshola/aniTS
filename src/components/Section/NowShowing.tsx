import React from "react";
import Slider from "react-slick";
import { Box, Heading } from "@chakra-ui/react";
import HorizontalCard from "../Card/HorizontalCard";

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

  return (
    <Box marginTop="16" display="flex" w="full" flexDir="column">
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
    </Box>
  );
}
