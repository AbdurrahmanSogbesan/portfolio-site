import * as React from "react";
import "./Button.css";

function Button({ text, onClick, onChange, className, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onChange={onChange}
      className={className}
    >
      {text}
    </button>
  );
}

export default Button;
