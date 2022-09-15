import { createDB, insertSong } from "../services";

export const getAllSongsFavoriteIndicator = (favoriteSongs, allSongs) => {
  return allSongs.map((songPlaylist) => {
    const favorite = favoriteSongs.find(
      (SongFavorite) =>
        SongFavorite.track.album.id === songPlaylist.track.album.id
    );
    return {
      ...songPlaylist,
      favorite: favorite ? true : false,
    };
  });
};

export const alertMessage = () => {
  const x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
};

export const insertDeleteSong = async (song, setMessage) => {
  const db = await createDB();
  const result = await insertSong(db, {
    id: song.id,
    track: song,
  });
  setMessage(result);
};
