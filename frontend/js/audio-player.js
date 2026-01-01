
document.addEventListener('DOMContentLoaded', () => {
    // 1. Create Audio Element
    const audio = document.createElement('audio');
    audio.id = 'bg-music';
    audio.src = 'audio/audio.mpeg'; // Using the confirmed file name
    audio.loop = true;
    audio.volume = 0.5; // Start at 50% volume
    document.body.appendChild(audio);

    // 2. Create Control Button
    const musicBtn = document.createElement('button');
    musicBtn.id = 'music-toggle-btn';
    musicBtn.className = 'music-btn';
    musicBtn.innerHTML = '🎵'; // Default icon
    document.body.appendChild(musicBtn);

    // 3. State Management (Persist across pages)
    const storedTime = localStorage.getItem('bgMusicTime');
    const isPlaying = localStorage.getItem('bgMusicPlaying') === 'true';

    if (storedTime) {
        audio.currentTime = parseFloat(storedTime);
    }

    // Function to update icon
    const updateIcon = (playing) => {
        musicBtn.innerHTML = playing ? '🔊' : '🔇';
        // Add/Remove glowing animation based on state
        if (playing) {
            musicBtn.classList.add('playing');
        } else {
            musicBtn.classList.remove('playing');
        }
    };

    // 4. Play/Pause Logic
    const toggleMusic = () => {
        if (audio.paused) {
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    localStorage.setItem('bgMusicPlaying', 'true');
                    updateIcon(true);
                }).catch(error => {
                    console.log("Playback prevented:", error);
                    // User interaction required
                    localStorage.setItem('bgMusicPlaying', 'false');
                    updateIcon(false);
                });
            }
        } else {
            audio.pause();
            localStorage.setItem('bgMusicPlaying', 'false');
            updateIcon(false);
        }
    };

    musicBtn.addEventListener('click', toggleMusic);

    // 5. Auto-play handling
    // We try to play if it was playing before, or if it's the first visit (optional, browsers block this usually)
    // If browser blocks, we just stay paused until user clicks.
    if (isPlaying || isPlaying === null) { // Default to try playing
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                updateIcon(true);
            }).catch(error => {
                console.log("Autoplay prevented available to user interaction only.");
                updateIcon(false);
            });
        }
    } else {
        updateIcon(false);
    }

    // 6. Save State on Unload
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('bgMusicTime', audio.currentTime);
        // Playing state is saved on toggle, but we can double check
        localStorage.setItem('bgMusicPlaying', !audio.paused);
    });
});
