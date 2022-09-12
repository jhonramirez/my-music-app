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
    <div className="header">
        <Navlink
          navigate="/"
          img="Mymusicapp.png"
          alt="My music App"
          className="header__imghome"
        />
        <Navlink navigate="/favorites" name="Favoritos" className="header__favorite" />

        <form onSubmit={onLogout}>
          <Label name={user?.display_name} className="header__name" />
          <Button onClick={() => onLogout()} icon= {icoLogout} className="header__logout" />
        </form>
    </div>
  );
};
