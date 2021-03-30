import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

export default function VerticalCard() {
  return (
    <>
      <Box display={["none", "none", "flex"]} flexDir="column" w="52">
        <Box w="100%" h="64" rounded="lg" bgColor="gray.700" overflow="hidden">
          <Image src="assets/tester2.jpg" boxSize="100%" objectFit="cover" />
        </Box>
        <Box>
          <Heading as="h1" fontWeight="semibold" size="md" w="full">
            Justice League SnyderCut
          </Heading>
          <Text>2021 - Action|Fantasy </Text>
        </Box>
      </Box>
      <Box
        w="38"
        ml="2"
        display={["flex", "flex", "none"]}
        border="1px solid black"
        h="60"
        backgroundImage="url('assets/tester2.jpg')"
        backgroundSize="cover"
        bgPosition="center"
        rounded="md"
        flexDirection="column"
        justifyContent="flex-end"
        p="5"
        position="relative"
      >
        <Box
          w="full"
          h="full"
          position="absolute"
          display="block"
          backgroundImage=" linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0.5)
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
      </Box>
    </>
  );
}
