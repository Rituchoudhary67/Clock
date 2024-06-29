function currentTime() {
    var date = new Date();
    var now = date.toLocaleString('en-us',{hour12:false});
    document.getElementById('currentTime').innerHTML = now;
}

setInterval(currentTime);

var alarmSound = new Audio("sound.wav");

function setAlarm() {
    var alarmTime = document.getElementById('alarmTime').ariaValueMax;
    var now = new Date();
    var alarm = new Date(now.toDateString() + " " + alarmTime);

    var timeRemaining = alarm - now;

    setTimeout(playAlarm, timeRemaining);

    document.getElementById('alarmTime').disabled = true;
}

function playAlarm() {
    alarmSound.play();
    document.getElementById('alarmTime').disabled = false;
}
