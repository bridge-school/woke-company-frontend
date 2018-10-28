import React, { Component } from "react";
import { checkApiServer } from "./api";
// REDUX CONNECT
import { connect } from "react-redux";
// ASSETS
import logo from "./assets/bridge-logo.svg";
// REDUX ACTIONS
import { handleChangeDatePicker } from "./actions/actionCreators";
// COMPONENTS
import Form from "./components/Form";
import Header from "./components/Header";

class App extends Component {
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
      <div className="App pt-24 md:pt-32">
	  	{/* passing in the logo prop to the Header component */}
        <Header logo={logo} />
		{/* passing in props to the Form component, some of which is to be used in the MainDatePicker component */}
        <Form onSubmit={this.submit} isoDate={this.props.isoDate} formattedDate={this.props.formattedDate} displayDate={this.props.datePicker.startDate} handleChangeDatePicker={this.props.handleChangeDatePicker} />
      </div>
    );
  }
}

const mapStateToProps = state => {
	return {
		// spread operator for our props object
		...state,
    // states from datePicker object
    // format the date to be more legible
    formattedDate: state.datePicker.startDate.format("dddd, MMMM Do YYYY"),
    // convert the date into ISO format
		isoDate: state.datePicker.startDate.format(),
	}
};
  
const mapDispatchToProps = {
	// handleChangeDatePicker is an action
	handleChangeDatePicker
};
  
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

// export default App;
