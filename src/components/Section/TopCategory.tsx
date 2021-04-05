import { Box, Heading, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import SlideArrow from "../Button/SlideArrow";
import VerticalCard from "../Card/VerticalCard";
import LinkButton from "../Button/LinkButton";
import { getTopCategory } from "../../utils/getData";
import { todayReleasesType } from "../../Types/fetchDataTypes";

type topTypes = "airing" | "upcoming";

export default function TopCategory() {
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
  const [topCategory, settopCategory] = useState<topTypes>("airing");
  const [dataTop, setdataTop] = useState<todayReleasesType[]>([]);

  const _changeTop = (e: any) => {
    settopCategory(e.target.name);
  };

  useEffect(() => {
    const fetching = async () => {
      const result = await getTopCategory(topCategory);
      setdataTop(result);
    };
    fetching();
  }, [settopCategory, topCategory]);

  return (
    <Box display="flex" flexDir="column" mt="12">
      <Box display="flex">
        <Heading size="md" mb="7">
          Top Anime
        </Heading>
        <Spacer />
        <Box display="flex" w="20" justifyContent="space-between">
          <SlideArrow typeArrow="left" onClick={sliderRef?.slickPrev} />
          <SlideArrow typeArrow="right" onClick={sliderRef?.slickNext} />
        </Box>
      </Box>
      <Box
        mb="5"
        w={["52", "52", "72"]}
        px={["0", "0", "5"]}
        display="flex"
        justifyContent="space-between"
      >
        <LinkButton
          variant="outline"
          isActive={topCategory === "airing" ? true : false}
          name="airing"
          onClick={_changeTop}
        >
          Top Airing
        </LinkButton>
        <LinkButton
          variant="outline"
          isActive={topCategory === "upcoming" ? true : false}
          name="upcoming"
          onClick={_changeTop}
        >
          Top Upcoming
        </LinkButton>
      </Box>

      <Box position="relative" px={["0", "0", "5"]} w="full">
        <Slider {...settings} ref={setsliderRef}>
          {dataTop.map((res) => (
            <VerticalCard
              key={res.mal_id}
              title={res.title}
              image={res.image_url}
              id={res.mal_id}
            />
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
