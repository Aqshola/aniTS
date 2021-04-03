import CardDeck from "../Section/CardDeck";
import NowShowing from "../Section/NowShowing";
import { MotionBox } from "../Motion/MotionComponent";
import { getNowShowing, getTodayReleases } from "../../utils/getData.js";
import { useEffect, useState } from "react";

export default function Homepage() {
  async function getData() {
    let todayRel = await getTodayReleases();
    let nowShow = await getNowShowing();

    settodayRelease(todayRel);
    setnowShowing(nowShow);
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
  const [nowShowing, setnowShowing] = useState<any>([]);

  return (
    <>
      <MotionBox
        w="full"
        minH="100vh"
        display="flex"
        flexDir="column"
        variants={item}
      >
        <NowShowing data={nowShowing} />

        <CardDeck title="Today Releases" data={todayRelease} />
        {/* <CardDeck title="Top Airing" />
        <CardDeck title="Top Upcoming" /> */}
      </MotionBox>
    </>
  );
}
