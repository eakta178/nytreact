import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ float: "right", margin: 7 }} className="btn btn-success">
    {props.children}
  </button>
);
