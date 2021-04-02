import CardDeck from "../Section/CardDeck";
import NowShowing from "../Section/NowShowing";
import { MotionBox } from "../Motion/MotionComponent";
import { getTodayReleases } from "../../utils/getData.js";
import { useEffect, useState } from "react";

export default function Homepage() {
  async function getData() {
    let todayRel = await getTodayReleases();
    settodayRelease(todayRel);
  }

  const item = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  useEffect(() => {
    getData();
  }, []);

  const [todayRelease, settodayRelease] = useState([]);

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

        <CardDeck title="Today Releases" data={todayRelease} />
        {/* <CardDeck title="Top Airing" />
        <CardDeck title="Top Upcoming" /> */}
      </MotionBox>
    </>
  );
}
