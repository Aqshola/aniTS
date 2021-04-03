import CardDeck from "../Section/TodayAiring";
import NowShowing from "../Section/NowShowing";
import { MotionBox } from "../Motion/MotionComponent";
import BrowseCategory from "../Section/TopCategory";

export default function Homepage() {
  const item = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <>
      <MotionBox
        w="full"
        minH="100vh"
        display="flex"
        flexDir="column"
        variants={item}
      >
        <NowShowing />
        <CardDeck />
        <BrowseCategory />
      </MotionBox>
    </>
  );
}
