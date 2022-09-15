import "./Button.scss";

export const Button = ({ label, onClick = () => {} }) => {
  return (
    <button className="btn btn__black" onClick={onClick}>
      {label}
    </button>
  );
};
