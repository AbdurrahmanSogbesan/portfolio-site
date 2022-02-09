import React from "react";
import "./TextArea.css";

function TextArea({ name, placeholder, rows, required, onChange }) {
  return (
    <textarea
    className="textarea"
      name={name}
      placeholder={placeholder}
      rows={rows}
      aria-required="true"
      required={required}
      spellCheck="false"
      onChange={onChange}
    ></textarea>
  );
}

export default TextArea;
