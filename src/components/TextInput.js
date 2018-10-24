import React from "react";

const TextInput = ({ input, label, type }) => {
  return (
    <React.Fragment>
      <input {...input} placeholder={label} type={type} />
    </React.Fragment>
  );
};

export default TextInput;
