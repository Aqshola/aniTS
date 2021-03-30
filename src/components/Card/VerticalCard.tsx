import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

export default function VerticalCard() {
  return (
    <>
      <Box
        display={["none", "none", "flex"]}
        flexDir="column"
        w="52"
        _hover={{
          transform: "scale(0.9)",
          transition: "0.3s",
        }}
      >
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
        w="44"
        ml="4"
        display={["flex", "flex", "none"]}
        border="1px solid black"
        h="64"
        rounded="md"
        flexDirection="column"
        justifyContent="flex-end"
        p="5"
        position="relative"
        overflow="hidden"
        role="group"
      >
        <Box w="full" h="full">
          <Image
            src="assets/tester2.jpg"
            position="absolute"
            top="0"
            left="0"
            zIndex="0"
            _groupHover={{
              transform: "scale(1.3)",
              transition: "all 0.3s",
            }}
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
      </Box>
    </>
  );
}
