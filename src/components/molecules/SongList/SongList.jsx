import { icoFavorites } from "../../../svg";
import { alertMessage, insertDeleteSong } from "../../../utils";
import { Input, Label } from "../..";
import "./SongList.scss";

export const SongList = ({ track, favorite, setMessage, onClick }) => {
  const onsubmit = (song) => {
    insertDeleteSong(song, setMessage);
    alertMessage();
  };

  return (
    <div className="songList" onClick={() => onClick({ ...track })}>
      <div className="songList__img">
        <img src={track.album.images[0].url} alt="album" className="img" />
      </div>
      <div className="songList__infoSection">
        <p className="songList__info">
          <Label name={track.name} className="songList__name" />
          <Label
            name={track.artists.map((artist) => artist.name).join(",")}
            className="songList__singer"
          />
        </p>
        <Input
          type="checkbox"
          id={track.name}
          defaultChecked={favorite}
          onClick={() => onsubmit(track)}
        />
        <Label name={icoFavorites} htmlFor={track.name} />
      </div>
    </div>
  );
};
