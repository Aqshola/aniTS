import "./App.css";
import Homepage from "./components/Pages/Homepage";
import Detail from "./components/Pages/Detail";
import Nav from "./components/Nav/Nav";
import { Container } from "@chakra-ui/react";
import { MotionBox } from "./components/Motion/MotionComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrolltoTop from "./components/ScrollTop/ScrollToTop";
import Result from "./components/Pages/Result";

import { HelmetProvider } from "react-helmet-async";
function App() {
  return (
    <HelmetProvider>
      <Container
        maxW="container.xl"
        margin="auto"
        padding="5"
        overflow="hidden"
      >
        <MotionBox initial="hidden" animate="visible">
          <Router>
            <ScrolltoTop />
            <Nav />
            <AnimatePresence>
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/detail/:id" component={Detail} />
                <Route exact path="/result/:name" component={Result} />
              </Switch>
            </AnimatePresence>
          </Router>
        </MotionBox>
      </Container>
    </HelmetProvider>
  );
}

export default App;
