const initialState = {
    display: "none"
};

const navHamburgerReducer = (state = initialState, action) => {
switch (action.type) {
  case 'HANDLE_NAV_HAMBURGER':
    return {
        //look into this
        ...state,
        display: state === 'none' ? 'block': 'none',
  }
  default:
    return state
}
};

export default navHamburgerReducer;