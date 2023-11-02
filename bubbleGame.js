let timer = 60;
let score = 0;
let randNumber;

//* making bubble
function makeBubble() {
  let clutter = "";
  for (let i = 1; i <= 126; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector(".pbtm").innerHTML = clutter;
}

//* timer
function setTimer() {
  let timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timeVal").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector(
        ".pbtm"
      ).innerHTML = `<h1>TIME OVER</h1><br><p><h2>Your Score : ${score}</h2></p><br><button class="playAgainBtn">PLAY AGAIN</button><br>`;
      // Add an event listener for the Play Again button
      document
        .querySelector(".playAgainBtn")
        .addEventListener("click", function () {
          playAgain();
        });
    }
  }, 1000);
}

//* hit changing
function getNewHit() {
  randNumber = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = randNumber;
}

//* score changing
function updateScore() {
  score = score + 10;
  document.querySelector("#scoreVal").textContent = score;
}

//* score updating
document.querySelector(".pbtm").addEventListener("click", function (dets) {
  var clickedNumber = Number(dets.target.textContent);
  console.log(Number(dets.target.textContent));
  console.log(randNumber);
  if (clickedNumber == randNumber) {
    updateScore();
    makeBubble();
    getNewHit();
  }
});

//* Function to play again
function playAgain() {
  timer = 15;
  score = 0;
  document.querySelector("#timeVal").textContent = timer;
  document.querySelector("#scoreVal").textContent = score;
  makeBubble();
  getNewHit();
  setTimer();
}

//* play button

document.querySelector(
  ".pbtm"
).innerHTML = `<button class="startBtn">PLAY NOW</button>`;
document.querySelector(".startBtn").addEventListener("click", function () {
  playAgain();
});
