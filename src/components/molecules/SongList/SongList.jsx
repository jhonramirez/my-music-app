import { icoFavorites } from "../../../svg";
import { alertMessage, insertDeleteSong } from "../../../utils";
import { Input } from "../../atoms/Input/Input";
import { Label } from "../../atoms/Label/Label";
import "./SongList.scss";

export const SongList = ({ track, favorite, setMessage }) => {
  const onsubmit = (song) => {
    insertDeleteSong(song, setMessage);
    alertMessage();
  };

  return (
    <div className="songList">
      <div className="songList__img">
        <img src={track.album.images[0].url} alt="album" />
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
