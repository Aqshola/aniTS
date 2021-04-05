import { Box, Heading, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import VerticalCard from "../Card/VerticalCard";
import SlideArrow from "../Button/SlideArrow";
import { MotionBox } from "../Motion/MotionComponent";
import { mainAnimeType } from "../../Types/fetchDataTypes";
import { getTodayReleases } from "../../utils/getData.js";

export default function TodayAiring() {
  const settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    focusOnSelect: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const [sliderRef, setsliderRef] = useState<any>();
  const [dataAiring, setdataAiring] = useState<mainAnimeType[]>([]);

  useEffect(() => {
    const fetching = async () => {
      const res = await getTodayReleases();
      setdataAiring(res);
    };

    fetching();
  }, []);

  return (
    <MotionBox display="flex" flexDir="column" mt={["5", "5", "0"]}>
      <Box display="flex" alignItems="center" mb="7">
        <Heading size="md">Today Releases</Heading>
        <Spacer />
        <Box display="flex" w="20" justifyContent="space-between">
          <SlideArrow typeArrow="left" onClick={sliderRef?.slickPrev} />
          <SlideArrow typeArrow="right" onClick={sliderRef?.slickNext} />
        </Box>
      </Box>

      <Box position="relative" px={["0", "0", "5"]}>
        <Slider {...settings} ref={setsliderRef}>
          {dataAiring.map((res) => {
            return (
              <VerticalCard
                key={res.mal_id}
                image={res.image_url}
                title={res.title}
                id={res.mal_id}
              />
            );
          })}
        </Slider>
      </Box>
    </MotionBox>
  );
}
