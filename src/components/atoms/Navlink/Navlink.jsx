import { NavLink } from "react-router-dom";

export const Navlink = ({ navigate, name, img, alt, className }) => {
  return (
    <>
      {name ? (
        <NavLink className={className} to={`${navigate}`}>
          {name}
        </NavLink>
      ) : (
        ""
      )}
      {img ? (
        <NavLink to={`${navigate}`}>
          <img className={className} alt={alt} src={img} />
        </NavLink>
      ) : (
        ""
      )}
    </>
  );
};
