// Add js here.


// function noLoop(){
//     myVideo.loop=false;
//     myVideo.load();
// }

// function noAutoPlay(){
//     myVideo.autoplay=false;
//     myVideo.load();
// }

function vPlay(){
    myVideo.play();
}

function vPause(){
    myVideo.pause();
}

function vSlower() {
    if (myVideo.playbackRate == 2.0) {
        myVideo.playbackRate = 1.0;
    }
    else if (myVideo.playbackRate == 1.0) {
        myVideo.playbackRate = 0.5;
    }
    else {
        myVideo.playbackRate = 0.5;
        window.alert("Video is at slowest speed!");
    }
}

function vFaster() {
    if (myVideo.playbackRate == 0.5) {
        myVideo.playbackRate = 1.0;
    }
    else if (myVideo.playbackRate == 1.0) {
        myVideo.playbackRate = 2.0;
    }
    else {
        myVideo.playbackRate = 2.0;
        window.alert("Video is at fastest speed!");
    }
}

function MuteUnmute() {
    var button_text = document.getElementById('mute');
    if (myVideo.muted == false) {
        myVideo.muted = true;
        button_text.innerHTML = 'Unmute';
        myVideo.volume=0;
        volume.value=0;
        volume_text.textContent=0;
        
    }
    else {
        myVideo.muted = false;
        button_text.innerHTML = 'Mute';
    }
}

function changeVolume(e){
    myVideo.volume=e.currentTarget.value/100;
    volume_text.textContent = myVideo.volume;
}


var myVideo = document.getElementById('videoplayer');

myVideo.load();
myVideo.autoplay=false;
myVideo.loop=false;


var play_button = document.getElementById('play');
var pause_button = document.getElementById('pause');
play_button.addEventListener("click", vPlay);
pause_button.addEventListener("click", vPause);

var slower_button = document.getElementById('slower');
var faster_button = document.getElementById('faster');
var skip_button = document.getElementById('skip');
slower_button.addEventListener("click", vSlower);
faster_button.addEventListener("click", vFaster);


var mute_button = document.getElementById('mute');
var volume = document.getElementById('slider');
var volume_text = document.getElementById('volume');
volume_text.textContent = 1;

mute_button.addEventListener("click", MuteUnmute);
volume.addEventListener("change", changeVolume); 


skip_button.addEventListener("click", function(){
    var dur=myVideo.duration;
    // console.log("duration: "+time);
    if (myVideo.currentTime + 15 > dur) {
        myVideo.currentTime = 0;
        myVideo.pause();
    }
    else{
        myVideo.currentTime += 15;
    }
    
});