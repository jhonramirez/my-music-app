export const Label = ({ name, className, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {name}
    </label>
  );
};
