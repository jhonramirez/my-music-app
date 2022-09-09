import { Button } from "../../";
import { LOGINURL } from "../../../services";

export const LoginPage = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    window.open(LOGINURL, "_top");
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="p-5 text-center mt-5">
        <img className="img__login" alt="My music App" src="Mymusicapp.png" />
        <h1>My music App</h1>
        <hr />
        <Button type="submit" label={"Login"}></Button>
      </div>
    </form>
  );
};
