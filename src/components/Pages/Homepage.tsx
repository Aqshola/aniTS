import CardDeck from "../Section/TodayAiring";
import NowShowing from "../Section/NowShowing";
import { MotionBox } from "../Motion/MotionComponent";
import TopCategory from "../Section/TopCategory";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>AniTS</title>
        <link rel="canonical" href="https://anits.netlify.app" />
        <meta name="description" content="Anime List web using Typescript" />
      </Helmet>
      <MotionBox
        w="full"
        minH="100vh"
        display="flex"
        flexDir="column"
        variants={item}
      >
        <NowShowing />
        <CardDeck />
        <TopCategory />
      </MotionBox>
    </>
  );
}
