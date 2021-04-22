import React from "react";
import "./foot.css";
import { Link } from "react-router-dom";

function Footer(){return(
    <div className="rfooter">
        <footer className="footer">
    <div className="container">
        <div className="row">

        <div className="footer-col">
            <h1>SCAARD</h1>

        </div>

            <div className="footer-col">
                <ul>
                    <li><a href="#">sss</a></li>
                    <li><a href="#">sss</a></li>
                    <li><a href="#">sss</a></li>
                </ul>
            </div>
            <div className="footer-col">
                
                <ul>
                    <li><a href="#">sssss</a></li>
                    <li><a href="#">sUse Cases</a></li>
                    <li><a href="#">Customer Stories</a></li>
                    
                </ul>
            </div>
            
            <div className="footer-col">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About US</a></li>
                    <li><a href="#">Blog</a></li>
                    
                </ul>
            </div>

            
        </div>
    </div>
    <div className="container2">
    <div className="footer-col">
                
        <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
    </div>
    </div>
</footer>
</div>

    )}
export default Footer;