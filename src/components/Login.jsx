import React, { useEffect } from "react";
import "./Login.scss";

const Login = () => {
  useEffect(() => {
    const el = document.getElementById("login-container");

    function detectaCoordsElem(e) {
      var coords = e.getBoundingClientRect();
      return {
        x: coords.left + coords.width / 2,
        y: coords.top + coords.height / 2,
      };
    }

    function mueveElem(el, x, y) {
      el.style.setProperty(
        "transform",
        `translateY(${x / 20}px) translateX(${-y / 20}px) translateZ(0px)`
      );
    }

    function handleMouseMove(e) {
      var x = e.clientX - detectaCoordsElem(el).x;
      var y = e.clientY - detectaCoordsElem(el).y;
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
    </div>
  );
};

export default Login;
