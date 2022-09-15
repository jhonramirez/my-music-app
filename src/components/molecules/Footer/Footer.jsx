import { useState } from "react";
import ReactPlayer from "react-player";
import { previousSong, nextSong, playSong, pauseSong } from "../../../svg";
import { Button } from "../..";
import "./Footer.scss";

export const Footer = ({ urlTrack}) => {
  const [playing, setPlaying] = useState(false);
  return (
    <>
      <div className="footer">
        <div className="footer__soundbar" />
        <div>
          <ReactPlayer url={urlTrack} playing={playing} className="footer__player" />
          <Button label={previousSong} />
          <Button
            label={playing ? pauseSong : playSong}
            onClick={() => {
              setPlaying(!playing);
            }}
          />
          <Button label={nextSong} />
        </div>
      </div>
    </>
  );
};
