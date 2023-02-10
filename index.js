console.log("Welcome to spotify");
let songIndex=0;
let audioElement = new Audio('golimar.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs =
[
    {songName:"Thee Thalapathy" ,filePath:"1.mp3" , coverPath:"cover.png" },
    {songName:"What the life" ,filePath:"2.mp3" , coverPath:"cover1.png" },
    {songName:"Manohara" ,filePath:"3.mp3" , coverPath:"cover2.png" },
    {songName:"ha ha" ,filePath:"4.mp3" , coverPath:"cover3.png" },
]

// songItems.forEach((element) => {
//     element.getElementByTagName('img')[0].src= songs[i].coverPath;
//     element.getElementByClassName('songName')[0].innerText = songs[i].songName;
// })
audioElement.addEventListener('timeupdate',() => {
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
});
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;
})


masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
});


