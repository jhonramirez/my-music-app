export const Input = ({ type, id, defaultChecked, onClick }) => {
  return (
    <input
      type={type}
      id={id}
      defaultChecked={defaultChecked}
      onClick={onClick}
    />
  );
};
