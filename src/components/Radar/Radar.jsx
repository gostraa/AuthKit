import React from "react";
import "./Radar.scss";
import { NavLink } from "react-router-dom";

const Radar = () => {
  return (
    <div className="radar-wrapper">
      <NavLink className="previous" to="/users">
        previous
      </NavLink>
      <ul class="radar">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="visible"></div>
      <NavLink className="link-user" to="/letter">
        next
      </NavLink>
    </div>
  );
};

export default Radar;
