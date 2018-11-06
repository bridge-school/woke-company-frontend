import React from "react";
// REDUX FORM
import { reduxForm, Field } from "redux-form";
// COMPONENTS
import MainDatePicker from "./MainDatePicker";
import TextInput from "./TextInput";
import TechStackDropdown from "./TechStackDropdown";
import IndustryDropdown from "./IndustryDropdown";

const required = value =>
  value || typeof value === "number" ? undefined : "Required";

const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;

export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const minLength2 = minLength(2);

const CalenderWrapper = ({ input, ...custom }) => (
  <MainDatePicker
    handleChangeDatePicker={momentDate => {
      input.onChange(momentDate.toISOString());
    }}
    {...custom}
  />
);

const StudentForm = props => {
  // setting props as variables
  const {
    handleSubmit,
    submitting,
    displayDate,
    formattedDate,
    isoDate
  } = props;
  return (
    <div className="ml-10 mr-10">
      <form onSubmit={handleSubmit}>
        <Field
          name="FirstName"
          type="text"
          component={TextInput}
          label="First Name"
          validate={[required, minLength2]}
          warn={alphaNumeric}
        />
        <Field
          name="LastName"
          type="text"
          component={TextInput}
          label="Last Name"
          validate={[required, minLength2]}
          warn={alphaNumeric}
        />
        {/* passing in props to the MainDatePicker component */}
        <Field
          name="datePicker"
          type="text"
          component={CalenderWrapper}
          isoDate={isoDate}
          formattedDate={formattedDate}
          displayDate={displayDate}
        />

        <Field
          name="techDropdown"
          label="Industries of Interest"
          component={TechStackDropdown}
        />
        <Field
          name="industryDropdown"
          label="Technial Interests"
          component={IndustryDropdown}
        />

        <button
          className="border border-black p-2 mt-4"
          type="submit"
          disabled={submitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "studentInfo" // a unique identifier for this form
})(StudentForm);
