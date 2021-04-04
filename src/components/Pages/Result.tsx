import { Heading, Box } from "@chakra-ui/react";
import { MotionBox } from "../Motion/MotionComponent";
import { useParams } from "react-router-dom";
import VerticalCard from "../Card/VerticalCard";
import { useEffect, useState } from "react";
import { getSearchAnime } from "../../utils/getData";
import { todayReleasesType } from "../../Types/fetchDataTypes";

interface RouteInfo {
  name: string;
}

export default function Result() {
  let { name } = useParams<RouteInfo>();
  const animateEntrance = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeInOut" },
    },

    exit: {
      y: 30,
      opacity: 0,
      transition: { ease: "easeInOut" },
    },
  };

  useEffect(() => {
    const fetching = async () => {
      const res = await getSearchAnime(name);
      setsearchData(res);
    };

    fetching();
  }, [name]);

  const [searchData, setsearchData] = useState<todayReleasesType[]>([]);

  return (
    <MotionBox minH="100vh" p="5" variants={animateEntrance}>
      <Heading textAlign="center" fontWeight="normal">
        Found {searchData.length} result <br></br>for "{name}"
      </Heading>
      <Box
        mt="10"
        display="flex"
        w="full"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        {searchData.map((data) => (
          <VerticalCard
            title={data.title}
            image={data.image_url}
            key={data.mal_id}
            id={data.mal_id}
          />
        ))}
      </Box>
    </MotionBox>
  );
}
