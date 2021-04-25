const gplay = require('google-play-scraper');
const {appResult} = require('./appResult');
const { run } = require('./sentiment');

const results = new appResult();
var currentApp='com.facebook.lite';
// var currentApp= 'com.PloyPlayGames1.RockScissorsPaperOnline1'
const saySomething = (req, res, next) => {
    res.status(200).json({
        body: hi
    });
};

const getApp = (req, res, next) => {
  var appId = req.url.split('app/')[1];
  appId = appId.split('&')[0];
    currentApp=appId;
    console.log(appId)
    gplay.app({appId:appId}).then(
        async (app) =>{
            // currentApp= appId;
            results.setAttractiveness(app.minInstalls,app.editorsChoice,app.free,app.title,app.icon,app.score)
            console.log(app)
            res.status(200).json(app);
        }
    ).catch((err) =>{
      console.log(err)
        res.status(200).json({title:"SCAARD"});
    })
}

const getResults = (req, res, next) => {
  let topPositive = ["Not Possible","Not Possible","Not Possible","Not Possible","Not Possible"];
  let topNegative = ["Not Possible","Not Possible","Not Possible","Not Possible","Not Possible"];
  gplay.reviews({
    appId:currentApp,num:10}).then(async (reviews) =>{
      let sentiments = await run(reviews.data);
      var noRev = sentiments.scoreList.length;
      if(noRev>=10){
        topPositive =[]; topNegative = [];
        for(var i=0;i<5;i++){
          var rev = sentiments.scoreList[i].split("|")[2];
          topNegative.push(rev)
        }
        sentiments.scoreList.slice(Math.max(noRev - 5, 1)).forEach(
          (revi)=>{
          var rev = revi.split("|")[2];
          topPositive.push(rev) 
          }
        )
      }
      topPositive[0] = sentiments.scoreList[sentiments.scoreList.length-1].split('|')[2]
      topNegative[0] = sentiments.scoreList[0].split('|')[2]
        results.setTrustworthiness(sentiments.totalScore,topPositive,topNegative);
    console.log(results);
      res.status(200).json(results)
    })
};

const rough = (req, res, next) =>{
  var appId = req.url.split('app/')[1];
    appId = "com.facebook.lite";
    console.log(appId)
    gplay.app({appId:appId}).then(
        async (app) =>{
            currentApp= appId;
            results.setAttractiveness(app.minInstalls,app.editorsChoice,app.free)
            res.status(200).json(results);
        }
    ).catch((err) =>{
      console.log(err)
        res.status(200).json({title:"SCAARD"});
    })
}

module.exports.saySomething = saySomething;
module.exports.getApp = getApp;
module.exports.getResults = getResults;
module.exports.rough = rough;