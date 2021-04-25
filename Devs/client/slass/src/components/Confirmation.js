import React from "react";
import "../App.css";
import { Link } from "react-router-dom";


function Confirmation() {
  return (
    <div className="appimage">
      <img src="/public/fbLite.png" alt="AppIcon" width="300" height="150"></img>
      <h4 className="appName">Facebook Lite</h4>
      <span className="confirm">
        <p> Is this Your app looking for ? </p>
        {
          <Link to={"/Results"}>
            <button className="yes">Yes</button>
          </Link>
        }
        {
          <Link to={"/"}>
            <button className="no">No</button>
          </Link>
        }
      </span>
    </div>
  );
}

export default Confirmation;
