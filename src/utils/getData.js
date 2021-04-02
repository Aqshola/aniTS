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
