import React from "react";
import "./AboutUs.css";
import img1 from "../Images/adribokka.png";
import img2 from "../Images/cauci.png";
import img3 from "../Images/delojan.png";
import img4 from "../Images/shakir.png";
import img5 from "../Images/rinoza.png";
import img6 from "../Images/abdullah.png";
import Typewriter from "typewriter-effect";

function AboutUs() {
  return (
    <div>
      <div id='phoneId' >Currently This Page is Not Available For Your Mobile.<br/><br/><br/>
      <center>LOL 😂</center></div>
    <div className="about-us-main">
      <div className="about-us-first">
        <div className="about-us-text1">
          <Typewriter
            className="aboutUsH1"
            onInit={(Typewriter) => {
              Typewriter.typeString(
                "Hello World ! This is S C A A R D !"
              ).start();
            }}
          />
          <h2 id="aboutUsH2">
            S C A A R D is all about T E A M - E F F O R T{" "}
          </h2>
          <h3 id="aboutUsH3">
            Get to know our story and our team<br />
        
          </h3>
          <br />
          <br />
        </div>
        <center>
          <img id="grpPic" src='https://raw.githubusercontent.com/adrian20191176/rough/main/Version%202/src/Images/group.jpg' />
        </center>
      </div>
      <div className="about-us-second">
        <div className="about-us-text2">
          <h2 id="aboutUsH2">
            It all started in 2020
            <br />
            <br />
          </h2>
          <h3 id="aboutUsH3">
            Just a bunch of undergraduates
            <br />
            All six of us were friends. Each had primary skills of developing different technologies. One day, all of a sudden,<br/>
            an idea of helping app entrepreneurs came to our mind. So, we joined our hands to create this web application for those who are in need<br/>
            of knowing their app's reputaion.
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
          <h6 id="workTitle">Cloud Developer</h6>
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
    </div>
  );
}

export default AboutUs;
