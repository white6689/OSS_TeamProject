var readline = require('readline');
//키보드로 부터 입력받기 readline 모듈을 사용
var r = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});//입력, 출력 설정

r.setPrompt("지역(종료는 exit을 입력): ")
r.prompt();
r.on('line', function(line){//한줄 입력받기
    if(line == 'exit'){
        r.close();
    }
    const covid19 = require("../index");
    (async () => {
        let corona = await covid19.getTotal(line)
        console.log(corona[0])
    })()
});
r.on('close', function(){
    process.exit();
});
/*
const covid19 = require("../index");
(async () => {
        let corona = await covid19.getTotal("서울")
        document.write(corona[0])
})()
*/