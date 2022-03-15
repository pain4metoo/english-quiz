export const getData = async () => {
  let sounds =
    "https://raw.githubusercontent.com/pain4metoo/words-data/master/words-data.json";

  const fetchSounds = await fetch(sounds);
  const data = await fetchSounds.json();

  return data;
};
