import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import { Button, Menutoggle, Navlink, Label } from "../../components";

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary p-2">
      <div className="container-fluid">
        <Navlink navigate="/" img="Mymusicapp.png" alt="My music App" className="img__home" />
        <Navlink navigate="/" name="My music App" className="navbar" />
        <Menutoggle />
        {/* <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <Navlink navigate="/favorites" name="Favorites" className="navbar"/>
          <div className="navbar-nav ms-auto">
            <Label name={user?.name} className="label" />
            <Button onClick={onLogout} label="Logout" />
          </div>
        </div>
      </div>
    </nav>
  );
};
