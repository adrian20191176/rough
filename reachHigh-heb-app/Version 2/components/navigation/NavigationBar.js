import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import icon from "../../Images/logo1.png";

function NavigationBar() {
  return (
    <div className="navigationBar">
      <ul>
        <Link to={{ pathname: "/app-developer", state: { just: "hi" } }}>
          <li>
            <div id="navLogo">
              <a href="#logo" style={{ padding: 0 }}>
                <img src={icon} />
              </a>
            </div>
          </li>
          <li>
            <a href="#home" id="title">
              ReachHigh
            </a>
          </li>
        </Link>
        <Link to={{ pathname: "/", state: { just: "hi" } }}>
          <li>
            <a href="#home">Home</a>
          </li>
        </Link>
        <Link to={{ pathname: "/blog", state: { just: "hi" } }}>
          <li>
            <a href="#news">Blog</a>
          </li>
        </Link>
        <Link to={{ pathname: "/", state: { just: "hi" } }}>
          <li className="right">
            <a href="#contact">Contact US</a>
          </li>
        </Link>
        <Link to={{ pathname: "/about-us", state: { just: "hi" } }}>
          <li className="right">
            <a href="#about">About US</a>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default NavigationBar;
