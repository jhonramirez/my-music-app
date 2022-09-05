export const getTokenURL = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let param = item.split("=");
      initial[param[0]] = decodeURIComponent(param[1]);
      return initial;
    }, {});
};

const ENDPOINT = "https://accounts.spotify.com/authorize";
const CLIENTID = "2e5b9ba25abb415e97e253f6054684ed";//307d0ec7e64841fba2a0fef7459e8e40
const REDIRECTURL = "http://localhost:3000/login";
const SCOPE = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const LOGINURL = `${ENDPOINT}?client_id=${CLIENTID}&response_type=token&redirect_uri=${REDIRECTURL}&scope=${SCOPE.join(
  "%20"
)}&show_dialog=true`;