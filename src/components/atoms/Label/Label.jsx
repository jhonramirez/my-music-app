import "./Label.scss";

export const Label = ({ name, className }) => {
  return <label className={className}>{name}</label>;
};
