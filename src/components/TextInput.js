import React from "react";

const TextInput = ({
  input,
  label,
  type,
  name,
  meta: { touched, error, warning }
}) => (
  <div className="flex flex-col">
    <label htmlFor={name}>{label}</label>
    <input
      className="border border-black p-1"
      {...input}
      placeholder={label}
      type={type}
    />
    {touched &&
      ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

// export TextInput component
export default TextInput;
