// initialState object
const initialState = {
	checklist: []
};

const checklistReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'HANDLE_GET_CHECKLIST':
			return {
				...state,
				checklist: action.payload
			};
		default:
			return state;
	}
};

export default checklistReducer;
