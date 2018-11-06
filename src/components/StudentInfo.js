import React, { Component } from "react";
import moment from "moment";
import { checkApiServer } from "../api";
import StudentForm from "./StudentForm";
import { handleChangeDatePicker } from "../actions/actionCreators";
import { connect } from "react-redux";

class StudentInfo extends Component {
  componentDidMount() {
    checkApiServer();
  }

  submit = values => {
    console.log(values);
  };

  render() {
    return (
      <div>
        <StudentForm
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
    ...state,
    formDateFormatted:
      state.form.studentInfo &&
      state.form.studentInfo.values &&
      state.form.studentInfo.values.datePicker
        ? moment(state.form.studentInfo.values.datePicker)
        : moment()
  };
};

const mapDispatchToProps = {
  handleChangeDatePicker
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentInfo);
