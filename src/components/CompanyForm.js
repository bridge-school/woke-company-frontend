import React from "react";
// REDUX FORM
import { reduxForm, Field } from "redux-form";
// COMPONENTS
import MainDatePicker from "./MainDatePicker";
import TextInput from "./TextInput";
import CheckListItem from "./CheckListItem";
import listitem from "./checklistitems.json";
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

const CompanyForm = props => {
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
          name="companyName"
          type="text"
          component={TextInput}
          label="Company Name"
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

        <div className="w-1/2">
          <h3 className="text-center p-2">Company Checklist</h3>
          {
            listitem.companyRequirements.map((key, i) => (
              <Field
                className="p-1 "
                name={key.dataLabel}
                id={i}
                type="checkbox"
                component={CheckListItem}
                label="Company Check List"
                text={key.requirement}
              />
            ))
          }
        </div>

        <Field name="techDropdown" component={TechStackDropdown} />
        <Field name="industryDropdown" component={IndustryDropdown} />

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
})(CompanyForm);
