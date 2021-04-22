import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

function NavigationBar(){return(
    <div className="navigationBar">
        <ul>
            <li>
            <div id="navLogo"><a href="#logo" style={{padding:0}}>
                <img id="logoIMG" src="logo1.png"/>
                </a>
            </div>
            </li>
        <   li><a href="#home" id="title">ReachHigh</a></li>

            <Link to={{ pathname: "/app-developer", state: { just: "hi" } }}>
                <li><a href="#home">Home</a></li>
            </Link>
            <Link
              to={{ pathname: "/Container/Results", state: { just: "hi" } }}
            ><li><a href="#news">News</a></li>
            </Link>
            <li className="right"><a href="#contact">Contact</a></li>
            <li className="right"><a href="#about">About</a></li>
        </ul>
    </div>
    )}


export default NavigationBar;