import { Container } from "@chakra-ui/react";
import TopRated from "../Section/TopRated";
import BrowseCategory from "../Section/BrowseCategory";
import NowShowing from "../Section/NowShowing";
import Nav from "../Nav/Nav";

export default function Homepage() {
  return (
    <Container
      maxW="container.xl"
      margin="auto"
      minH="100vh"
      display="flex"
      flexDir="column"
      padding="5"
    >
      <Nav />
      <NowShowing />
      <BrowseCategory />
      <TopRated />
    </Container>
  );
}
