import React from "react";

const Header = ({ children }) => (
  <div style={{ height: 125, clear: "both", backgroundColor: "rgb(0, 179, 179)"} } className="jumbotron bg-info">
    {children}
  </div>
);

export default Header;
