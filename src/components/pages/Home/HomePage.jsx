import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useFavoriteSong } from "../../../hooks";
import { getAllSongsFavoriteIndicator } from "../../../utils";
import { BodyTemplate } from "../..";

export const HomePage = () => {
  const { playlist } = useSelector((state) => state.playlist);
  const favoriteSongs = useFavoriteSong();
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    if (favoriteSongs?.length > 0 && playlist.length > 0) {
      const result = getAllSongsFavoriteIndicator(favoriteSongs, playlist);
      setSongs(result);
    }
  }, [favoriteSongs, playlist]);

  useEffect(() => {
    setSongs(playlist);
  }, [playlist]);

  return <BodyTemplate title="Lista reproducción" songs={songs} />;
};
