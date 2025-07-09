// script.js
const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const duration = document.getElementById("duration");
const cover = document.getElementById("cover");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

let songIndex = 0;
let isPlaying = false;

const songs = [
  {
    title: "Sunny",
    artist: "Benjamin Tissot (Bensound)",
    src: "https://www.bensound.com/bensound-music/bensound-sunny.mp3",
    cover: "https://www.bensound.com/bensound-img/sunny.jpg"
  },
  {
    title: "Creative Minds",
    artist: "Benjamin Tissot (Bensound)",
    src: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3",
    cover: "https://www.bensound.com/bensound-img/creativeminds.jpg"
  },
  {
    title: "Once Again",
    artist: "Benjamin Tissot (Bensound)",
    src: "https://www.bensound.com/bensound-music/bensound-onceagain.mp3",
    cover: "https://www.bensound.com/bensound-img/onceagain.jpg"
  },
  {
    title: "Funky Element",
    artist: "Benjamin Tissot (Bensound)",
    src: "https://www.bensound.com/bensound-music/bensound-funkyelement.mp3",
    cover: "https://www.bensound.com/bensound-img/funkyelement.jpg"
  },
  {
    title: "Going Higher",
    artist: "Benjamin Tissot (Bensound)",
    src: "https://www.bensound.com/bensound-music/bensound-goinghigher.mp3",
    cover: "https://www.bensound.com/bensound-img/goinghigher.jpg"
  },
  {
    title: "Jazzy Frenchy",
    artist: "Benjamin Tissot (Bensound)",
    src: "https://www.bensound.com/bensound-music/bensound-jazzyfrenchy.mp3",
    cover: "https://www.bensound.com/bensound-img/jazzyfrenchy.jpg"
  },
  {
    title: "Moose",
    artist: "Benjamin Tissot (Bensound)",
    src: "https://www.bensound.com/bensound-music/bensound-moose.mp3",
    cover: "https://www.bensound.com/bensound-img/moose.jpg"
  },
  {
    title: "Retro Soul",
    artist: "Benjamin Tissot (Bensound)",
    src: "https://www.bensound.com/bensound-music/bensound-retrosoul.mp3",
    cover: "https://www.bensound.com/bensound-img/retrosoul.jpg"
  },
  {
    title: "Sci-Fi",
    artist: "Benjamin Tissot (Bensound)",
    src: "https://www.bensound.com/bensound-music/bensound-scifi.mp3",
    cover: "https://www.bensound.com/bensound-img/scifi.jpg"
  },
  {
    title: "Summer",
    artist: "Benjamin Tissot (Bensound)",
    src: "https://www.bensound.com/bensound-music/bensound-summer.mp3",
    cover: "https://www.bensound.com/bensound-img/summer.jpg"
  }
];

function loadSong(song) {
  title.innerText = song.title;
  artist.innerText = song.artist;
  cover.src = song.cover;
  audio.src = song.src;
}

function playSong() {
  audio.play();
  isPlaying = true;
  playBtn.innerText = "⏸️";
  cover.classList.add("rotate");
}

function pauseSong() {
  audio.pause();
  isPlaying = false;
  playBtn.innerText = "▶️";
  cover.classList.remove("rotate");
}

function togglePlay() {
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
}

function prevSong() {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
}

function nextSong() {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
}

function updateProgress() {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progress.value = progressPercent || 0;
  duration.innerText = formatTime(audio.currentTime);
}

function setProgress() {
  const newTime = (progress.value / 100) * audio.duration;
  audio.currentTime = newTime;
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

loadSong(songs[songIndex]);

playBtn.addEventListener("click", togglePlay);
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
progress.addEventListener("input", setProgress);
audio.addEventListener("timeupdate", updateProgress);
volume.addEventListener("input", () => {
  audio.volume = volume.value;
});
audio.addEventListener("ended", nextSong);
