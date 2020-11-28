var express = require('express');
var router = express.Router();
var covid=require('covid19-korea');


var cities=["서울" , "부산", "대구", "인천","광주", "대전", "울산", "세종", "경기", "강원", "충북", "전북", "전남", "경북", "경남" ,"제주" ];
var inform_cities=[];
/* GET home page. */
router.get('/', function(req, res, next) {
    (async () => {
        for(var i=0;i<cities.length;i++)
        {
            var corona_t=await covid.getTotal(cities[i]);
            var arr=[];
            arr.push(JSON.stringify(corona_t[0].confirm));
            arr.push(JSON.stringify(corona_t[0].dead));
            arr.push(JSON.stringify(corona_t[0].cure));
            inform_cities.push(arr);
        }
            let corona = await covid.getTotal();

    res.render('index', {
    title: JSON.stringify(corona[0].confirm).replace(/["]+/g, "")+"명"
    ,dead: JSON.stringify(corona[0].dead).replace(/["]+/g, "")+"명"
    ,accumlate: JSON.stringify(corona[0].accumlate).replace(/["]+/g, "")
    ,cure: JSON.stringify(corona[0].cure).replace(/["]+/g, "")+"명"
   // ,title_s: JSON.stringify(corona_s[0].confirm).replace(/["]+/g, "")
   // ,title_bu: [cities[1], JSON.stringify(corona_bu[0].confirm), JSON.stringify(corona_bu[0].dead),JSON.stringify(corona_bu[0].accumlate),JSON.stringify(corona_bu[0].cure)]
    ,cities: cities
    ,inform_cities: inform_cities


//사망. 검사수, 완치자 수
});
})()
});


module.exports = router;
