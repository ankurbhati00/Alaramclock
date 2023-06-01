setInterval(function(){

const currentTime = new Date();
let hour = currentTime.getHours();
let min = currentTime.getMinutes();
let sec = currentTime.getSeconds();
let am_pm="AM";
if(hour>12){
    hour=hour%12;
    am_pm="PM";
}

let secDeg=sec*6+90;
let minDeg=min*6+90;
let hrDeg=(hour*60)/2+90+(min/2);

document.getElementById('hh').innerHTML=hour<10?"0"+hour:hour;
document.getElementById('mm').innerHTML=min<10?"0"+min:min;
document.getElementById('am-pm').innerHTML=am_pm;

    document.getElementById("second-hand").style.cssText = `
    transform:rotate(${secDeg+"deg"});
  `;
    document.getElementById("minute-hand").style.cssText = `
    transform:rotate(${minDeg+"deg"});
  `;
    document.getElementById("hour-hand").style.cssText = `
    transform:rotate(${hrDeg+"deg"});
  `;


}, 1000);


   
