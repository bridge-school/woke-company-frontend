import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ display }) => {
    return (
      // <div>
      <div className={`w-full flex-grow md:flex md:items-center md:w-auto ${display}`}>
        <div className="text-md md:text-right md:flex-grow">
          <NavLink className="no-underline block mt-4 md:inline-block md:mt-0 text-grey-dark hover:text-grey-darker mr-4" to="/">Home</NavLink>
          <NavLink className="no-underline block mt-4 md:inline-block md:mt-0 text-grey-dark hover:text-grey-darker mr-4" to="/companies">Companies List</NavLink>
          <NavLink className="no-underline block mt-4 md:inline-block md:mt-0 text-grey-dark hover:text-grey-darker mr-4" to="/student-info">Student Form</NavLink>
          <NavLink className="no-underline block mt-4 md:inline-block md:mt-0 text-grey-dark hover:text-grey-darker mr-4" to="/students">Students List</NavLink>
        </div>
      </div>
    );
};

export default Navigation;