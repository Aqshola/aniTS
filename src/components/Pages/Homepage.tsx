import { Box } from "@chakra-ui/react";
import TopRated from "../Section/TopRated";
import NowShowing from "../Section/NowShowing";
import { MotionBox } from "../Motion/MotionComponent";

export default function Homepage() {
  const item = {
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
  return (
    <>
      <MotionBox
        w="full"
        minH="100vh"
        display="flex"
        flexDir="column"
        variants={item}
      >
        <NowShowing />
        <TopRated title="Today Releases" />
        <TopRated title="Top Airing" />
        <TopRated title="Top Upcoming" />
      </MotionBox>
    </>
  );
}
