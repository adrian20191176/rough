import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
import "./how.css";
import { Link} from "react-router-dom";
import { callAppLink } from "../../Service/EndPoints";
import background from "../../Images/appDev.jpg";

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
          <img src="box2.png" width="100%" height="100%"/>
        </div>
        <div class="subresultContain">
            <img src="box4.png" width="100%" height="100%"/>
        </div>
        <div class="subresultContain">
          <h2>In the trustworthiness insights, if your app is</h2>

          <ul>In good rating then you will be given 01</ul>
          <ul>Filled with good reviews then you will be given 01</ul>
        </div>
      </div>
    )}

export default How;