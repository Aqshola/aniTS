import { Container } from "@chakra-ui/react";
import "./App.css";
import TopRated from "./components/Section/TopRated";
import BrowseCategory from "./components/Section/BrowseCategory";
import NowShowing from "./components/Section/NowShowing";
import Nav from "./components/Nav/Nav";

function App() {
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

export default App;
