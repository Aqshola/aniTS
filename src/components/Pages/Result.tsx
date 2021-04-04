import { Heading, Box } from "@chakra-ui/react";
import { MotionBox } from "../Motion/MotionComponent";
import { useParams } from "react-router-dom";
import VerticalCard from "../Card/VerticalCard";

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

  return (
    <MotionBox minH="100vh" p="5" variants={animateEntrance}>
      <Heading textAlign="center" fontWeight="normal">
        Found 5 result <br></br>for "{name}"
      </Heading>
      <Box
        mt="10"
        display="flex"
        w="full"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        {/* <VerticalCard /> */}
      </Box>
    </MotionBox>
  );
}
