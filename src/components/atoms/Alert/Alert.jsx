import React from "react";
import "./Alert.scss";

export const Alert = ({ message }) => {
  return <div id="snackbar">{message}</div>;
};
