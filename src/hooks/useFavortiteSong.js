import { useEffect, useState } from "react";
import { createDB, getAllSong } from "../services";

export const useFavortiteSong = () => {
  const [favoriteSongs, setFavoriteSongs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const db = await createDB();
      setFavoriteSongs(await getAllSong(db));
    };
    getData();
  }, [favoriteSongs]);

  return favoriteSongs;
};
