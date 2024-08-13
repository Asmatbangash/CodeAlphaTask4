
let songsIndex = 0;
let audioSong = new Audio('songs/kabhi khushi kabhi gham.mp3');
let mxPlayer = document.getElementById("mxPlayer");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById('gif');
let songsItems = Array.from(document.getElementsByClassName('songsItems'));
let songsPlay = Array.from(document.getElementsByClassName('songsPlay'));



let songs =[
    {songsPath: "songs/kabhi khushi kabhi gham.mp3"},
    {songsPath: "songs/Tum Hi HO.mp3"},
    {songsPath: "songs/Jo Tu mera Humdard.mp3"},
    {songsPath: "songs/jhoome Jo Pathan.mp3"},
    {songsPath: ""}
];

  const allPlay = () =>{
    songsPlay.forEach(Element => {
        Element.classList.remove('fa-circle-pause');
        Element.classList.add('fa-circle-play');
        mxPlayer.classList.remove('fa-play');
        mxPlayer.classList.add('fa-pause');
      
       })

  }
   songsPlay.forEach(Element => {
    Element.addEventListener('click', (e)=>{
        allPlay();
       e.target.classList.remove('fa-circle-play');
       e.target.classList.add('fa-circle-pause');
    })
   })

mxPlayer.addEventListener('click',()=>{
    if(audioSong.paused || audioSong.currentTime <= 0){
        audioSong.play();
        mxPlayer.classList.remove('fa-play');
        mxPlayer.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else{
       audioSong.pause();
        mxPlayer.classList.remove('fa-pause');
        mxPlayer.classList.add('fa-play');
        gif.style.opacity=0;
    }
});

audioSong.addEventListener('timeupdate', ()=>{
    myProgressBar.value = parseInt((audioSong.currentTime/audioSong.duration)*100);
})

myProgressBar.addEventListener('click', ()=>{
    audioSong.currentTime = (myProgressBar.value * audioSong.duration)/100;
})