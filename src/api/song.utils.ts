import { Categories } from "./songs";

export function getSong(
  categoryName: string,
  songName: string,
  songs: Categories
) {
  if (Object.keys(songs).length === 0) {
    return {};
  }
  return songs[categoryName]["list"][songName];
}

// class SongUtils {
//   songs: Categories;

//   constructor(songs: Categories) {
//     this.songs = songs;
//   }

//   getCategories() {
//     return Object.keys(this.songs).map((name) => ({
//       catName: name,
//       title: this.songs[name].title,
//     }));
//   }

//   getCategory(category: string) {
//     return Object.keys(this.songs[category]["list"]).map((songName) => ({
//       songName,
//       title: this.songs[category]["list"][songName].title,
//     }));
//   }

//   getSong(categoryName: string, songName: string) {
//     return this.songs[categoryName]["list"][songName];
//   }
// }

// let songUtils: SongUtils = new SongUtils({});

// export function getSongUtils() {
//   return songUtils;
// }

// export function setSongUtils(songs: Categories) {
//   if (!songUtils && songs) {
//     songUtils = new SongUtils(songs);
//   }
//   return songUtils;
// }
