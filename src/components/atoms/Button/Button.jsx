import "./Button.scss";

export const Button = ({ label, icon }) => {
  return (
    <button className="btn btn__gray">
      {icon}
      {label}
    </button>
  );
};
