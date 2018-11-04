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
		<li>
			<input 
				onChange={() => input.onChange(!input.value)}
				checked={input.value} 
				type={type} 
				value="item"/>
				<label htmlFor={label}>{text}</label>
		</li>

	)
}

export default CheckListItem;