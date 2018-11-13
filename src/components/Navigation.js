import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ display }) => {
    return (
      // <div>
      <div className={`lg:block lg:my-2 ${display}`}>
        <NavLink className="no-underline text-grey-darker text-sm text-base mt-4 lg:inline-block lg:mt-0 mr-4" to="/">Home</NavLink>
        <NavLink className="no-underline text-grey-darker text-sm text-base mt-4 lg:inline-block lg:mt-0 mr-4" to="/companies">Companies List</NavLink>
        <NavLink className="no-underline text-grey-darker text-sm text-base mt-4 lg:inline-block lg:mt-0 mr-4" to="/student-info">Student Form</NavLink>
        <NavLink className="no-underline text-grey-darker text-sm text-base mt-4 lg:inline-block lg:mt-0 mr-4" to="/students">Students List</NavLink>
      </div>
    );
};

export default Navigation;