import React, { Component } from "react";
import moment from "moment";
import { checkApiServer } from "../api";
import StudentForm from "./StudentForm";
import { handleChangeDatePicker, getKeywords } from "../actions/actionCreators";
import { connect } from "react-redux";

class StudentInfo extends Component {
  componentDidMount() {
    checkApiServer();
    this.props.getKeywords();
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
          keywords={this.props.keywords}
        />
      </div>
    );
  }
}

const transformKeywords = keywords => {
  return {
    technical: keywords.technical.map(keyword => ({
      value: keyword,
      label: keyword
    })),
    industry: keywords.industry.map(keyword => ({
      value: keyword,
      label: keyword
    }))
  };
};

const mapStateToProps = state => {
  return {
    ...state,
    keywords: transformKeywords(state.keywords.keywords),
    formDateFormatted:
      state.form.studentInfo &&
      state.form.studentInfo.values &&
      state.form.studentInfo.values.datePicker
        ? moment(state.form.studentInfo.values.datePicker)
        : moment()
  };
};

const mapDispatchToProps = {
  handleChangeDatePicker,
  getKeywords
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentInfo);
