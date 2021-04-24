import React, { useEffect, useState } from "react";
import { callResultLink } from "../Service/EndPoints";

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

  const testing = async () => {
    const dataa = await callResultLink();
    console.log(dataa.data);
    //setFirstAverage(dataa.data.attractiveness.firstAverage);
    setFirstAverage(62);
    setDownloads(dataa.data.attractiveness.downloads);
    setEditors(dataa.data.attractiveness.editors);
    setFree(dataa.data.attractiveness.free);

    setPercentage(dataa.data.trustworthiness.percentage);
    setRating(dataa.data.trustworthiness.rating);
    // setSecondAverage(dataa.data.trustworthiness.secondAverage);
    setSecondAverage(56);
    setStatus(dataa.data.trustworthiness.status);
    setTopNegative(dataa.data.trustworthiness.topNegative);
    setTopPositive(dataa.data.trustworthiness.topPositive);

    //setFinalScore(dataa.data.finalScore);
    setFinalScore(56);
    setFinalStatus(dataa.data.finalStatus);
  };

  useEffect(() => {
    testing();
  }, []);

  const mystyle = {
    color: "brown",
    textDecoration: "underline",
  };

  return (
    <div>
      {/* //FIRST CONTAINER IN RESULTS PAGE */}
      <div className="calculateProcess">
        <fieldset className="field_set">
          <legend>How We Calculate The Results</legend>
          <div>
            <h4>
              Under the basis of attractiveness and trustworthiness the scores
              will be given
            </h4>

            <p>In the attractiveness insights,if your app is</p>
            <ul>• Free then you will be given score 01</ul>
            <ul>• Editor’s choice then you will be given 01</ul>
            <ul>
              • Beyond the range of downloads then you will be given score 01
            </ul>
            <p>In the trustworthiness insights, if your app is</p>
            <ul>• In good rating then you will be given 01</ul>
            <ul>• Filled with good reviews then you will be given 01</ul>
          </div>
        </fieldset>
      </div>

      {/* POINTS CONTAINER / FIST MIDDLE CONTAINER */}
      <div className="points">
        <fieldset className="field_set2">
          <legend>Points to Each Elements</legend>
          <div className="left">
            <p>Download Score: {downloads}</p>
            <p>Editors: {editors}</p>
            <p>Free Application: {free}</p>
            <p />
            <p>Sentiment score: {percentage}</p>
            <p>Rating Score: {rating}</p>
          </div>

          <div className="right">
            <h1>{firstAverage}%</h1>
            <h1 id="secondAverage">{secondAverage}%</h1>
          </div>
        </fieldset>
      </div>

      {/* DETAILED RESULTS CONTAINER / LAST CONTAINER */}
      <div className="detailedResults">
        <fieldset className="field_set">
          <legend>Detailed Analysis</legend>
          <h1>You got a score of {percentage} for customer trust</h1>
          <h2 style={mystyle}>Top 5 Positive Reviews</h2>
          <p>• {topPositive[0]}</p>
          <p>• {topPositive[1]}</p>
          <p>• {topPositive[2]}</p>
          <p>• {topPositive[3]}</p>
          <p>• {topPositive[4]}</p>
          <h2 style={mystyle}>Top 5 Negative Reviews</h2>
          <p>• {topNegative[0]}</p>
          <p>• {topNegative[1]}</p>
          <p>• {topNegative[2]}</p>
          <p>• {topNegative[3]}</p>
          <p>• {topNegative[4]}</p>
          <h3>Your App Has a {status} View. </h3>
        </fieldset>
      </div>

      {/* RESULTS CONTAINER / LAST MIDDLE CONTAINER */}
      <div className="resultsBox">
        <fieldset className="field_set3">
          <h2>{finalScore}</h2>
          <h1>{finalStatus}</h1>
        </fieldset>
      </div>
    </div>
  );
}

export default Results;
