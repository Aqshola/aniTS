import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { MotionBox } from "../Motion/MotionComponent";

type Props = {
  title: string;
  image: string;
  id: number;
};

export default function HorizontalCard(props: Props) {
  return (
    <RouterLink to={`/detail/${props.id}`}>
      <MotionBox
        aria-hidden="true"
        w="96"
        h="80"
        display={["none", "none", "flex"]}
        flexDirection="column"
        rounded="lg"
        whileTap={{
          scale: 0.9,
        }}
      >
        <Box w="full" h="80%" display="flex" rounded="md" overflow="hidden">
          <Image
            src={props.image}
            objectFit="cover"
            w="full"
            h="full"
            filter="blur(0.1px)"
            alt={props.title + " poster"}
            loading="lazy"
          />
        </Box>
        <Box w="full" padding="2" minH="20%">
          <Flex alignItems="center">
            <Heading fontWeight="bold" size="md">
              {props.title}
            </Heading>
          </Flex>
        </Box>
      </MotionBox>
      <MotionBox
        aria-hidden="true"
        w="full"
        h="60"
        rounded="md"
        display={["flex", "flex", "none"]}
        backgroundImage={`url('${props.image}')`}
        bgSize="cover"
        bgPosition="center"
        mb="20"
        position="relative"
        flexDirection="column"
        justifyContent="flex-end"
        p="5"
        overflow="hidden"
        whileTap={{
          scale: 0.9,
        }}
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          backgroundImage=" linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0.5)
        );"
          display="block"
          w="full"
          h="full"
        ></Box>
        <Box zIndex="2">
          <Heading size="lg" textColor="white">
            {props.title}
          </Heading>
        </Box>
      </MotionBox>
    </RouterLink>
  );
}
