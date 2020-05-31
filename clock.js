var secDiv = document.getElementById('sec');
var secMin = document.getElementById('min');
var secHour = document.getElementById('hour');

setInterval(updateClock,1000)

function updateClock(){
    var date = new Date();
    var sec = date.getSeconds() / 60;
    var min = (date.getMinutes() + sec) / 60;
    var hour =(date.getHours() + min) / 12 ;

    secDiv.style.transform = "rotate(" + (sec * 360) + "deg)";
    secMin.style.transform = "rotate(" + (min * 360) + "deg)";
    secHour.style.transform ="rotate(" + ( hour * 360) + "deg)";

}
updateClock()