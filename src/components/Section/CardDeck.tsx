import { Box, Heading, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import Slider from "react-slick";
import VerticalCard from "../Card/VerticalCard";
import SlideArrow from "../Button/SlideArrow";
import { MotionBox } from "../Motion/MotionComponent";
import { todayReleasesType } from "../../Types/fetchDataTypes";

export default function TopRated(props: {
  title: string;
  data: todayReleasesType[];
}) {
  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    focusOnSelect: true,
    infinite: false,
    dots: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          infinite: true,
          swipeToSlide: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          infinite: true,
        },
      },
    ],
  };

  // const sliderRef = useRef<any>();
  const [sliderRef, setsliderRef] = useState<any>();

  return (
    <MotionBox display="flex" flexDir="column" mt="10">
      <Box display="flex" alignItems="center" mb="7">
        <Heading size="md">{props.title}</Heading>
        <Spacer />
        <Box display="flex" w="20" justifyContent="space-between">
          <SlideArrow typeArrow="left" onClick={sliderRef?.slickPrev} />
          <SlideArrow typeArrow="right" onClick={sliderRef?.slickNext} />
        </Box>
      </Box>

      <Box position="relative" px={["0", "0", "5"]}>
        <Slider {...settings} ref={setsliderRef}>
          {props.data.map((res) => {
            return (
              <VerticalCard
                key={res.mal_id}
                image={res.image_url}
                title={res.title}
              />
            );
          })}
        </Slider>
      </Box>
    </MotionBox>
  );
}
