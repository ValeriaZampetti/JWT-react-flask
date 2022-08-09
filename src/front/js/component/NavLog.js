import React from "react";
import { Link } from "react-router-dom";

export const NavLog = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        <h3>{"if you don't have an account --->"}</h3>
        <div className="ml-auto">
          <Link to="/sign-up">
            <button className="btn btn-dark">{"Sign In Here"}</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
