import React from "react";
import "./AboutUs.css";
import img1 from "../Images/adrian.jpg";
import img2 from "../Images/caushi.jpg";
import img3 from "../Images/delojan.jpg";
import img4 from "../Images/Shakir.jpg";
import img5 from "../Images/rinoza.jpg";
import img6 from "../Images/abdullah.png";
import group from "../Images/group.jpg";
import Typewriter from "typewriter-effect";

function AboutUs() {
  return (
    <div className="about-us-main">
      <div className="about-us-first">
        <div className="about-us-text1">
          <Typewriter
            className="aboutUsH1"
            onInit={(Typewriter) => {
              Typewriter.typeString("Hello World this is S C A A R D").start();
            }}
          />
          <h2 id="aboutUsH2">S C A A R D is everywhere..</h2>
          <h3 id="aboutUsH3">
            Learn more about our story and the hard-works <br /> people behind
            the phone is developers
          </h3>
        </div>
        <img src={group} />
      </div>
      <div className="about-us-second">
        <div className="about-us-text2">
          <h2 id="aboutUsH4">
            <br />
            <br />
            Its all started in DEVADHA
          </h2>
          <h3 id="aboutUsH3">
            ENNATHA SOLLA NAAN ENNATHA SOLLA SOLLA VARTHAYA ILLA...
            <br />
            NIMMADHI ILLA INI NIMMADHI ILLAAA SDGP LIFE THOLLAA
          </h3>
        </div>
      </div>
      <div className="about-us-third">
        <div className="developer">
          <img src={img1} />
          <h3 id="name">Adrian Anchelo</h3>
          <h6 id="workTitle">Project Leader</h6>
        </div>

        <div className="developer">
          <img src={img2} />
          <h3 id="name"> Caucidheesan </h3>
          <h6 id="workTitle"> Data Scientist </h6>
        </div>

        <div className="developer">
          <img src={img3} />
          <h3 id="name">George Delojan</h3>
          <h6 id="workTitle">AWS Tech</h6>
        </div>

        <div className="developer">
          <img src={img4} />
          <h3 id="name">Shakir Ahamed</h3>
          <h6 id="workTitle">Front-End Developer</h6>
        </div>

        <div className="developer">
          <img src={img5} />
          <h3 id="name">Rinoza Jiffry</h3>
          <h6 id="workTitle"> Data Scientist </h6>
        </div>

        <div className="developer">
          <img src={img6} />
          <h3 id="name">Abdullah</h3>
          <h6 id="workTitle">Front-End Developer</h6>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
