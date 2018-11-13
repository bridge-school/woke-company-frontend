// initialState object
const initialState = {
	companies: []
};

const companiesReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'HANDLE_GET_COMPANIES':
			return {
				...state,
				companies: action.payload
			};
		default:
			return state;
	}
};

export default companiesReducer;