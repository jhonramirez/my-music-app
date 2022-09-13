import "./Button.scss";

export const Button = ({ label }) => {
  return (
    <button className="btn btn__black">
      {label}
    </button>
  );
};

