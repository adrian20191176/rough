import React from "react";
import "./foot.css";
import { Link } from "react-router-dom";

function Footer(){return(
    <div className="rfooter">
        <footer className="footer">
    <div className="container">
        <div className="row">

        <div className="footer-col">
            <center><h1>SCAARD</h1></center>

        </div>
        </div>
    </div>
    <div className="container2">
    <div className="footer-col">
                
        <center><div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
        </center>
    </div>
    </div>
</footer>
</div>

    )}
export default Footer;