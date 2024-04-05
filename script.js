console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Toxic", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Brown Munde", filePath: "songs/2.mp3", coverPath: "covers/2.jpeg"},
    {songName: "Takeover", filePath: "songs/3.mp3", coverPath: "covers/3.jpeg"},
    {songName: "Foregins", filePath: "songs/4.mp3", coverPath: "covers/4.jpeg"},
    {songName: "Fate", filePath: "songs/5.mp3", coverPath: "covers/5.jpeg"},
    {songName: "GOAT", filePath: "songs/2.mp3", coverPath: "covers/6.jpeg"},
    {songName: "Saada Pyar", filePath: "songs/2.mp3", coverPath: "covers/7.jpeg"},
    {songName: "Drip", filePath: "songs/2.mp3", coverPath: "covers/8.jpeg"},
    {songName: "Insane", filePath: "songs/2.mp3", coverPath: "covers/9.jpeg"},
    {songName: "Spaceship", filePath: "songs/4.mp3", coverPath: "covers/10.jpeg"},
    {songName: "Against All Odds", filePath: "songs/11.mp3", coverPath: "covers/10.jpeg"},
    {songName: "Desires", filePath: "songs/12.mp3", coverPath: "covers/10.jpeg"},
    {songName: "Majhe Aale", filePath: "songs/13.mp3", coverPath: "covers/10.jpeg"},
    {songName: "War", filePath: "songs/14.mp3", coverPath: "covers/10.jpeg"},
    {songName: "Tere Te", filePath: "songs/15.mp3", coverPath: "covers/10.jpeg"},
    {songName: "Top Boy", filePath: "songs/16.mp3", coverPath: "covers/14.jpeg"},
    {songName: "Arrogant", filePath: "songs/17.mp3", coverPath: "covers/17.jpeg"},
    {songName: "Chances", filePath: "songs/18.mp3", coverPath: "covers/3.jpeg"},
    {songName: "Droptop", filePath: "songs/19.mp3", coverPath: "covers/20.jpg"},
    {songName: "Excuses", filePath: "songs/20.mp3", coverPath: "covers/18.jpeg"},
    {songName: "Fake", filePath: "songs/21.mp3", coverPath: "covers/19.jpeg"},
    {songName: "Feels", filePath: "songs/22.mp3", coverPath: "covers/12.jpeg"},
    {songName: "Ma Belle", filePath: "songs/24.mp3", coverPath: "covers/16.jpeg"},
    {songName: "Majhali", filePath: "songs/23.mp3", coverPath: "covers/15.jpeg"},
    {songName: "All Night", filePath: "songs/25.mp3", coverPath: "covers/11.jpeg"},
    {songName: "Dil Nu", filePath: "songs/26.mp3", coverPath: "covers/11.jpeg"},
    {songName: "Final Thoughts", filePath: "songs/27.mp3", coverPath: "covers/11.jpeg"},
    {songName: "Hills", filePath: "songs/28.mp3", coverPath: "covers/11.jpeg"},
    {songName: "Summer High", filePath: "songs/.29mp3", coverPath: "covers/11.jpeg"},
    {songName: "Wo Noor", filePath: "songs/30.mp3", coverPath: "covers/11.jpeg"},
    {songName: "295", filePath: "songs/31.mp3", coverPath: "covers/MT.jpg"},
    //{songName: "Everybody Hurts", filePath: "songs/32.mp3", coverPath: "covers/112.jpg"},
   // {songName: "Love Sick", filePath: "songs/33.mp3", coverPath: "covers/112.jpg"},
   // {songName: "Never Fold", filePath: "songs/34.mp3", coverPath: "covers/112.jpg"},
    //{songName: "0 to 100", filePath: "songs/35  .mp3", coverPath: "covers/112.jpg"},



]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=30){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})