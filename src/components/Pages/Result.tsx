import { Heading, Box, Skeleton } from "@chakra-ui/react";
import { MotionBox } from "../Motion/MotionComponent";
import { useParams } from "react-router-dom";
import VerticalCard from "../Card/VerticalCard";
import { useEffect, useState } from "react";
import { getSearchAnime } from "../../utils/getData";
import { todayReleasesType } from "../../Types/fetchDataTypes";
import { Helmet } from "react-helmet";

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

  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetching = async () => {
      setloading(true);
      const res = await getSearchAnime(name);
      setsearchData(res);
      setloading(false);
    };

    fetching();
  }, [name]);

  const [searchData, setsearchData] = useState<todayReleasesType[]>([]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>AniTS - result {`${name}`}</title>

        <meta name="description" content={`Search Result for ${name}`} />
      </Helmet>
      <MotionBox minH="100vh" p="5" variants={animateEntrance}>
        <Heading textAlign="center" fontWeight="normal">
          Found {loading ? "?" : searchData.length} result <br></br>for "{name}"
        </Heading>
        <Skeleton isLoaded={!loading} minH="64" minW="96">
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
        </Skeleton>
      </MotionBox>
    </>
  );
}
