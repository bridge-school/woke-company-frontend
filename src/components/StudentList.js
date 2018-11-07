import React, { Component } from "react";
import StudentCard from "./StudentCard";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
// import {faListUl, faTag} from '@fortawesome/free-solid-svg-icons';

class StudentList extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  render() {
    // const { location } = this.props;
    const studentId = "37BMJDH00092";
    return (
      <div>
        {/* <div>You are now at {location.pathname}</div> */}
        <Switch>
          <Route path={`/students/:${studentId}`} component={StudentCard} />
        </Switch>
        {this.props.location.pathname === "/students" ? (
          <div>
            <NavLink to={`/students/:${studentId}`}>
              <h2>Student Name</h2>
            </NavLink>
            <ul>
              <li>Tag</li>
              <li>Tag</li>
              <li>Tag</li>
              <li>Tag</li>
              <li>Tag</li>
              <li>Tag</li>
              <li>Tag</li>
              <li>Tag</li>
            </ul>
            <hr />
          </div>
        ) : null}
      </div>
    );
  }
}

export default StudentList;
