import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
import { LOGINURL, getTokenURL } from "../../services/SpotifyLogin";
import { AuthContext } from "../context/AuthContext";
import SpotifyWebApi from "spotify-web-api-js";

export const LoginPage = () => {
  const spotify = new SpotifyWebApi();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const hast = getTokenURL();
  window.location.hast = "";
  const _token = hast.access_token;

  useEffect(() => {
    if (_token) {
      spotify.setAccessToken(_token);
      spotify.getPlaylist("3sFe5RtOj1NjFQfsfM5ebq").then(playlist => console.log(playlist));
      spotify.getMe().then(({ display_name }) => {
        login(display_name, _token);
      });
      
      navigate("/", {
        replace: true,
      });
    }
  }, [_token, login, navigate]);
  console.log('hola')
  return (
    <div className="p-5 text-center mt-5">
      <img className="img__login" alt="My music App" src="Mymusicapp.png" />
      <h1>My music App</h1>
      <hr />

      <a href={LOGINURL}>
        <Button label={"Login"}></Button>
      </a>
    </div>
  );
};
