import { Box, Heading } from "@chakra-ui/react";
import { useRef, useState } from "react";
import Slider from "react-slick";
import VerticalCard from "../Card/VerticalCard";
import SlideArrow from "../Button/SlideArrow";
import { MotionBox } from "../Motion/MotionComponent";

export default function TopRated(props: { title: string }) {
  const settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    focusOnSelect: true,
    infinite: false,
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
    <MotionBox display="flex" flexDir="column" mt="10" variants={item}>
      <Box display="flex" alignItems="center" mb="7">
        <Heading size="md">{props.title}</Heading>
      </Box>

      <Box position="relative" px={["0", "0", "5"]}>
        {showLeftArrow && (
          <SlideArrow typeArrow="left" onClick={sliderRef.current?.slickPrev} />
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
          <SlideArrow
            typeArrow="right"
            onClick={sliderRef.current?.slickNext}
          />
        )}
      </Box>
    </MotionBox>
  );
}
