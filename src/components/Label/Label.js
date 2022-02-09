import * as React from "react";
import "./Label.css";

function Label({ text, className, onClick }) {
  return (
    <span onClick={onClick} className={className}>
      {text}
    </span>
  );
}

export default Label;
