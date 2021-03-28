import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

export default function VerticalCard() {
  return (
    <Box display="flex" flexDir="column" w="52">
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
  );
}
