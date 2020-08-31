import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      {/* Brand */}
      <Link className="navbar-brand  ml-xs-2" to="/">
        Blog System
      </Link>
      {/* Collapse */}
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      {/* Links */}
      <div className="collapse navbar-collapse " id="navbarNav">
        {/* Left */}
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <Link className="nav-link" to="/posts">
              Posts
            </Link>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/haichao-yu/react-redux-blog"
            >
              Github
            </a>
          </li>
        </ul>
        {/* Middle */}
        <form class="form-inline my-2 my-lg-0 mr-auto">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
        {/* Right */}
        <ul className="nav">
          <li className="nav-item" key={1}>
            <Link className="btn btn-primary" to="/signup">
              Sign Up
            </Link>
          </li>
          <li className="nav-item" key={2}>
            <Link className="btn btn-secondary ml-sm-2" to="/signin">
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
