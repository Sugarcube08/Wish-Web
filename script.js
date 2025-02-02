let currentIndex = 0;
const bottomMessage = document.querySelector(".bottom-message");
const photoRoll = document.querySelector(".photo-roll");
const audioPlayer = new Audio();
const backgroundVideo = document.getElementById("background-video");
const bgm = new Audio("bgm/bgm.mp3"); // Background music

bgm.loop = true;
bgm.volume = 0.5; // Set volume to 50%

// Play music when screen is tapped or clicked
function startBGM() {
    bgm.play().then(() => {
        document.removeEventListener("click", startBGM); // Remove listener after music starts
        document.removeEventListener("touchstart", startBGM);
    }).catch(err => console.error("Error playing background music:", err));
}

// Wait for user interaction to start music
document.addEventListener("click", startBGM);
document.addEventListener("touchstart", startBGM);

let images = [];
let messages = [];
let audios = [];
let bgVideos = [];

// Fetch media.json file
fetch("media.json")
    .then(response => response.json())
    .then(data => {
        data.forEach((item, index) => {
            images.push(item.image);
            audios.push(item.audio);
            bgVideos.push(item.video);
        });

        if (images.length > 0) updateSlideshow();
    })
    .catch(err => console.error("Error loading media.json:", err));

// Fetch messages from messages.txt
fetch("messages.txt")
    .then(response => response.text())
    .then(data => {
        messages = data.split("\n");
    })
    .catch(err => console.error("Error loading messages:", err));

// Preload audio files
function preloadAudio() {
    audios.forEach(src => {
        const audio = new Audio();
        audio.src = src;
        audio.load();
    });
}

// Update slideshow based on current index
function updateSlideshow() {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    const nextIndex = (currentIndex + 1) % images.length;

    const photos = document.querySelectorAll(".photo");

    // Set images
    photos[0].src = images[prevIndex] || "";
    photos[1].src = images[currentIndex] || "";
    photos[2].src = images[nextIndex] || "";

    // Reset classes to maintain 3-card view
    photos[0].className = "photo previous";
    photos[1].className = "photo current";
    photos[2].className = "photo next";

    // Bottom message transition
    bottomMessage.classList.add("hidden");
    setTimeout(() => {
        bottomMessage.textContent = messages[currentIndex] || "";
        bottomMessage.classList.remove("hidden");
    }, 300);

    // Play audio if available
    if (audios[currentIndex]) {
        audioPlayer.src = audios[currentIndex];
        audioPlayer.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    }

    // Update background video
    updateBackgroundVideo();
}

function updateBackgroundVideo() {
    const currentBgVideo = bgVideos[currentIndex];
    const video = document.getElementById("background-video");

    // Start by fading out the current video (if any)
    video.style.opacity = 0; // Fade out effect
    setTimeout(() => {
        video.src = currentBgVideo; // Change to the new background video
        video.load(); // Load the new video

        // Wait until the new video is ready to play
        video.oncanplaythrough = () => {
            video.style.opacity = 1; // Fade in effect once video is ready
            video.style.visibility = 'visible'; // Ensure the video is visible
        };
    }, 300); // Delay to allow fading out to complete before switching
}

// Audio End Event - Automatically change image after audio finishes playing
audioPlayer.addEventListener("ended", () => {
    slide("next");
});

// Swipe Support for touch events
let touchStartX = 0;

photoRoll.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].pageX;
});

photoRoll.addEventListener("touchend", (e) => {
    const touchEndX = e.changedTouches[0].pageX;
    if (touchEndX - touchStartX > 50) {
        slide("previous");
    } else if (touchStartX - touchEndX > 50) {
        slide("next");
    }
});

// Slide function for next and previous
function slide(direction) {
    const photos = document.querySelectorAll(".photo");

    // Stop audio if swiping to change image
    audioPlayer.pause();
    audioPlayer.currentTime = 0;

    if (direction === "next") {
        photos[1].classList.add("previous");
        photos[2].classList.add("current");
        currentIndex = (currentIndex + 1) % images.length;
    } else {
        photos[1].classList.add("next");
        photos[0].classList.add("current");
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }

    setTimeout(updateSlideshow, 300);
}

// Preload images, audio, and videos
preloadAudio();