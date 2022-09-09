import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useFavortiteSong } from "../../../hooks";
import { getAllSongsFavoriteIndicator } from "../../../utils";
import { Alert } from "../../atoms/Alert/Alert";
import { SongList } from "../../molecules/SongList/SongList";
import "./HomePage.scss";
export const HomePage = () => {
  const { playlist } = useSelector((state) => state.playlist);
  const favoriteSongs = useFavortiteSong();
  const [songs, setSongs] = useState([]);
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    if (favoriteSongs.length > 0 && playlist.length > 0) {
      const result = getAllSongsFavoriteIndicator(favoriteSongs, playlist);
      setSongs(result);
    }
  }, [favoriteSongs, playlist]);

  useEffect(() => {
    setSongs(playlist);
  }, [playlist]);

  return (
    <div className="homePage">
      <h2 className="homePage__title">PlayList</h2>
      <br />
      {songs?.map((item, index) => (
        <SongList
          track={item.track}
          favorite={item.favorite}
          key={index}
          setMessage={setMessage}
        />
      ))}
      <Alert message={message} />
    </div>
  );
};
