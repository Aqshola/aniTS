import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Box, Heading } from "@chakra-ui/react";
import HorizontalCard from "../Card/HorizontalCard";
import { MotionBox } from "../Motion/MotionComponent";
import { todayReleasesType } from "../../Types/fetchDataTypes";
import { getNowShowing } from "../../utils/getData.js";

export default function NowShowing() {
  const [nowShow, setnowShow] = useState<todayReleasesType[]>([]);
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

  useEffect(() => {
    const fetching = async () => {
      const res = await getNowShowing();
      setnowShow(res);
    };

    fetching();
  }, []);

  return (
    <MotionBox marginTop="10" display="flex" w="full" flexDir="column">
      <Heading size="lg" mb="7">
        Now Showing
      </Heading>
      {/* <Skeleton
        minH={["40vh", "40vh", "50vh"]}
        display="block"
        w="full"
        isLoaded={nowShow.length === 0 ? false : true}
      > */}
      <Box position="relative">
        <Box paddingX={["0", "0", "3"]}>
          <Slider {...settings} className="relative" lazyLoad="ondemand">
            {nowShow
              .sort((a, b) => {
                if (a.airing_start < b.airing_start) {
                  return 1;
                }

                return 0;
              })
              .map((res) => {
                return (
                  <HorizontalCard
                    title={res.title}
                    key={res.mal_id}
                    image={res.image_url}
                    id={res.mal_id}
                  />
                );
              })}
          </Slider>
        </Box>
      </Box>
      {/* </Skeleton> */}
    </MotionBox>
  );
}
