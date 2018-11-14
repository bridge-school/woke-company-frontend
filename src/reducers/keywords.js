const initialState = {
  keywords: { technical: [], industry: [] }
};

const keywordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_GET_KEYWORDS":
      return {
        ...state,
        keywords: action.payload
      };
    default:
      return state;
  }
};

export default keywordsReducer;
