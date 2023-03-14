import React from "react";
import "./Input.css";
function Input({ name, type, placeholder, showLabel, onChange }) {
  return (
    // set placeholder, name, and onchange from props on each input
    <div className="Input">
      {/* if prop type is textarea then display a text area */}
      {type === "textarea" && (
        <textarea
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          id={name}
          cols="30"
          rows="8"
        ></textarea>
      )}
      {/* if prop type is email then display a email input */}
      {type === "email" && (
        <>
          <input
            onChange={onChange}
            name={name}
            type="email"
            placeholder={placeholder}
          />
          {/* give label same content as placeholder if the showLabel prop is true */}
          <label htmlFor={name}>{placeholder && showLabel}</label>
        </>
      )}
      {/* if prop type is text then display a text input */}

      {type === "text" && (
        <>
          <input
            onChange={onChange}
            name={name}
            type="text"
            placeholder={placeholder}
          />
          {/* give label same content as placeholder if the showLabel prop is true */}
          <label htmlFor={name}>{placeholder && showLabel}</label>
        </>
      )}
    </div>
  );
}

export default Input;
