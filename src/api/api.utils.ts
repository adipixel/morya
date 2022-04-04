import songs from "./songs";

export function getCategories() {
  return Object.keys(songs).map((name) => ({
    catName: name,
    title: songs[name].title,
  }));
}

export function getCategory(category: string) {
  return Object.keys(songs[category]["list"]).map((songName) => ({
    songName,
    title: songs[category]["list"][songName].title,
  }));
}

export function getSong(categoryName: string, songName: string) {
  return songs[categoryName]["list"][songName];
}
