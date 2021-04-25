import React, { useState } from "react";
import "./how.css";
import right from "../../Images/right.png";
import left from "../../Images/left.png";

function How(){
    return(
        <div class="resultContain">
                <div class="subresultContain">
          <h2>In the attractiveness insights,if your app is</h2>
          <ul>Free then you will be given score 01</ul>
          <ul>Editor’s choice then you will be given 01</ul>
        <ul>Beyond the range of downloads then you will be given score 01</ul>

        </div>
        <div class="subresultContain">
          <img src={right} width="100%" height="100%"/>
        </div>
        <div class="subresultContain">
            <img src={left} width="100%" height="100%"/>
        </div>
        <div class="subresultContain">
          <h2>In the trustworthiness insights, if your app is</h2>

          <ul>In good rating then you will be given 01</ul>
          <ul>Filled with good reviews then you will be given 01</ul>
        </div>
      </div>
    )}

export default How;