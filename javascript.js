setInterval(function(){

const currentTime = new Date();
let hour = currentTime.getHours();
let min = currentTime.getMinutes();
let sec = currentTime.getSeconds();

// ============ring alaram=========


if(hour==localStorage.getItem('hour')&&min==localStorage.getItem("minutes")){
  let x =document.getElementById('audio');
  x.play();

// ====pause alarm=======

  document.getElementById('clear-alarm').addEventListener('click',()=>{
x.pause();
document.getElementById('upcoming-alarm').style.display="none";
localStorage.setItem('hour',0 );
localStorage.setItem('minutes', 0);
location.reload();
  })
}
// ========================

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


// =========set alaram========
document.getElementById('save-changes').addEventListener('click',()=>{
let time= document.getElementById('set-time').value;
let hr=parseInt(time.slice(0, 2));
let minute=parseInt(time.slice(3));
localStorage.setItem("hour", hr);
localStorage.setItem("minutes", minute);
if(hr>12){
  hr=hr-12;
  document.getElementById('upcoming-alarm').style.display="block";
  document.getElementById('upcoming-alarm-time').innerHTML=`${(hr<10?'0'+hr:hr)+" : "+(minute<10?'0'+minute:minute)+" PM "}`;
  
}else{
  document.getElementById('upcoming-alarm').style.display="block";
  document.getElementById('upcoming-alarm-time').innerHTML=`${(hr<10?'0'+hr:hr)+" : "+(minute<10?'0'+minute:minute)+" AM "}`;
}

   
});


// ====================




