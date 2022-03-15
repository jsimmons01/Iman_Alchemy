//audio player

var player = document.getElementById("player");
var player_two = document.getElementById("player_two");
var player_three = document.getElementById("player_three");
var player_four = document.getElementById("player_four");

let progress = document.getElementById("progress");
let progress_two = document.getElementById("progress_two");
var progress_three = document.getElementById("progress_three");
var progress_four = document.getElementById("progress_four");

let playbtn = document.getElementById("playbtn");
let playbtn_two = document.getElementById("playbtn_two");
var playbtn_three = document.getElementById("playbtn_three");
var playbtn_four = document.getElementById("playbtn_four");

var playpause = function () {
  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
};

playbtn.addEventListener("click", playpause);

player.onplay = function () {
  playbtn.classList.remove("fa-play");
  playbtn.classList.add("fa-pause");
};

player.onpause = function () {
  playbtn.classList.add("fa-play");
  playbtn.classList.remove("fa-pause");
};

player.ontimeupdate = function () {
  let ct = player.currentTime;
  current.innerHTML = timeFormat(ct);
  //progress
  let duration = player.duration;
  prog = Math.floor((ct * 100) / duration);
  progress.style.setProperty("--progress", prog + "%");
};

var playpause_two = function () {
  if (player_two.paused) {
    player_two.play();
  } else {
    player_two.pause();
  }
};

playbtn_two.addEventListener("click", playpause_two);

player_two.onplay = function () {
  playbtn_two.classList.remove("fa-play");
  playbtn_two.classList.add("fa-pause");
};

player_two.onpause = function () {
  playbtn_two.classList.add("fa-play");
  playbtn_two.classList.remove("fa-pause");
};
player_two.ontimeupdate = function () {
  let ct = player_two.currentTime;
  current.innerHTML = timeFormat(ct);
  //progress
  let duration = player_two.duration;
  prog = Math.floor((ct * 100) / duration);
  progress_two.style.setProperty("--progress", prog + "%");
};

var playpause_three = function () {
  if (player_three.paused) {
    player_three.play();
  } else {
    player_three.pause();
  }
};

playbtn_three.addEventListener("click", playpause_three);

player_three.onplay = function () {
  playbtn_three.classList.remove("fa-play");
  playbtn_three.classList.add("fa-pause");
};

player_three.onpause = function () {
  playbtn_three.classList.add("fa-play");
  playbtn_three.classList.remove("fa-pause");
};

player_three.ontimeupdate = function () {
  let ct = player_three.currentTime;
  current.innerHTML = timeFormat(ct);
  //progress
  let duration = player_three.duration;
  prog = Math.floor((ct * 100) / duration);
  progress_three.style.setProperty("--progress", prog + "%");
};

var playpause_four = function () {
  if (player_four.paused) {
    player_four.play();
  } else {
    player_four.pause();
  }
};

playbtn_four.addEventListener("click", playpause_four);

player_four.onplay = function () {
  playbtn_four.classList.remove("fa-play");
  playbtn_four.classList.add("fa-pause");
};

player_four.onpause = function () {
  playbtn_four.classList.add("fa-play");
  playbtn_four.classList.remove("fa-pause");
};

player_four.ontimeupdate = function () {
  let ct = player_four.currentTime;
  current.innerHTML = timeFormat(ct);
  //progress
  let duration = player_four.duration;
  prog = Math.floor((ct * 100) / duration);
  progress_four.style.setProperty("--progress", prog + "%");
};

function timeFormat(ct) {
  minutes = Math.floor(ct / 60);
  seconds = Math.floor(ct % 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return minutes + ":" + seconds;
}
