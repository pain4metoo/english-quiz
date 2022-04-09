export const getData = async () => {
  let sounds =
    "https://raw.githubusercontent.com/pain4metoo/words-data/master/words-data.json";

  const fetchSounds = await fetch(sounds);
  const data = await fetchSounds.json();

  return data;
};

export const getImages = async (page: number) => {
  let avatars: Array<string> = [];
  let intervalStart = page * 9;
  let intervalEnd = page * 9 + 9;

  if (page === 1) {
    intervalStart = 1;
    intervalEnd = 10;
  }

  for (let i = intervalStart; i < intervalEnd; i++) {
    let image = `https://raw.githubusercontent.com/pain4metoo/words-data/master/avatars/${i}.jpg`;
    await fetch(image).then((response) => avatars.push(response.url));
  }

  return avatars;
};
