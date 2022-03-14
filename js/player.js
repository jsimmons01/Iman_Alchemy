//audio player

var mySong = document.getElementById("mySong");
var playBtn = document.getElementById("playBtn");

playBtn.onclick = function () {
  if (mySong.paused) {
    mySong.play();
  } else {
    mySong.pause();
  }
};
