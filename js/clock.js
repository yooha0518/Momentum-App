const clock=document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;
}

getClock();
//결과가 나오기까지 1초가 걸리기때문에 함수를 먼저 실행시킨다.
setInterval(getClock,1000); 