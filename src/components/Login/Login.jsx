import React, { useEffect } from "react";
import "./Login.scss";
import { NavLink } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    const el = document.getElementById("login-container");

    function detectaCoordsElem(e) {
      let coords = e.getBoundingClientRect();
      return {
        x: coords.right + coords.height / 2,
        y: coords.bottom + coords.width / 2,
      };
    }

    function mueveElem(el, x, y) {
      el.style.setProperty(
        "transform",
        `translateY(${x / 30}px) translateX(${y / 30}px) translateZ(0px)`
      );
    }

    function handleMouseMove(e) {
      let y = e.clientX - detectaCoordsElem(el).x;
      let x = e.clientY - detectaCoordsElem(el).y;
      mueveElem(el, x, y);
    }

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="background">
      {[...Array(100)].map((_, index) => (
        <div className="dust" key={index}></div>
      ))}

      <div className="login-container" id="login-container">
        <h2>Login</h2>

        <form>
          <div className="form-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="register-link">
          <p>
            Don't have an account? <a href="https://github.com/">Register</a>
          </p>
        </div>
      </div>
      <NavLink className="link" to="/users">
        next
      </NavLink>
    </div>
  );
};

export default Login;
