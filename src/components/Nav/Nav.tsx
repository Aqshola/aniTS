import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
} from "@chakra-ui/react";
export default function Nav() {
  return (
    <Box display="flex" w="full" py="3" alignItems="center">
      <Heading size="md">MovieApp</Heading>

      <Spacer />
      <InputGroup w={["40", "max-content"]}>
        <InputLeftElement
          children={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="20px"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          }
        />
        <Input placeholder="Search Anime" />
      </InputGroup>
    </Box>
  );
}
