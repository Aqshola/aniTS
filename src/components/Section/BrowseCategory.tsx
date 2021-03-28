import { Box, Button, Heading } from "@chakra-ui/react";
import { useRef, useState } from "react";
import Slider from "react-slick";
import SlideArrow from "../Button/SlideArrow";
import VerticalCard from "../Card/VerticalCard";

export default function BrowseCategory() {
  const settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    focusOnSelect: true,
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
    <Box display="flex" flexDir="column">
      <Heading size="md" mb="7">
        Browse by Category
      </Heading>
      <Box px="5" mb="5" w="96" display="flex" justifyContent="space-between">
        <Button variant="outline" size="sm">
          Action
        </Button>
        <Button variant="outline" size="sm">
          Adventure
        </Button>
        <Button variant="outline" size="sm">
          Slice of Life
        </Button>
        <Button variant="ghost" size="sm" ml="3" fontWeight="bold">
          See All
        </Button>
      </Box>
      <Box position="relative" px="5">
        {showLeftArrow && (
          
          <SlideArrow typeArrow="left" />
        )}

        <Slider {...settings} ref={sliderRef}>
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
        </Slider>

        {showRightArrow && (
          

          <SlideArrow typeArrow="right" />
        )}
      </Box>
    </Box>
  );
}
