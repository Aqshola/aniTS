import "./App.css";
import Homepage from "./components/Pages/Homepage";
import Detail from "./components/Pages/Detail";
import Nav from "./components/Nav/Nav";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <Container maxW="container.xl" margin="auto" padding="5">
      <Nav />

      <Homepage />
    </Container>
  );
}

export default App;
