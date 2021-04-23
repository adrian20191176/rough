let downloadBorder = 100000

class appResult{
    constructor() {
         this.attractiveness = {downloads:0,editors:0,free:0,firstAverage:0.0};  
         this.trustworthiness= {
                rating: 0.0,
                topPositive:["Best","Good","Wonderful App","Bestest","Super"],
                topNegative:["I won't recommend","Not good","Awful","Very Bad","Bad"],
                percentage: 50.0,
                status: "Believable",
                secondAverage:0.0
              };
        this.finalScore = 0.0;
        this.finalStatus= "Good";
        this.title = "SCAARD";
        this.icon="asdasasa";
    }
        
//   finalScore:finalScore,
//   finalStatus:"Good"
      setAttractiveness(minInstalls,editors,free,titl,ico,ra){
        let a = 0 
        let b = 0 
        let c = 0;
        if(minInstalls>downloadBorder){
            this.attractiveness.downloads = 1;
            a = 1;
        }
        if(editors==true){
            this.attractiveness.ediotrs = 1;
            b = 1;
        }
        if(free==true){
            this.attractiveness.free = 1;
            c = 1;
        }
        this.title = titl;
        this.icon = ico;
        this.attractiveness.firstAverage = Math.floor(((a+b+c)/3)*100);
        this.trustworthiness.rating = Math.floor(ra*2);
    }

    setTrustworthiness(score,arrPositive,arrNegative){
        this.trustworthiness.percentage = Math.floor(score*100);
        if(this.trustworthiness.percentage>=70){
            this.trustworthiness.status = "Good"
        }else if(this.trustworthiness.percentage>=40){
            this.trustworthiness.status = "Okay"
        }else{
            this.trustworthiness.status = "Bad"
        }
        this.trustworthiness.topPositive = arrPositive;
        this.trustworthiness.topNegative = arrNegative;
        this.trustworthiness.secondAverage = Math.floor(((this.trustworthiness.percentage+this.trustworthiness.rating)/110)*100);
        this.finalScore = (this.trustworthiness.secondAverage*70+this.attractiveness.firstAverage*30)/100;
        if(this.finalScore<60){
            this.finalStatus= "Bad";
        }else{
            this.finalStatus ="Good";
        }
    }
}

module.exports = {
    appResult
};
