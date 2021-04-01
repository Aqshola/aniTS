import "./App.css";
import Homepage from "./components/Pages/Homepage";
import Detail from "./components/Pages/Detail";
import Nav from "./components/Nav/Nav";
import { Container } from "@chakra-ui/react";
import { MotionBox } from "./components/Motion/MotionComponent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const containerAnimate = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <Container maxW="container.xl" margin="auto" padding="5">
      <Nav />
      <MotionBox variants={containerAnimate} initial="hidden" animate="visible">
        <Router>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/detail">
              <Detail />
            </Route>
          </Switch>
        </Router>
      </MotionBox>
    </Container>
  );
}

export default App;
