import React from 'react';
// import { reduxForm, Field } from "redux-form";
// import listitem from './checklistitems.json';

const CheckListItem = ({ 
	input,
	label,
	type,
	name,
	text
}) => {
	return (
		<li className="list-reset my-4 flex items-stretch">
			<input 
				onChange={() => input.onChange(!input.value)}
				className="mt-1"
				checked={input.value} 
				type={type} 
				value="item"/>
			<label className="block text-grey-darker text-sm ml-2 leading-normal" htmlFor={label}>{text}</label>
		</li>

	)
}

export default CheckListItem;