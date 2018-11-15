import React from 'react';

export const CheckboxGroup = ({ label, options, input}) => (
	<ul className="">
	  { options.map((option, i) => (
		<li key={i} className="">
			<input type="checkbox"
				   name={`checkbox-${i}`}
				   value={option.name}
				   checked={input.value.indexOf(option.name) !== -1}
				   onChange={event => {
					 const newValue = [...input.value];
					 if(event.target.checked) {
					   newValue.push(option.name);
					 } else {
					   newValue.splice(newValue.indexOf(option.name), 1);
					 }

					 return input.onChange(newValue);
				   }}/>
			<label className="" htmlFor={label}>{option.label}</label>
		  </li>
		))
	  }
	</ul>
); 