import { Box } from "@chakra-ui/react";
import TopRated from "../Section/TopRated";

import NowShowing from "../Section/NowShowing";

export default function Homepage() {
  return (
    <>
      <Box w="full" minH="100vh" display="flex" flexDir="column">
        <NowShowing />
        <TopRated title="Today Releases" />
        <TopRated title="Top Airing" />
        <TopRated title="Top Upcoming" />
      </Box>
    </>
  );
}
