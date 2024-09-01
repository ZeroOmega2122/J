// scripts/script.js

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const progress = document.getElementById('progress');
    const volumeControl = document.getElementById('volume');
    const currentTimeDisplay = document.getElementById('current-time');
    const totalTimeDisplay = document.getElementById('total-time');

    // Set total time display
    const totalDuration = audio.duration;
    totalTimeDisplay.textContent = formatTime(totalDuration);

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
        currentTimeDisplay.textContent = formatTime(audio.currentTime);
    });

    progress.addEventListener('input', function() {
        const value = (progress.value / 100) * audio.duration;
        audio.currentTime = value;
    });

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    // Cube rotation
    let angle = 0;
    const cube = document.querySelector('.cube');
    setInterval(() => {
        angle = (angle + 90) % 360;
        cube.style.transform = `rotateY(${angle}deg)`;
    }, 2000);
});
