import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

function NavigationBar(){return(
            <div class="loader">
        <div class="loader-bg">
            <div class="text"></div>
        </div>        
        <div class="spiner-holder-one animate-0-25-a">
            <div class="spiner-holder-two animate-0-25-b">
                <div class="loader-spiner" style=""></div>
            </div>
        </div>
        <div class="spiner-holder-one animate-25-50-a">
            <div class="spiner-holder-two animate-25-50-b">
                <div class="loader-spiner"></div>
            </div>
        </div>
        <div class="spiner-holder-one animate-50-75-a">
            <div class="spiner-holder-two animate-50-75-b">
                <div class="loader-spiner"></div>
            </div>
        </div>
        <div class="spiner-holder-one animate-75-100-a">
            <div class="spiner-holder-two animate-75-100-b">
                <div class="loader-spiner"></div>
            </div>
        </div>
        </div>
    )}


export default NavigationBar;
