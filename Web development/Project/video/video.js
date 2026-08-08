const video=document.getElementById("video");

const file=document.getElementById("videoFile");

const play=document.getElementById("play");

const pause=document.getElementById("pause");

const fullscreen=document.getElementById("fullscreen");

const volume=document.getElementById("volume");

const name=document.getElementById("videoName");

file.onchange=function(){

const selected=this.files[0];

if(selected){

video.src=URL.createObjectURL(selected);

name.innerText=selected.name;

video.load();

}

}

play.onclick=function(){

video.play();

}

pause.onclick=function(){

video.pause();

}

volume.oninput=function(){

video.volume=this.value;

}

fullscreen.onclick=function(){

video.requestFullscreen();

}