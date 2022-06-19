const homeclock = document.querySelector(".clock h2");
const mainclock = document.querySelector("#mainclock");

function getClock(){
    const date = new Date();
    const Hours = String(date.getHours()).padStart(2,"0");
    const Minutes = String(date.getMinutes()).padStart(2,"0");
    const Seconds = String(date.getSeconds()).padStart(2,"0");
    homeclock.innerText = `${Hours} : ${Minutes} : ${Seconds}`;
    mainclock.innerText = `${Hours} : ${Minutes} : ${Seconds}`;
}

getClock();
setInterval(getClock,1000);