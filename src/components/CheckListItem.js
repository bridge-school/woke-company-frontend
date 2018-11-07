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
		<li className="list-reset mb-1">
			<input 
				onChange={() => input.onChange(!input.value)}
				checked={input.value} 
				type={type} 
				value="item"/>
				<label className="pl-2" htmlFor={label}>{text}</label>
		</li>

	)
}

export default CheckListItem;