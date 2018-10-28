import React from "react";

export default ({ logo }) => (
  <header className="bg-white pt-2 pb-1 md:pt-5 md:pb-4 shadow fixed w-full pin-t">
    <div className="container mx-auto text-center">
      {/* TODO: MAKE A PROPER HOMEPAGE LINK */}
      <a href="/" className="inline-block mx-auto">
        <img src={logo} className="block w-16" alt="Bridge School" />
      </a>
    </div>
  </header>
);
