var express = require('express');
var router = express.Router();
var covid=require('covid19-korea');

/* GET home page. */
router.get('/', function(req, res, next) {
    (async () => {
    let corona = await covid.getTotal();
    let corona_s=await covid.getTotal("서울");
    let corona_bu=await covid.getTotal("부산");
    let corona_dag=await covid.getTotal("대구");
    let corona_inc=await covid.getTotal("인천");
    let corona_gwa=await covid.getTotal("광주");
    let corona_daj=await covid.getTotal("대전");
    let corona_uls=await covid.getTotal("울산");
    let corona_sej=await covid.getTotal("세종");
    let corona_gag=await covid.getTotal("경기");
    let corona_gao=await covid.getTotal("강원");
    let corona_chb=await covid.getTotal("충북");
    let corona_chn=await covid.getTotal("충남");
    let corona_jub=await covid.getTotal("전북");
    let corona_jun=await covid.getTotal("전남");
    let corona_gub=await covid.getTotal("경북");
    let corona_gun=await covid.getTotal("경남");
    let corona_jej=await covid.getTotal("제주");

    res.render('index', {
    title: JSON.stringify(corona[0].confirm).replace(/["]+/g, "")+"명"
    ,dead: JSON.stringify(corona[0].dead).replace(/["]+/g, "")+"명"
    ,accumlate: JSON.stringify(corona[0].accumlate).replace(/["]+/g, "")
    ,cure: JSON.stringify(corona[0].cure).replace(/["]+/g, "")+"명"
    ,title_s: JSON.stringify(corona_s[0].confirm).replace(/["]+/g, "")
    ,title_bu: JSON.stringify(corona_bu[0].confirm).replace(/["]+/g, "")
    ,title_dag: JSON.stringify(corona_daj[0].confirm).replace(/["]+/g, "")
    ,title_inc: JSON.stringify(corona_inc[0].confirm).replace(/["]+/g, "")
    ,title_gwa: JSON.stringify(corona_gwa[0].confirm).replace(/["]+/g, "")
    ,title_daj: JSON.stringify(corona_daj[0].confirm).replace(/["]+/g, "")
    ,title_uls: JSON.stringify(corona_uls[0].confirm).replace(/["]+/g, "")
    ,title_sej: JSON.stringify(corona_sej[0].confirm).replace(/["]+/g, "")
    ,title_gag: JSON.stringify(corona_gag[0].confirm).replace(/["]+/g, "")
    ,title_gao: JSON.stringify(corona_gao[0].confirm).replace(/["]+/g, "")
    ,title_chb: JSON.stringify(corona_chb[0].confirm).replace(/["]+/g, "")
    ,title_chn: JSON.stringify(corona_chn[0].confirm).replace(/["]+/g, "")
    ,title_jub: JSON.stringify(corona_jub[0].confirm).replace(/["]+/g, "")
    ,title_jun: JSON.stringify(corona_jun[0].confirm).replace(/["]+/g, "")
    ,title_jej: JSON.stringify(corona_jej[0].confirm).replace(/["]+/g, "")



//사망. 검사수, 완치자 수
});
})()
});


module.exports = router;
