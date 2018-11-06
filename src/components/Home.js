// IMPORT REACT
import React, { Component } from "react";
// MOMENT
import moment from "moment";
// import PropTypes from "prop-types";
import { checkApiServer } from "../api";
// COMPONENTS
import CompanyForm from "./CompanyForm";
// REDUX ACTIONS
import { handleChangeDatePicker } from "../actions/actionCreators";
// REDUX CONNECT
import { connect } from "react-redux";
class Home extends Component {
  componentDidMount() {
    // checking that we're connected to the backend
    checkApiServer();
  }
  submit = values => {
    // print the form values to the console
    console.log(values);
  };
  render() {
    return (
      <div>
        <CompanyForm
          onSubmit={this.submit}
          displayDate={this.props.formDateFormatted}
          handleChangeDatePicker={this.props.handleChangeDatePicker}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // spread operator for our props object
    ...state,
    formDateFormatted:
      state.form.companyInfo &&
      state.form.companyInfo.values &&
      state.form.companyInfo.values.datePicker
        ? moment(state.form.companyInfo.values.datePicker)
        : moment()
  };
};

const mapDispatchToProps = {
  // handleChangeDatePicker is an action
  handleChangeDatePicker
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
