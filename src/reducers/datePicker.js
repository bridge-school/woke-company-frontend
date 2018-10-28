// MOMENT.JS
import moment from "moment";

// initialState object
const initialState = {
    // moment() object
    startDate: moment()
};
  
const datePicker = (state = initialState, action) => {
  switch (action.type) {
      case 'HANDLE_CHANGE_DATE_PICKER':
        return {
            ...state,
            startDate: action.payload
      }
      default:
        return state
    }
};

// export datePicker object
export default datePicker;