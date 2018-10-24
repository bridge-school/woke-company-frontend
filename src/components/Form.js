import React from "react";
import { reduxForm, Field } from "redux-form";

let Form = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="companyName">Company Name</label>
        <Field name="companyName" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

Form = reduxForm({
  // a unique name for the form
  form: "contact"
})(Form);

export default Form;
