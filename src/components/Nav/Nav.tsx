import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function Nav() {
  const history = useHistory();
  const _handleChange = (e: any) => {
    setkeyboardValue(e.target.value);
  };

  const _handleRoute = (e: any) => {
    if (e.key === "Enter") {
      history.push("/result/" + keyboardValue);
      setkeyboardValue("");
    }
  };

  const [keyboardValue, setkeyboardValue] = useState<string>("");

  return (
    <Box display="flex" w="full" py="3" alignItems="center">
      <Link to="/">
        <Heading size="md" cursor="pointer">
          MovieApp
        </Heading>
      </Link>

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
        <Input
          placeholder="Search Anime"
          onChange={_handleChange}
          onKeyPress={_handleRoute}
          value={keyboardValue}
        />
      </InputGroup>
    </Box>
  );
}
