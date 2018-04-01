import React from "react";

const Jumbotron = ({ children }) => (
  <div style={{ height: 300, clear: "both", backgroundColor: "rgb(0, 179, 179)", color: "rgb(255, 255, 255)" }} className="jumbotron">
    {children}
  </div>
);

export default Jumbotron;
