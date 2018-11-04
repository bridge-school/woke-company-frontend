import React from "react";
// COMPONENTS
import Navigation from "./Navigation";

export default ({ logo }) => (
  <header>
    <div className="container mx-auto text-center">
      {/* TODO: MAKE A PROPER HOMEPAGE LINK */}
      <a href="/" className="inline-block mx-auto">
        <img src={logo} className="block w-16" alt="Bridge School" />
      </a>
      <Navigation />
      <h1>Bridge Company Certification</h1>
    </div>
  </header>
);
