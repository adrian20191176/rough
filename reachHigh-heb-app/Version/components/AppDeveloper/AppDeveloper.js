import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./appDeveloper.css";
import { Link } from "react-router-dom";
import { callAppLink } from "../../Service/EndPoints";
import background from "../../Images/appDev.jpg";
import How from "./How";
import { BiSearch } from "react-icons/bi";

function AppDeveloper() {
  const history = useHistory();
  const [link, setLink] = useState([]);
  const [btn, setBtn] = useState("hidden");
  const [load, setStat] = useState(
    "Tip : 99% of the people will at least have android version JellyBean "
  );
  const [loading, setLoading] = useState("");
  const [app, setApp] = useState([]);
  const mystyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
  };

  const getText = async (e) => {
    e.preventDefault();
    setLoading("Searching For Your App ....");
    setBtn("hidden");
    let sampleTest = "hello";
    try {
    sampleTest = link.split("?id=")[1];
  } catch (error) {
    setLoading("Please Enter A URL");
    return;
  }
    try {
      sampleTest = sampleTest.split("&")[0];
    } catch (error) {
      setLoading("Not a Valid URL");
      return;
    }
    const dataa = await callAppLink(sampleTest);
    if (dataa.data.title == "SCAARD") {
      setLoading("We Couldn't Find Your App!");
      return;
    }
    setLoading("We Found Your App!");
    setBtn("button");
    setApp(dataa.data);
  };
  return (
    <div className="appDev">
      <div className="imgd" style={mystyle}>
        <div className="textContainer">
          <form onSubmit={getText}>
            <center>
              <h1>ReachHigh</h1>
              <h4 id="dialo">
                A Place For App Entreprneurs. Do you think you got your audience
                ?
              </h4>
            </center>
            <div className="box">
              <a>
                <button type="submit">
                  <BiSearch />
                </button>
              </a>
              <input
                type="text"
                placeholder="What's Your App?"
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <center>
              <h4 id="dialo">Enter Your App URL</h4>
              <h1 id="dialo2">{load}</h1>
              <h1 id="dialo2">{loading}</h1>
              <Link to={{ pathname: "/results", state: { just: "hi" } }}>
                <input id="confirmBtn" type={btn} value="Get Your Results" />
              </Link>
            </center>
          </form>
        </div>
      </div>
      <How />
    </div>
  );
}

export default AppDeveloper;
