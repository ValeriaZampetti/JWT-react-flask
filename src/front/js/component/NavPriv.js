import React from "react";
import { Link } from "react-router-dom";

export const NavPriv = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        <h3>{"if you want to close the session --->"}</h3>
        <div className="ml-auto">
          <Link to="/">
            <button
              className="btn btn-darkr"
              onClick={(e) => {
                localStorage.clear();
              }}
            >
              {"Logout"}
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
