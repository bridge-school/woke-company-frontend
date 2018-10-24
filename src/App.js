import React, { Component } from "react";
import { checkApiServer } from "./api";
import logo from "./assets/bridge-logo.svg";
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
        <Header logo={logo} />
        <Form onSubmit={this.submit} />
      </div>
    );
  }
}

export default App;
