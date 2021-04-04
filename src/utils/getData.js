export const getTodayReleases = async () => {
  const day = Intl.DateTimeFormat("en", {
    weekday: "long",
  }).format(new Date());

  const data = await fetch(`https://api.jikan.moe/v3/schedule/${day}`);
  const parsedData = await data.json();

  if (!data.ok) {
    throw new Error(data.statusText);
  }
  return await parsedData[day.toLowerCase()];
};

export const getNowShowing = async () => {
  const data = await fetch(`https://api.jikan.moe/v3/schedule`);
  const parsedData = await data.json();
  const parsedArray = [];

  if (!data.ok) {
    throw new Error(data.statusText);
  }

  const notAllow = [
    "request_hash",
    "request_cached",
    "request_cache_expiry",
    "other",
    "unknown",
  ];
  const filterData = Object.keys(parsedData)
    .filter((key) => !notAllow.includes(key))
    .reduce((obj, key) => {
      return {
        ...obj,
        [key]: parsedData[key],
      };
    }, {});
  for (let item in filterData) {
    parsedArray.push(...filterData[item]);
  }

  return parsedArray;
};

export const getTopCategory = async (category) => {
  const data = await fetch(`https://api.jikan.moe/v3/top/anime/1/${category}`);
  const parsedData = await data.json();

  if (!data.ok) {
    throw new Error(data.statusText);
  }
  return parsedData.top;
};

export const getDetailAnime = async (id) => {
  const data = await fetch(`https://api.jikan.moe/v3/anime/${id}`);
  const parsedData = await data.json();
  if (!data.ok) {
    throw new Error(data.statusText);
  }

  return parsedData;
};

export const getRecomend = async (id) => {
  const data = await fetch(
    `https://api.jikan.moe/v3/anime/${id}/recommendations`
  );
  const parsedData = await data.json();

  if (!data.ok) {
    throw new Error(data.statusText);
  }
  return parsedData.recommendations;
};
