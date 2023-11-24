console.log("welcome to spotify");

//initialize the variable
let songIndex = 0;
let audioElement = new Audio('C:\Users\lenovo\Desktop\project sem 3\music\ssometimes.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songs = [
    { songName: "sometime", filePath: "C:\Users\lenovo\Desktop\project sem 3\music\ssometimes.mp3", coverPath: "some time.jpg " },
]

//audioElement.play();
//handle play/pause click
masterplay.addEventListener('click', () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        } else {
            audioElement.pause();
            masterplay.classList.remove('fa-pause-circle');
            masterplay.classList.add('fa-play-circle');
            gif.style.opacity = 1;
        }
    })
    //listen to events
myprogressbar.addEventListener('timeupdate', () => {
    console.log('timeupdate');

    //update seekbar
})