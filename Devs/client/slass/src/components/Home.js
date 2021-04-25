import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <form>
        <p>
          <input type="text" placeholder="Paste the link.." />
          {
            <Link to={"/Confirmation"}>
              <button className="get">Submit</button>
            </Link>
          }
        </p>
      </form>
      <div className="help">Help</div>
    </div>
  );
}

export default Home;
