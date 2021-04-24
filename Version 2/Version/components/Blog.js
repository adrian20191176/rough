import React, { useState } from "react";
import { callAppLink } from "../Service/EndPoints";

import "./Blog.css";
import { Link } from "react-router-dom";
import img1 from "./BlogImages/Image1.jpg";
import img2 from "./BlogImages/Image2.jpg";

function Blog() {
  return (
    <div>
      <div class="grid-container">
       <p class="para1">
          <h1>
            What user expectfrom an application Before Downloading.
          </h1>
          <center><img src={img2} alt="blogimg" width="400px" height="400px" /></center>
        rr
          If you have a smart phone or other mobile device, you probably use
          apps – to play games, get turn-by-turn directions, access news, books,
          weather, and more. Easy to download and often free, mobile apps can be
          so much fun and so convenient that you might download them without
          thinking about some key considerations: how they’re paid for, what
          information they may gather from your device, or who gets that
          information.
        </p>
        <p class="para2">
          <b>What types of data can apps access?</b>
          <br />
          When you sign up with an app store or download individual apps, you
          may be asked for permission to let them access information on your
          device. Some apps may be able to access:
          <ul>
            <li>your phone and email contacts</li>
            <li>call logs</li>
            <li>internet data</li>
            <li>calendar data</li>
            <li>data about the device’s location</li>
            <li>the device’s unique IDs</li>
            <li>information about how you use the app itself</li>
          </ul>
          Some apps access only the data they need to function; others access
          data that’s not related to the purpose of the app.
        </p>
        <p class="para2">
          <b>Why does the app I downloaded have ads in it?</b> <br />
          Developers want to provide their apps as inexpensively as possible so
          lots of people will use them. If they sell advertising space in the
          app, they can offer the app for a lower cost than if it didn’t have
          ads. Some developers sell space in their apps to ad networks that, in
          turn, sell the space to advertisers.
          <br />
          <br />
          <b>Why do I see the ads I do?</b>
          <br />
          Advertisers believe you’re more likely to click on an ad targeted to
          your specific interests. Some ad networks gather the information apps
          collect, including your location data, and may combine it with
          information about your Internet browsing habits or the kind of
          information you provide when you register for a service or buy
          something online.
        </p>
      </div>
    </div>
  );
}

export default Blog;
