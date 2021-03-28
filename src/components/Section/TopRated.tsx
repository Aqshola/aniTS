import { Box, Button, Heading } from "@chakra-ui/react";
import { useRef, useState } from "react";
import Slider from "react-slick";
import VerticalCard from "../Card/VerticalCard";

export default function TopRated() {
  const settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    focusOnSelect: true,
    infinite: false,
    afterChange: (currentSlide: number) => _handleChangeSlide(currentSlide),
  };

  const sliderRef = useRef<any>();
  const [showRightArrow, setshowRightArrow] = useState<boolean>(false);
  const [showLeftArrow, setshowLeftArrow] = useState<boolean>(false);

  const _handleChangeSlide = (currentSlide: number) => {
    const leftArrowVisible = currentSlide !== 0;
    const rightArrowVisible = currentSlide <= 5 - 5;
    setshowLeftArrow(leftArrowVisible);
    setshowRightArrow(rightArrowVisible);
  };

  return (
    <Box display="flex" flexDir="column" mt="10">
      <Heading size="md" mb="7">
        Top Rated
      </Heading>
      <Box position="relative" px="5">
        {showLeftArrow && (
          <Button
            position="absolute"
            left="0"
            top="20"
            w="max"
            zIndex="1"
            onClick={sliderRef.current?.slickPrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24px"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Button>
        )}

        <Slider {...settings} ref={sliderRef}>
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
        </Slider>
        {showRightArrow && (
          <Button
            position="absolute"
            right="0"
            top="20"
            w="max"
            zIndex="1"
            onClick={sliderRef.current?.slickNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24px"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        )}
      </Box>
    </Box>
  );
}
