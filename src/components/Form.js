import React from "react";
// REDUX FORM
import { reduxForm, Field } from "redux-form";
// COMPONENTS
import MainDatePicker from './MainDatePicker';

let Form = props => {
  // setting props as variables
  const { handleSubmit, handleChangeDatePicker, displayDate, formattedDate, isoDate } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="companyName">Company Name</label>
        <Field name="companyName" component="input" type="text" />
      </div>
      {/* passing in props to the MainDatePicker component */}
      <MainDatePicker isoDate={isoDate} formattedDate={formattedDate} displayDate={displayDate} handleChangeDatePicker={handleChangeDatePicker} />
      <button type="submit">Submit</button>
    </form>
  );
};

// connect the redux form
Form = reduxForm({
  // a unique name for the form
  form: "contact"
})(Form);

// export Form component
export default Form;