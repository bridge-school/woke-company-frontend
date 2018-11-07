import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/companies">Company List</NavLink>
      <NavLink to="/student-info">Student Info</NavLink>
      <NavLink to="/students">Student List</NavLink>
    </div>
  );
};

export default Navigation;
