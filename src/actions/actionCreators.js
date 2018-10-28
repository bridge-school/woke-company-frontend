// actions object
const ACTIONS = {
    // handle change for the date picker component
    HANDLE_CHANGE_DATE_PICKER: "HANDLE_CHANGE_DATE_PICKER"
};

//  exporting our action
export const handleChangeDatePicker = (date) => ({
    type: ACTIONS.HANDLE_CHANGE_DATE_PICKER,
    // date is the moment() object
    payload: date
});