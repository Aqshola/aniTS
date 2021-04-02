import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { MotionBox, MotionImage } from "../Motion/MotionComponent";
import { useHistory } from "react-router-dom";

export default function VerticalCard() {
  const history = useHistory();

  const imageMotion = {
    hover: {
      scale: 1.3,
    },
  };

  const _handleRoute = () => {
    history.push("/detail");
  };

  return (
    <>
      <MotionBox
        display={["none", "none", "flex"]}
        flexDir="column"
        w="52"
        whileTap={{
          scale: 0.9,
        }}
        mb="10"
        onClick={_handleRoute}
      >
        <MotionBox
          w="100%"
          h="64"
          rounded="lg"
          bgColor="gray.700"
          overflow="hidden"
        >
          <Image src="assets/tester2.jpg" boxSize="100%" objectFit="cover" />
        </MotionBox>
        <Box>
          <Heading as="h1" fontWeight="semibold" size="md" w="full">
            Justice League SnyderCut
          </Heading>
          <Text>2021 - Action|Fantasy </Text>
        </Box>
      </MotionBox>
      <MotionBox
        onClick={_handleRoute}
        initial="rest"
        whileHover="hover"
        whileTap={{
          scale: 0.9,
        }}
        w="40"
        mr="4"
        mb="3"
        display={["flex", "flex", "none"]}
        h="64"
        rounded="md"
        flexDirection="column"
        justifyContent="flex-end"
        p="5"
        position="relative"
        overflow="hidden"
        role="group"
      >
        <Box
          w="full"
          h="full"
          display="flex"
          position="absolute"
          top="0"
          left="0"
        >
          <MotionImage
            src="assets/tester2.jpg"
            objectFit="cover"
            zIndex="0"
            variants={imageMotion}
            // _groupHover={{
            //   transform: "scale(1.3)",
            //   transition: "all 0.3s",
            // }}
          />
        </Box>
        <Box
          w="full"
          h="full"
          position="absolute"
          display="block"
          backgroundImage=" linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0.3)
        );"
          left="0"
          top="0"
          zIndex="1"
        ></Box>
        <Box zIndex="2">
          <Heading size="xs" textColor="white">
            Avengers Endgame
          </Heading>
          <Text textColor="white" fontSize="xs">
            2021 - Action|Fantasy{" "}
          </Text>
        </Box>
      </MotionBox>
    </>
  );
}
