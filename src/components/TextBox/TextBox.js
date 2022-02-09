import React from "react";
import "./TextBox.css";

function TextBox({ name, type, placeholder, required, onChange }) {
  return (
    <input
      className="textbox"
      name={name}
      type={type}
      placeholder={placeholder}
      aria-required="true"
      required={required}
      onChange={onChange}
    />
  );
}

export default TextBox;
