import {
  Heading,
  Text,
  Box,
  Image,
  Icon,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import VerticalCard from "../Card/VerticalCard";
import { MotionBox } from "../Motion/MotionComponent";
import { useEffect, useState } from "react";
import { getDetailAnime, getRecomend } from "../../utils/getData";
import { details, Recom } from "../../Types/fetchDataTypes";
import { Helmet } from "react-helmet";

interface route {
  id: string;
}

export default function Detail() {
  const { id } = useParams<route>();

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

  const [detail, setdetail] = useState<details>();
  const [recomen, setrecomen] = useState<Recom[]>();

  useEffect(() => {
    const fetching = async () => {
      const res = await getDetailAnime(id);
      setdetail(res);
      const recom = await getRecomend(id);
      setrecomen(recom);
    };

    fetching();
  }, [id]);

  return (
    <>
      <Helmet>
        <title>AniTS - {`${detail?.title}`}</title>

        <meta
          name="description"
          content={`Detail Information for ${detail?.title}`}
        />
      </Helmet>
      <MotionBox
        variants={animateEntrance}
        display="flex"
        flexDirection="column"
        minH="100vh"
        w="full"
        mt="5"
      >
        <Box display="flex" flexDirection={["column", "column", "row"]}>
          <Box
            display="flex"
            order={[2, 2, 1]}
            flexDir="column"
            w={["full", "full", "50%"]}
            p={["0", "0", "5"]}
          >
            <SkeletonText isLoaded={detail !== undefined}>
              <Heading size="lg">{detail?.title}</Heading>
              <Text>
                {detail?.type} - {detail?.premiered || "? premiered"} -{" "}
                {detail?.episodes || "?"} Episodes
              </Text>
              <Box display="flex" alignItems="center" p="0">
                <Icon w="30px" height="30px" p="0" color="yellow.300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </Icon>
                <Text>
                  {detail?.score || "?"} ({detail?.scored_by || "?"})
                </Text>
              </Box>
              <Box mt="5">
                <b>Genre:</b>{" "}
                {detail?.genres.map((genre, i) => {
                  const space = i - 1 === detail.genres.length ? " " : ", ";

                  return genre.name + space;
                })}
              </Box>

              <Text>
                <b>Synopsis:</b> {detail?.synopsis}
              </Text>
            </SkeletonText>
          </Box>
          <Box
            alignItems="center"
            justifyContent="center"
            order={[1, 1, 2]}
            display="flex"
            w={["44", "full", "50%"]}
            h={"auto"}
            rounded="md"
            overflow="hidden"
          >
            <Skeleton
              isLoaded={detail !== undefined && detail.image_url !== undefined}
              minH="64"
              minW="64"
            >
              <Image
                src={detail?.image_url}
                objectFit="cover"
                objectPosition={["top", "top", "center"]}
                boxSize="100%"
              />
            </Skeleton>
          </Box>
        </Box>
        <Box mt="10">
          <Heading size="md">Recomendation</Heading>
          <Skeleton
            minH="64"
            minW="96"
            isLoaded={typeof recomen !== "undefined"}
          >
            <Box
              display="flex"
              flexWrap="wrap"
              w="full"
              mt="5"
              justifyContent="space-between"
            >
              {typeof recomen !== "undefined" && recomen.length > 0 ? (
                recomen.map((recom) => (
                  <VerticalCard
                    title={recom.title}
                    image={recom.image_url}
                    id={recom.mal_id}
                    key={recom.mal_id}
                  />
                ))
              ) : (
                <Heading size="md" fontWeight="medium">
                  No Recommendations{" "}
                </Heading>
              )}
            </Box>
          </Skeleton>
        </Box>
      </MotionBox>
    </>
  );
}
