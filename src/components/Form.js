import React from "react";
// REDUX FORM
import { reduxForm, Field } from "redux-form";
// COMPONENTS
import MainDatePicker from "./MainDatePicker";
import TextInput from "./TextInput";
import CheckListItem from "./CheckListItem";
import listitem from './checklistitems.json';

const required = value =>
  value || typeof value === "number" ? undefined : "Required";

const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;

export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const minLength2 = minLength(2);

const Form = props => {
  // setting props as variables
  const {
    handleSubmit,
    submitting,
    handleChangeDatePicker,
    displayDate,
    formattedDate,
    isoDate
  } = props;
  return (
    <div className="ml-10 mr-10">
      <form onSubmit={handleSubmit}>
        <Field
          name="CompanyName"
          type="text"
          component={TextInput}
          label="Company Name"
          validate={[required, minLength2]}
          warn={alphaNumeric}
        />
        {/* passing in props to the MainDatePicker component */}
        <MainDatePicker
          isoDate={isoDate}
          formattedDate={formattedDate}
          displayDate={displayDate}
          handleChangeDatePicker={handleChangeDatePicker}
        />
      

        {listitem.companyRequirements.map((key, i) => (
          <Field
            name={`checkItem-${i}`}
            id={i}
            type="checkbox"
            component={CheckListItem}
            label="Company Check List"
            text={key.requirement}
          />
        ))}
       
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
  form: "companyInfo" // a unique identifier for this form
})(Form);
