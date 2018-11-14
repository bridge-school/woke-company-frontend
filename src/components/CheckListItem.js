import React from 'react';

export const CheckboxGroup = ({ label, name, options, input}) => (
	<ul className="checkbox list-reset">
	  { options.map((option, i) => (
		<li key={i} className="list-reset my-4 flex items-stretch">
			<input type="checkbox"
				   name={`${name}[${i}]`}
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
			<label className="block text-grey-darker text-sm ml-2 leading-normal" htmlFor={label}>{option.label}</label>
		  </li>
		))
	  }
	</ul>
); 