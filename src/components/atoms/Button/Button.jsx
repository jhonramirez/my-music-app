import "./Button.scss";

export const Button = ({ onClick, label }) => {
  return (
    <button className="btn btn__gray" onClick={() => onClick()}>
      {label}
    </button>
  );
};
