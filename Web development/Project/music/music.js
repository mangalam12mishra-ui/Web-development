const audio = document.getElementById("audio");

const musicFile = document.getElementById("musicFile");

const songName = document.getElementById("songName");

const play = document.getElementById("play");

const pause = document.getElementById("pause");

const volume = document.getElementById("volume");

const progress = document.getElementById("progress");

const current = document.getElementById("current");

const duration = document.getElementById("duration");

musicFile.onchange = function(){

const file=this.files[0];

if(file){

audio.src=URL.createObjectURL(file);

songName.innerText=file.name;

audio.load();

}

}

play.onclick=()=>{

audio.play();

}

pause.onclick=()=>{

audio.pause();

}

volume.oninput=()=>{

audio.volume=volume.value;

}

audio.addEventListener("loadedmetadata",()=>{

progress.max=audio.duration;

duration.innerText=format(audio.duration);

});

audio.addEventListener("timeupdate",()=>{

progress.value=audio.currentTime;

current.innerText=format(audio.currentTime);

});

progress.oninput=()=>{

audio.currentTime=progress.value;

}

function format(time){

let min=Math.floor(time/60);

let sec=Math.floor(time%60);

if(sec<10) sec="0"+sec;

return min+":"+sec;

}