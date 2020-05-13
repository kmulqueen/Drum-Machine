class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.playBtn = document.querySelector(".play-btn");
    this.hihatSound = document.querySelector(".hihat-sound");
    this.snareSound = document.querySelector(".snare-sound");
    this.kickSound = document.querySelector(".kick-sound");
    this.selections = document.querySelectorAll("select");
    this.muteBtns = document.querySelectorAll(".mute-btn");
    this.hihatSelection = "./allSounds/hihat-808.wav";
    this.snareSelection = "./allSounds/snare-808.wav";
    this.kickSelection = "./allSounds/kick-808.wav";
    this.index = 0;
    this.tempo = 120;
    this.isPlaying = null;
  }

  repeat() {
    let step = this.index % 8;
    const activeBeat = document.querySelectorAll(`.b${step}`);
    activeBeat.forEach((beat) => {
      beat.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
      if (beat.classList.contains("active")) {
        if (beat.classList.contains("hihat-pad")) {
          this.hihatSound.currentTime = 0;
          this.hihatSound.play();
        }
        if (beat.classList.contains("snare-pad")) {
          this.snareSound.currentTime = 0;
          this.snareSound.play();
        }
        if (beat.classList.contains("kick-pad")) {
          this.kickSound.currentTime = 0;
          this.kickSound.play();
        }
      }
    });
    this.index++;
  }
  start() {
    const interval = (60 / this.tempo) * 1000;
    if (!this.isPlaying) {
      this.playBtn.innerHTML = `<i class="fas fa-stop"></i>`;
      this.isPlaying = setInterval(() => {
        this.repeat();
      }, interval);
    } else {
      this.playBtn.innerHTML = `<i class="fas fa-play"></i>`;
      clearInterval(this.isPlaying);
      this.isPlaying = null;
    }
  }
  activePad() {
    this.classList.toggle("active");
  }
  changeSound(e) {
    const selectionName = e.target.name;
    const selectionValue = e.target.value;
    switch (selectionName) {
      case "hihat-select":
        this.hihatSound.src = selectionValue;
        break;
      case "snare-select":
        this.snareSound.src = selectionValue;
        break;
      case "kick-select":
        this.kickSound.src = selectionValue;
        break;
      default:
        break;
    }
  }
  muteTrack(e) {
    const trackNumber = e.target.getAttribute("track");
    e.target.classList.toggle("active");
    if (e.target.classList.contains("active")) {
      switch (trackNumber) {
        case "1":
          this.hihatSound.volume = 0;
          break;
        case "2":
          this.snareSound.volume = 0;
          break;
        case "3":
          this.kickSound.volume = 0;
          break;
        default:
          break;
      }
    } else {
      switch (trackNumber) {
        case "1":
          this.hihatSound.volume = 1;
          break;
        case "2":
          this.snareSound.volume = 1;
          break;
        case "3":
          this.kickSound.volume = 1;
          break;
        default:
          break;
      }
    }
  }
}

// Selectors
const playBtn = document.querySelector(".play-btn");
// Create New Drum Kit
const drums = new DrumKit();

// Event Listeners
playBtn.addEventListener("click", () => {
  drums.start();
});

drums.pads.forEach((pad) => {
  pad.addEventListener("click", drums.activePad);
  pad.addEventListener("animationend", function () {
    this.style.animation = "";
  });
});

drums.selections.forEach((selection) => {
  selection.addEventListener("change", function (e) {
    drums.changeSound(e);
  });
});

drums.muteBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    drums.muteTrack(e);
  });
});
