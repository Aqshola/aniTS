import { Box } from "@chakra-ui/react";
import TopRated from "../Section/TopRated";
import BrowseCategory from "../Section/BrowseCategory";
import NowShowing from "../Section/NowShowing";

export default function Homepage() {
  return (
    <>
      <Box w="full" minH="100vh" display="flex" flexDir="column">
        <NowShowing />
        <BrowseCategory />
        <TopRated />
      </Box>
    </>
  );
}
