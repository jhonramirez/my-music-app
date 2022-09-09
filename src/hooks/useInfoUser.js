import { useEffect } from "react";
import { useDispatch } from "react-redux";
import SpotifyWebApi from "spotify-web-api-js";
import { login, setPlaylist } from "../store";

export const useInfoUser = (token) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      const spotify = new SpotifyWebApi();
      spotify.setAccessToken(token);
      spotify
        .getPlaylist("3sFe5RtOj1NjFQfsfM5ebq")
        .then((playlist) => dispatch(setPlaylist(playlist)));
      spotify.getMe().then((user) => dispatch(login({ user })));
    }
  }, [token, dispatch]);
};
