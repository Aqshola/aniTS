import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";

type Props = {
  title: string;
  image: string;
};

export default function HorizontalCard(props: Props) {
  return (
    <>
      <Box
        w="96"
        h="80"
        display={["none", "none", "flex"]}
        flexDirection="column"
        rounded="lg"
      >
        <Box w="full" h="80%" display="flex" rounded="md" overflow="hidden">
          <Image
            src={props.image}
            objectFit="cover"
            w="full"
            filter="blur(0.1px)"
          />
        </Box>
        <Box w="full" padding="2" minH="20%">
          <Flex alignItems="center">
            <Heading fontWeight="bold" size="md">
              {props.title}
            </Heading>
          </Flex>
        </Box>
      </Box>
      <Box
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
      </Box>
    </>
  );
}
