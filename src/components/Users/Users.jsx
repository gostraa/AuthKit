import React from "react";
import { IoStar } from "react-icons/io5";
import "./Users.scss";
import { NavLink } from "react-router-dom";

const colors = [
  "pink",
  "rgba(247, 202, 226, 0.993)",
  "rgba(209, 41, 131, 0.618)",
];
const avatars = [
  "https://bit.ly/dan-abramov",
  "https://bit.ly/kent-c-dodds",
  "https://bit.ly/ryan-florence",
  "https://bit.ly/prosper-baba",
  "https://bit.ly/sage-adebayo",
  "https://bit.ly/ryan-florence",
  "https://bit.ly/prosper-baba",
];

const Users = () => {
  return (
    <div className="container">
      <NavLink className="previous" to="/">
        previous
      </NavLink>
      <div className="users-wrapper">
        {[...Array(100)].map((_, index) => {
          const fill = colors[Math.floor(Math.random() * colors.length)];
          return (
            <IoStar fill={fill} stroke={fill} key={index} className="star" />
          );
        })}
        <div className="avatar-wrapper">
          {avatars.map((item, index) => {
            return <img className="avatar" key={index} alt={item} src={item} />;
          })}
        </div>
      </div>

      <div className="portal"></div>
    </div>
  );
};

export default Users;
