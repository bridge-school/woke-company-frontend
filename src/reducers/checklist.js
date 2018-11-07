// initialState object
const initialState = {
    // moment() object
		checklist: []
};
  
const checklistReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'HANDLE_GET_CHECKLIST':
        return {
            ...state,
            checklist: action.payload
      }
      default:
        return state
    }
};

// export datePicker object
export default checklistReducer;