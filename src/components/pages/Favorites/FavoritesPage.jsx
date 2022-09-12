import { useState } from "react";
import { useFavoriteSong } from "../../../hooks";
import { Alert } from "../../atoms/Alert/Alert";
import { SongList } from "../../molecules/SongList/SongList";
import "./FavoritesPage.scss";

export const FavoritesPage = () => {
  const favoriteSongs = useFavoriteSong();
  const [message, setMessage] = useState("");
  return (
    <div className="favoritePage">
      {favoriteSongs?.length === 0 && (
        <h2 className="favoritePage__title">
          Aquí aparecerán las canciones que te gusten
        </h2>
      )}
      <h2 className="favoritePage__title">Favoritos</h2>
      {favoriteSongs?.map((item, index) => (
        <SongList
          track={item.song}
          favorite
          key={index}
          setMessage={setMessage}
        />
      ))}
      <Alert message={message} />
    </div>
  );
};
