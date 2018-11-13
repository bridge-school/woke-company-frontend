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
          <div className="px-6 py-4">
            <NavLink className="no-underline" to={`/students/:${studentId}`}>
              <h2 className="text-lg text-bridge-dark-blue">Student Name</h2>
            </NavLink>
            <ul className="list-reset my-4">
            <li className="inline-block mr-4">Tag</li>
            <li className="inline-block mr-4">Tag</li>
            <li className="inline-block mr-4">Tag</li>
            <li className="inline-block mr-4">Tag</li>
            <li className="inline-block mr-4">Tag</li>
            </ul>
            <hr className="bg-grey-darkest my-4" />
          </div>
        ) : null}
      </div>
    );
  }
}

export default StudentList;