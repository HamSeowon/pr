let target = document.querySelector("#dynamic");
function blink(){
    target.classList.toggle("active"); /*active is class name in css file */
}
setInterval(blink, 500); /* loop */

function randomString(){
    let stringArr = ["Love Lee","Love Me","Love You"]
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringARR = selectString.split("") /*하나하나 쪼개짐 */

    return selectStringARR
}
function resetTyping(){
    target.textContent = " ";
    dynamic(randomString());
}
//한글자씩 텍스트 출력 함수
function dynamic(randomArr){
    if(randomArr.length > 0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        }, 80);
    }else{
        setTimeout(resetTyping, 3000)
    }
}
dynamic(randomString());
