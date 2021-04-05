import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";
import { MotionBox, MotionImage } from "../Motion/MotionComponent";
import { Link } from "react-router-dom";

export default function VerticalCard(props: {
  title?: string;
  image?: string;
  id: number;
}) {
  const imageMotion = {
    hover: {
      scale: 1.3,
    },
  };

  return (
    <Link to={`/detail/${props.id}`}>
      <MotionBox
        aria-hidden="true"
        display={["none", "none", "flex"]}
        flexDir="column"
        w="52"
        whileTap={{
          scale: 0.9,
        }}
        mb="10"
      >
        <MotionBox
          w="100%"
          h="64"
          rounded="lg"
          bgColor="gray.700"
          overflow="hidden"
        >
          <Image
            src={props.image}
            boxSize="100%"
            w="full"
            h="full"
            objectFit="cover"
            alt={props.title + " poster"}
            loading="lazy"
          />
        </MotionBox>
        <Box>
          <Heading as="h1" fontWeight="semibold" size="md" w="full">
            {props.title}
          </Heading>
        </Box>
      </MotionBox>
      <MotionBox
        aria-hidden="true"
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
            src={props.image}
            objectFit="cover"
            zIndex="0"
            variants={imageMotion}
            alt={props.title + " poster"}
            w="full"
            h="full"
            loading="lazy"
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
          rgba(0, 0, 0, 0.7)
        );"
          left="0"
          top="0"
          zIndex="1"
        ></Box>
        <Box zIndex="2">
          <Heading size="xs" textColor="white">
            {props.title}
          </Heading>
        </Box>
      </MotionBox>
    </Link>
  );
}
