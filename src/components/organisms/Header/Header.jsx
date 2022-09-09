import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navlink, Label, Button } from "../..";
import { useInfoUser } from "../../../hooks";
import { icoLogout } from "../../../svg";
import "./Header.scss";

export const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  useInfoUser(token);

  const onLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary p-2">
      <div className="container-fluid">
        <Navlink
          navigate="/"
          img="Mymusicapp.png"
          alt="My music App"
          className="img__home"
        />
        <Navlink navigate="/favorites" name="Favorites" className="navbar" />

        <form onSubmit={onLogout}>
          <Label name={user?.display_name} className="label" />
          <Button onClick={() => onLogout()} icon= {icoLogout} />
        </form>
      </div>
    </nav>
  );
};
