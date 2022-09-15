import { useState } from "react";
import { Alert, Footer, SongList } from "../..";
import "./bodyTemplate.scss";

export const BodyTemplate = ({ title, songs }) => {
  const [message, setMessage] = useState("");
  const [currentTrack, setCurrentTrack] = useState();
  return (
    <>
      <div className="bodyTemplate">
        <h2 className="bodyTemplate__title">{title}</h2>
        {songs?.map((item, index) => (
          <SongList
            track={item.track}
            favorite={item.favorite}
            key={index}
            setMessage={setMessage}
            onClick={(track) => setCurrentTrack(track)}
          />
        ))}

        <Alert message={message} />
      </div>
      <div className="bodyTemplate__footer">
        <Footer urlTrack={currentTrack?.preview_url} />
      </div>
    </>
  );
};
