document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audio");
    const title = document.getElementById("title");
    const artist = document.getElementById("artist");
    const playBtn = document.getElementById("play");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const progress = document.getElementById("progress");
    const volBtn = document.getElementById("volBtn");
    const volumeDiv= document.querySelector(".volume");
    volBtn.addEventListener("click", ()=> {
        if(volumeDiv.style.display==="none"){
            volumeDiv.style.display="block";
        }else{
            volumeDiv.style.display="none";
        }
    });
    const songs = [
        { name: "Song Title 1", artist: "Artist 1", src: "songs/song1.mp3" },
        { name: "Song Title 2", artist: "Artist 2", src: "songs/song2.mp3" }
    ];
    console.log(playBtn, prevBtn, nextBtn, progress, volume, audio, title, artist)
    let songIndex = 0;
    let isPlaying = false;
    function loadSong(index) {
        title.textContent = songs[index].name;
        artist.textContent = songs[index].artist;
        audio.src = songs[index].src;

    }
    function playSong() {
        audio.play();
        playBtn.innerHTML = "⏸";
        isPlaying = true;

    }
    function pauseSong() {
        audio.pause();
        playBtn.innerHTML = "▶";
        isPlaying = false;
    }
    function nextSong() {
        songIndex = (songIndex + 1) % songs.length;
        loadSong(songIndex);
        playSong();
    }
    function prevSong() {
        songIndex = (songIndex - 1 + songs.length) % songs.length;
        loadSong(songIndex);
        playSong();
    }
    playBtn.addEventListener("click", () => {
        isPlaying ? pauseSong() : playSong();
    });
    nextBtn.addEventListener("click", nextSong);
    prevBtn.addEventListener("click", prevSong);

    audio.addEventListener("timeupdate", () => {
        progress.value = (audio.currentTime / audio.duration) * 100;
    });
    progress.addEventListener("input", () => {
        audio.currentTime = (progress.value / 100) * audio.duration;
    });
    volume.addEventListener("input", () => {
        audio.volume = volume.value;
    });
    loadSong(songIndex);

});
