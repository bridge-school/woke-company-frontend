import React from "react";

const TextInput = ({
  input,
  label,
  type,
  name,
  meta: { touched, error, warning }
}) => (
  <div className="flex flex-col">
    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor={name}>{label}</label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 my-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
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