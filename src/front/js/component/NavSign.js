import React from "react";
import { Link } from "react-router-dom";

export const NavSign = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        <h3>{"if you already have an account --->"}</h3>
        <div className="ml-auto">
          <Link to="/log-in">
            <button className="btn btn-danger">{"Login Here"}</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
