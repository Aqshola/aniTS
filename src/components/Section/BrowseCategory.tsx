import { Box, Heading } from "@chakra-ui/react";
import { useRef, useState } from "react";
import Slider from "react-slick";
import SlideArrow from "../Button/SlideArrow";
import VerticalCard from "../Card/VerticalCard";
import LinkButton from "../Button/LinkButton";

export default function BrowseCategory() {
  const settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    focusOnSelect: true,
    afterChange: (currentSlide: number) => _handleChangeSlide(currentSlide),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
    ],
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
    <Box display="flex" flexDir="column">
      <Heading size="md" mb="7">
        Browse by Category
      </Heading>
      <Box
        px={["0", "5"]}
        mb="5"
        w="96"
        display="flex"
        justifyContent="space-between"
      >
        <LinkButton variant="outline">Action</LinkButton>

        <LinkButton variant="outline">Adventure</LinkButton>
        <LinkButton variant="outline">Slice of life</LinkButton>
        <LinkButton variant="ghost" fontWeight="bold" ml="3">
          See All
        </LinkButton>
      </Box>
      <Box position="relative" px={["0", "0", "5"]} w="full">
        {showLeftArrow && (
          <SlideArrow typeArrow="left" onClick={sliderRef.current?.slickPrev} />
        )}

        <Slider {...settings} ref={sliderRef}>
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
        </Slider>

        {showRightArrow && (
          <SlideArrow
            typeArrow="right"
            onClick={sliderRef.current?.slickNext}
          />
        )}
      </Box>
    </Box>
  );
}
