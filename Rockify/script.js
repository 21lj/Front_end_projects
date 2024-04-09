console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');
let cover = document.getElementById('bannerimg');
let bannername = document.getElementById('bannername');
let songs = [
    {songName: "BoyWithUke - Two Moons", filePath: "songs/1.mp3", coverPath: "covers/1.jpg", duration: "3:44" },
    {songName: "BoyWithUke - IDGAF", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" , duration: "2:22"},
    {songName: "Seafret - Atlantis (Sped Up Version)", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" , duration: "3:32"},
    {songName: "Passenger - Let Her Go ", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" , duration: "4:12"},
    {songName: "YNW Melly - Mixed Personalities", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" ,duration: "3:50" },
    {songName: "BoyWithUke - idtwcbf (friends)", filePath: "songs/2.mp3", coverPath: "covers/6.jpg" , duration: "2:31"},
    {songName: "BoyWithUke - Trauma", filePath: "songs/2.mp3", coverPath: "covers/7.jpg" , duration: "2:44"},
    {songName: "AJR - World s Smallest Violin", filePath: "songs/2.mp3", coverPath: "covers/8.jpg" ,duration: "3:00" },
    {songName: "The Weeknd - After Hours", filePath: "songs/2.mp3", coverPath: "covers/9.jpg" ,duration: "6:01" },
    {songName: "Young Maylay - San Andreas Theme Song", filePath: "songs/4.mp3", coverPath: "covers/10.jpg" , duration: "1:26" }
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("timestamp")[0].innerText=songs[i].duration;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    element.getElementsByClassName("songName")[0].title=songs[i].songName;
})

//audioElement.play();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        let pop = document.getElementById(`${songIndex}`);
        pop.classList.remove('fa-play-circle');
        pop.classList.add('fa-pause-circle');
        
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        let pop = document.getElementById(`${songIndex}`);
        pop.classList.remove('fa-pause-circle');
        pop.classList.add('fa-play-circle');
        
    }
})
//Listen to events


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
    element.addEventListener('click',(e)=>{
       // console.log(e.target);
        makeAllPlays();
        if(audioElement.paused){
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
        cover.src=`covers/${songIndex+1}.jpg`;
        bannername.innerText=songs[songIndex].songName;
        
        }
        else if(!audioElement.paused){
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            audioElement.pause();
            gif.style.opacity = 0;
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            
        }
    })
    
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex=0;
    }else{
        songIndex+=1;
    }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        makeAllPlays();
        let pop = document.getElementById(`${songIndex}`);
        pop.classList.remove('fa-play-circle');
        pop.classList.add('fa-pause-circle');
        cover.src=`covers/${songIndex+1}.jpg`;
        bannername.innerText=songs[songIndex].songName;
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0;
    }else{
        songIndex-=1;
    }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        makeAllPlays();
        let pop = document.getElementById(`${songIndex}`);
        pop.classList.remove('fa-play-circle');
        pop.classList.add('fa-pause-circle');
        cover.src=`covers/${songIndex+1}.jpg`;
        bannername.innerText=songs[songIndex].songName;
})

