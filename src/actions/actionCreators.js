import { fetchChecklist, fetchCompanies, fetchKeywords, writeCompany } from "../api/index";

// actions object
const ACTIONS = {
  // handle change for the date picker component
  HANDLE_CHANGE_DATE_PICKER: "HANDLE_CHANGE_DATE_PICKER",
  HANDLE_NAV_HAMBURGER: "HANDLE_NAV_HAMBURGER",
  HANDLE_GET_CHECKLIST: "HANDLE_GET_CHECKLIST",
  HANDLE_GET_COMPANIES: "HANDLE_GET_COMPANIES",
  HANDLE_ADD_COMPANY: "HANDLE_ADD_COMPANY",
  HANDLE_GET_KEYWORDS: "HANDLE_GET_KEYWORDS",
  HANDLE_SHOW_CERTIFIED_COMPANIES: "HANDLE_SHOW_CERTIFIED_COMPANIES",
  HANDLE_SHOW_ALL_COMPANIES: "HANDLE_SHOW_ALL_COMPANIES"
};

//  exporting our action
export const handleChangeDatePicker = date => ({
  type: ACTIONS.HANDLE_CHANGE_DATE_PICKER,
  // date is the moment() object
  payload: date
});

export const handleNavHamburger = display => ({
  type: ACTIONS.HANDLE_NAV_HAMBURGER,
  payload: display
});

export const getChecklist = () => dispatch =>
  fetchChecklist().then(result =>
    dispatch({
      type: ACTIONS.HANDLE_GET_CHECKLIST,
      payload: result
    })
  ).catch(err => console.log(err));

export const getCompanies = () => dispatch =>
  fetchCompanies().then(result =>
    dispatch({
      type: ACTIONS.HANDLE_GET_COMPANIES,
      payload: result
    })
  ).catch(err => console.log(err));

export const addCompany = data => dispatch =>
  writeCompany(data).then(result =>
    dispatch({
      type: ACTIONS.HANDLE_ADD_COMPANY,
      payload: result
    })
  ).catch(err => console.log(err));

export const showCertifiedCompanies = companies => ({
  type: ACTIONS.HANDLE_SHOW_CERTIFIED_COMPANIES
  // payload:
});

export const showAllCompanies = companies => ({
  type: ACTIONS.HANDLE_SHOW_ALL_COMPANIES
  // payload:
});

export const getKeywords = () => dispatch =>
  fetchKeywords().then(result =>
      dispatch({
        type: ACTIONS.HANDLE_GET_KEYWORDS,
        payload: result
      })
    ).catch(err => console.log(err));