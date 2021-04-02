import { Heading, Text, Box, Image, Icon } from "@chakra-ui/react";
import VerticalCard from "../Card/VerticalCard";
import { MotionBox } from "../Motion/MotionComponent";

export default function Detail() {
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
    <MotionBox
      variants={animateEntrance}
      display="flex"
      flexDirection="column"
      minH="100vh"
      w="full"
      mt="5"
    >
      <Box display="flex" flexDirection={["column", "column", "row"]}>
        <Box
          display="flex"
          order={[2, 2, 1]}
          flexDir="column"
          w={["full", "full", "50%"]}
          p={["0", "0", "5"]}
        >
          <Heading size="lg">Justice League Snyder Cut</Heading>
          <Text>17+ | 2021 | 12 Episode</Text>
          <Box display="flex" alignItems="center" p="0">
            <Icon w="30px" height="30px" p="0" color="yellow.300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </Icon>
            <Text>8.5(54)</Text>
          </Box>
          <Box mt="5">
            <b>Genre:</b> Action, Fantasy, Adventure
          </Box>
          <Text>
            <b>Director:</b> Aqshol
          </Text>
          <Text>
            <b>Synopsis:</b> Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Libero deserunt sint eius. Cupiditate perferendis fugit magnam
            porro sint temporibus ex fuga eos, assumenda sapiente exercitationem
            asperiores aspernatur, deserunt quibusdam rem? Impedit,
            reprehenderit doloribus rem fugit voluptatibus in ullam ut! Maxime,
            qui ipsa. Quis unde esse voluptate error id nemo eveniet.
          </Text>
        </Box>
        <Box
          order={[1, 1, 2]}
          display="flex"
          w={["full", "full", "70%"]}
          h={["60", "96"]}
          rounded="md"
          overflow="hidden"
        >
          <Image src="assets/tester.jpg" objectFit="cover" boxSize="100%" />
        </Box>
      </Box>
      <Box mt="10">
        <Heading size="md">Recomendation</Heading>
        <Box
          display="flex"
          flexWrap="wrap"
          w="full"
          mt="5"
          justifyContent="space-between"
        >
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
        </Box>
      </Box>
    </MotionBox>
  );
}
