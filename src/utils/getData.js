export const getTodayReleases = async () => {
  const day = Intl.DateTimeFormat("en", {
    weekday: "long",
  }).format(new Date());

  const data = await fetching(`https://api.jikan.moe/v3/schedule/${day}`);
  return await data[day.toLowerCase()];
};

export const getNowShowing = async () => {
  const data = await fetch(`https://api.jikan.moe/v3/schedule`);
  const parsedArray = [];

  const notAllow = [
    "request_hash",
    "request_cached",
    "request_cache_expiry",
    "other",
    "unknown",
  ];
  const filterData = Object.keys(data)
    .filter((key) => !notAllow.includes(key))
    .reduce((obj, key) => {
      return {
        ...obj,
        [key]: data[key],
      };
    }, {});
  for (let item in filterData) {
    parsedArray.push(...filterData[item]);
  }

  return parsedArray;
};

export const getTopCategory = async (category) => {
  const data = await fetching(
    `https://api.jikan.moe/v3/top/anime/1/${category}`
  );

  return data.top;
};

export const getDetailAnime = async (id) => {
  const data = await fetching(`https://api.jikan.moe/v3/anime/${id}`);
  return data;
};

export const getRecomend = async (id) => {
  const data = await fetching(
    `https://api.jikan.moe/v3/anime/${id}/recommendations`
  );
  return data.recommendations;
};

export const getSearchAnime = async (name) => {
  const data = await fetching(
    `https://api.jikan.moe/v3/search/anime?q=${name}`
  );
  return data.results;
};

const fetching = async (url) => {
  const data = await fetch(url);
  const body = data.json();

  if (!data.ok) {
    throw new Error(data.statusText);
  }

  return body;
};
