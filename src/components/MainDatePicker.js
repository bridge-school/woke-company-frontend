import React from "react";
// DATE PICKER PACKAGES
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// FONT AWESOME PACKAGES
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

// calendar icon
library.add(faCalendarAlt);

// passing in our props
export default ({
  handleChangeDatePicker,
  displayDate,
  formattedDate,
  isoDate
}) => {
  return (
    <React.Fragment>
      <div className="flex flex-row">
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
          className="shadow appearance-none border rounded w-full py-2 px-3 my-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          popperClassName="some-custom-class"
          popperPlacement="top-end"
          popperModifiers={{
            offset: {
              enabled: true,
              offset: "5px, 10px"
            },
            preventOverflow: {
              enabled: true,
              escapeWithReference: false, // force popper to stay in viewport (even when input is scrolled out of view)
              boundariesElement: "viewport"
            }
          }}
        />
        {/* could probably make the icon a component */}
        <label
          htmlFor="date-picker"
          className="flex-1 block text-2xl my-4 mx-4 text-grey-darker text-sm font-bold mb-2">
          <FontAwesomeIcon icon="calendar-alt" />
        </label>
      </div>
    </React.Fragment>
  );
};