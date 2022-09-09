import { useState } from "react";
import { useFavortiteSong } from "../../../hooks";
import { Alert } from "../../atoms/Alert/Alert";
import { SongList } from "../../molecules/SongList/SongList";

export const FavoritesPage = () => {
  const favoriteSongs = useFavortiteSong();
  const [message, setMessage] = useState("");
  
  return (
    <>
      {favoriteSongs.length === 0 && (
        <h1>Aquí aparecerán las canciones que te gusten</h1>
      )}
      {favoriteSongs?.map((item, index) => (
        <SongList track={item.song} favorite key={index} setMessage={setMessage}/>
      ))}
      <Alert message={message} />
    </>
  );
};
