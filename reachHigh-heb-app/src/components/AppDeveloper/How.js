import React, { useState } from "react";
import "./how.css";
import right from "../../Images/right.png";
import left from "../../Images/left.png";

function How(){
    return(
        <div class="resultContain">
                <div class="subresultContain">
          <h2>In the attractiveness insights,if your app is</h2>
          <ul>Free then you will be given a score of 1</ul>
          <ul>Editor’s choice then you will be given a score of 1</ul>
        <ul>having above the limit of downloads then you will be given a score of 1</ul>

        </div>
        <div class="subresultContain">
          <img src={right} width="100%" height="100%"/>
        </div>
        <div class="subresultContain">
            <img src={left} width="100%" height="100%"/>
        </div>
        <div class="subresultContain">
          <h2>In the trustworthiness insights, your app's</h2>

          <ul>rating will be considered.</ul>
          <ul>user reviews will be taken and each and every review gets a sentiment score. And Final Average of those reviews will be calculated to give score.</ul>
        </div>
      </div>
    )}

export default How;