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
};

export default function HorizontalCard(props: Props) {
  return (
    <>
      <Box
        w="96"
        h="72"
        display={["none", "none", "flex"]}
        flexDirection="column"
        rounded="lg"
      >
        <Box w="full" h="60%" display="flex" rounded="md" overflow="hidden">
          <Image src="/assets/tester.jpg" boxSize="100%" objectFit="cover" />
        </Box>
        <Box w="full" h="40%" padding="2">
          <Flex alignItems="center">
            <Heading fontWeight="bold" size="md">
              {props.title}
            </Heading>
            <Spacer />
            <Flex
              w="28"
              justifyContent="space-between"
              alignItems="center"
              fontWeight="medium"
            >
              <Text fontSize="sm" fontWeight="semibold" color="gray.600">
                143 Menit
              </Text>
              <Text fontSize="sm" fontWeight="semibold" color="gray.600">
                PG13
              </Text>
            </Flex>
          </Flex>
          <Flex direction="column" mt="2">
            <p>2019 - Action | Fantasy</p>
            <Flex alignItems="center" w="32">
              <Icon color="yellow.300" w="7" h="7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </Icon>
              <p>8.5 (2010)</p>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Box
        w="full"
        h="56"
        rounded="md"
        display={["flex", "flex", "none"]}
        backgroundImage="url('assets/tester.jpg')"
        bgSize="cover"
        bgPosition="center"
        mb="20"
      ></Box>
    </>
  );
}
