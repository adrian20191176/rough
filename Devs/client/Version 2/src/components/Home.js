import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  const [link, setLink] = useState([]);

  //   downloadable or not  (1 or 0)
  // predictable rating and playStore rating

  return (
    <div>
      {/* <div className="container"> */}
      <form>
        <p>
          <input
            type="text"
            placeholder="Paste the link.."
            onChange={(e) => setLink(e.target.value)}
          />

          <Link
            to={{ pathname: "/Container/Confirmation", state: { ai: link } }}
          >
            <button className="get">
              {/* <button className="get" onClick={handleSubmit}> */}
              Submit
            </button>
          </Link>
        </p>
      </form>
      {/* </div> */}
    </div>
  );
}

export default Home;
