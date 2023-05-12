const playVideoEle = document.querySelector('.play');
const playIcon = document.querySelector('.play-icon');
const pauseIcon = document.querySelector('.pause-icon');
const videoEle = document.querySelector('video');
const rangeInput = document.querySelector('input');
const stopIcon = document.querySelector('.stop')


const playVideo = function() {
    playIcon.classList.add('hide');
    pauseIcon.classList.remove('hide');
    videoEle.play()
}

const pauseVideo = function() {
    playIcon.classList.remove('hide');
    pauseIcon.classList.add('hide');
    videoEle.pause()
}

const updateProgress = function() {
    const time = document.querySelector('.time');
    let currentTime = (videoEle.currentTime / videoEle.duration ) * 100;
    rangeInput.value = currentTime;

    let minute = Math.floor(videoEle.currentTime / 60) 
     if(minute < 10) 
       minute  = '0' + minute
  
    let second = Math.floor(videoEle.currentTime  % 60) 
    if (second < 10)
        second = '0' + second
    time.textContent = `${minute}:${second}`
}

const setProgress = function() {
  videoEle.currentTime = (+rangeInput.value * videoEle.duration) / 100;
}

const stopVideo = function() {
    videoEle.currentTime = 0;
    pauseVideo()
}

playIcon.addEventListener('click',playVideo)
pauseIcon.addEventListener('click',pauseVideo)
videoEle.addEventListener('timeupdate',updateProgress)
stopIcon.addEventListener('click',stopVideo)
rangeInput.addEventListener('change',setProgress)