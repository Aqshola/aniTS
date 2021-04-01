import "./App.css";
import Homepage from "./components/Pages/Homepage";
import Detail from "./components/Pages/Detail";
import Nav from "./components/Nav/Nav";
import { Container } from "@chakra-ui/react";
import { MotionBox } from "./components/Motion/MotionComponent";

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
    <MotionBox
      as={Container}
      maxW="container.xl"
      margin="auto"
      padding="5"
      initial="hidden"
      animate="visible"
      variants={containerAnimate}
    >
      <Nav />
      <Homepage />
    </MotionBox>
  );
}

export default App;
