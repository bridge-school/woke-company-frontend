import React from 'react';
// DATE PICKER PACKAGES
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
// FONT AWESOME PACKAGES
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

// calendar icon
library.add(faCalendarAlt)

// passing in our props
export default ({ handleChangeDatePicker, displayDate, formattedDate, isoDate }) => {
	return (
		<React.Fragment>
			<div className="flex mb-4">
				<div className="my-4">
					<DatePicker
						// displays the date in the input
						// changes upon date selection
						selected={displayDate}
						id="date-picker"
						// handles changing the date
						onChange={handleChangeDatePicker}
						allowSameDay={true}
						dateFormat="DD/MM/YYYY"
						todayButton={"Today"}
						// once date selected, close the calendar
						shouldCloseOnSelect={true}
						popperClassName="some-custom-class"
						popperPlacement="top-end"
						popperModifiers={{
							offset: {
								enabled: true,
								offset: '5px, 10px'
							},
							preventOverflow: {
								enabled: true,
								escapeWithReference: false, // force popper to stay in viewport (even when input is scrolled out of view)
								boundariesElement: 'viewport'
							}
						}}
					/>
				</div>
				{/* could probably make the icon a component */}
				<label htmlFor="date-picker" className="my-4 mx-4 bridge-dark-blue-color">
					<FontAwesomeIcon icon="calendar-alt" />
				</label>
			</div>
			<p>Formatted date: {formattedDate}</p>
			<p>ISO Date: {isoDate}</p>
		</React.Fragment>
	)
}