import React from "react";
// REDUX FORM
import { reduxForm, Field } from "redux-form";
// COMPONENTS
import MainDatePicker from "./MainDatePicker";
import { CheckboxGroup } from "./CheckListItem";
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

const CompanyForm = props => {
  // setting props as variables
  const {
    handleSubmit,
    submitting,
    displayDate,
    formattedDate,
    isoDate,
    checklist,
    keywords
  } = props;
  return (
    <div className="">
      <h2 className="text-lg text-bridge-dark-blue px-6 py-4">Company Form</h2>
      <form className="px-6 py-4" onSubmit={handleSubmit}>
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

        <div>
					<h3 className="block text-grey-darker text-sm font-bold mb-2">Company Checklist</h3>
						<Field
							label="Company Check List"
							name="requirements"
							options={checklist.map((item) => {
								return { name: item.id, label: item.requirement, points: 2 }
							})}
							component={CheckboxGroup}
						/>
				</div>

        <Field
          name="techDropdown"
          component={TechStackDropdown}
          keywords={keywords}
        />
        <Field
          name="industryDropdown"
          component={IndustryDropdown}
          keywords={keywords}
        />

        <button
          className="bg-grey hover:bg-grey-dark text-white font-bold py-2 px-4 my-3 rounded focus:outline-none focus:shadow-outline"
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
