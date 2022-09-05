import "./Menutoggle.scss";

export const Menutoggle = () => {
  return (
    <>
      <button
        className="menu__toggle"
        // className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="menu__toggler-icon"></span>
        {/* <label className="navbar-toggler-icon" for="menu-toggle"></label> */}
      </button>

      {/* <label for="menu-toggle">Toggle menu</label> */}
      <input type="checkbox" id="menu-toggle" />
      {/* <ul id="menu">
        <li>
          <a href="#">Item 1</a>
        </li>
        <li>
          <a href="#">Item 2</a>
        </li>
        <li>
          <a href="#">Item 3</a>
        </li>
      </ul> */}
    </>
  );
};
