// scripts/script.js

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const progress = document.getElementById('progress');
    const volumeControl = document.getElementById('volume');

    playButton.addEventListener('click', function() {
        audio.play();
    });

    pauseButton.addEventListener('click', function() {
        audio.pause();
    });

    volumeControl.addEventListener('input', function() {
        audio.volume = volumeControl.value;
    });

    audio.addEventListener('timeupdate', function() {
        const percentage = (audio.currentTime / audio.duration) * 100;
        progress.value = percentage;
    });

    progress.addEventListener('input', function() {
        const value = (progress.value / 100) * audio.duration;
        audio.currentTime = value;
    });
});
