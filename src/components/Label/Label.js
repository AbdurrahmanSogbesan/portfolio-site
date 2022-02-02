import * as React from "react";
import "./Label.css";

function Label({ text, className }) {
  return <span className={className}>{text}</span>;
}

export default Label;
