import React from "react";
import "./Letter.scss";
import { NavLink } from "react-router-dom";
const Letter = () => {
  return (
    <div>
      <NavLink className="previous" to="/radar">
        previous
      </NavLink>
      <div className="letter-image">
        <div className="animated-mail">
          <div className="back-fold"></div>
          <div className="letter">
            <a
              className="letter-text"
              href="https://gostraa.github.io/portfolio/"
            >
              click here
            </a>
          </div>
          <div className="top-fold"></div>
          <div className="body"></div>
          <div className="left-fold"></div>
        </div>
        <div className="shadow"></div>
      </div>
    </div>
  );
};

export default Letter;
