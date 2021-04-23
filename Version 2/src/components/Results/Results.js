import "./Results.css";
import React, { useEffect, useState } from "react";
import { callResultLink } from "../../Service/EndPoints";
import ReviewsBar from "../reviews/ReviewsBar";

function Results() {
  const [firstAverage, setFirstAverage] = useState([]);
  const [finalScore, setFinalScore] = useState([]);
  const [finalStatus, setFinalStatus] = useState([]);
  const [downloads, setDownloads] = useState([]);
  const [editors, setEditors] = useState([]);
  const [free, setFree] = useState([]);
  const [percentage, setPercentage] = useState([]);
  const [rating, setRating] = useState([]);
  const [secondAverage, setSecondAverage] = useState([]);
  const [status, setStatus] = useState([]);
  const [topNegative, setTopNegative] = useState([]);
  const [topPositive, setTopPositive] = useState([]);
  const [title, setTitle] = useState([]);
  const [icon, setIcon] = useState([]);

  const testing = async () => {
    const dataa = await callResultLink();
    console.log(dataa.data);
    setTitle("Facebook");
    setIcon(
      "https://play-lh.googleusercontent.com/ccWDU4A7fX1R24v-vvT480ySh26AYp97g1VrIB_FIdjRcuQB2JP2WdY7h_wVVAeSpg=s180-rw"
    );
    setFirstAverage(dataa.data.attractiveness.firstAverage);
    // setFirstAverage(62);
    setDownloads(dataa.data.attractiveness.downloads);
    setEditors(dataa.data.attractiveness.editors);
    setFree(dataa.data.attractiveness.free);

    setPercentage(dataa.data.trustworthiness.percentage);
    setRating(dataa.data.trustworthiness.rating);
    setSecondAverage(dataa.data.trustworthiness.secondAverage);
    // setSecondAverage(56);
    setStatus(dataa.data.trustworthiness.status);
    setTopNegative(dataa.data.trustworthiness.topNegative);
    setTopPositive(dataa.data.trustworthiness.topPositive);

    setFinalScore(dataa.data.finalScore);
    // setFinalScore(56);
    setFinalStatus(dataa.data.finalStatus);
  };

  useEffect(() => {
    testing();
  }, []);
  return (
    <div>
      <div className="resultContain">
        <div className="subA">
          <h2 className="headH">How Attractive Your App is</h2>
          <div className="reviewBarss"></div>
          <ReviewsBar score={firstAverage} />
        </div>
        <div className="subB">
          <h2 className="headH">{title}</h2>
          <center>
            <div className="ikon">
              <img src={icon} />
            </div>
          </center>
          <p>You Have Good Review As {topPositive[0]}</p>
          <p>You Have Bad Review As {topNegative[0]}</p>
        </div>

        <div className="subC">
          <h2 className="headH">
            You got a score of {percentage} for customer trust
          </h2>
          <div className="reviewBarss">
            <ReviewsBar id="barR" score={secondAverage} />
          </div>
        </div>
      </div>
      <hr width="50%" />
      <div className="mainResultss">
        <h2 className="headH">
          In the trustworthiness insights, if your app is
        </h2>
        <div className="resultContainsss">
          <div className="subResults">
            <p>Free Application Score: {free}</p>
            <p>Download Score: {downloads}</p>
            <p>Recognize Score: {editors}</p>
          </div>
          <div className="subResults">
            <h1 className="fainalskor">{finalScore}%</h1>
          </div>
          <div className="subResults">
            <p> Rating Score: {rating}</p>
            <h3>Your App Has a {status} View. </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
