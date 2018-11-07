import React, { Component } from "react";
// ASSETS
import logo from "./assets/bridge-logo.svg";
// REACT ROUTER DOM
import { BrowserRouter, Route, Switch } from "react-router-dom";
// COMPONENTS
import Header from "./components/Header";
import Home from "./components/Home";
import CompanyList from "./components/CompanyList";
import StudentInfo from "./components/StudentInfo";
import StudentList from "./components/StudentList";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header logo={logo} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/companies" component={CompanyList} />
            <Route path="/student-info" component={StudentInfo} />
            <Route path="/students" component={StudentList} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
