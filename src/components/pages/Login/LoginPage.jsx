import { Button } from "../../";
import { LOGINURL } from "../../../services";
import "./LoginPage.scss";

export const LoginPage = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    window.open(LOGINURL, "_top");
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="loginPage">
        <img className="loginPage__img" alt="My music App" src="Mymusicapp.png" />
        <h1>My music App</h1>
        <hr />
        <Button type="submit" label={"Login"}></Button>
      </div>
    </form>
  );
};
