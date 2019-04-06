var orignal;
var sharps;
var correct;
var playedFreq;
let noteArr = [261.63, 293.67, 329.63, 349.23, 392, 440, 493.88, 277.18, 311.13, 369.99, 415.3, 466.16];
let sharpsNameArr = ["c", "d", "e", "f", "g", "a", "b", "c#", "d#", "f#", "g#", "a#"];
var idx;
var counterInput;
var count = 0;
var rawCorrect = 0;

function includeSharps(value) {
  document.getElementById('start').disabled = false;
  document.getElementById('sfYes').disabled = true;
  document.getElementById('sfNo').disabled = true;
  document.getElementById('sOnly').disabled = true;
  sharps = value;
}


function nextNote() {
        document.getElementById('start').disabled = true;
        document.getElementById('next').disabled = false;
        document.getElementById('finish').disabled = false;
        correct = noteGenerator();
  }

//correct/incorrect
  function compare() {
    if (playedFreq!==correct) {
      document.getElementById('feedbackBox').innerHTML = "Incorrect: That was a(n) " + sharpsNameArr[idx];
      document.getElementById('feedbackBox').style.color = "#c41f17";
      counterInput = 0;
    } else {
      document.getElementById('feedbackBox').innerHTML = "Correct! That was a(n) " + sharpsNameArr[idx] + "!";
      document.getElementById('feedbackBox').style.color = "#195b00";
      counterInput = 1;
    }
    return counterInput;
  }

//score counter
  function resultCounter(n) {
    console.log(n);
    rawCorrect = rawCorrect + n;
    count++;
    console.log("correct: " + rawCorrect + " total: " + count);
  }

//display score
   function displayScore() {
     let incorrect = count - rawCorrect;
     document.getElementById('feedbackBox').innerHTML = "Correct: " + rawCorrect + " Incorrect: " + incorrect + " Attempts: " + count;
     document.getElementById('feedbackBox').style.color = "black";
     document.getElementById('feedbackBox').style.left = "48px";
   }


//note input
  function notePlayed(note) {
    playFreq(note);
    counterInput = compare(correct, playedFreq);
    resultCounter(counterInput);
  }

//random note noteGenerator
  function noteGenerator() {
    switch (sharps) {
      case 1:
        idx = randomInt(0, 11);
        correct = noteArr[idx];
        break;

      case 2:
        idx = randomInt(0, 6);
        correct = noteArr[idx];
        break;

      case 3:
        idx = randomInt(7, 11);
        correct = noteArr[idx];
        break;
    }
    playFreq(correct);
    return correct;
}

//random number generator
function randomInt(min, max) {
  let int = Math.random() * (max - min + 1);
  int = Math.floor(int) + min;
  return int;
}


//sine oscillator
function playFreq(freq) {
    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    var oscillator = audioCtx.createOscillator();
    playedFreq = freq;
    oscillator.type = 'sine';
    oscillator.frequency.value = freq;
    oscillator.gain = 0.1;
    oscillator.connect(audioCtx.destination);
    oscillator.start(0);
    oscillator.stop(0.5);
}

function reset() {
  document.getElementById('start').disabled = true;
  document.getElementById('finish').disabled = true;
  document.getElementById('sfYes').disabled = false;
  document.getElementById('sfNo').disabled = false;
  document.getElementById('sOnly').disabled = false;
  document.getElementById('feedbackBox').innerHTML = "";
  document.getElementById('next').disabled = true;
  document.getElementById('feedbackBox').style.left = "80px";
  count = 0;
  rawCorrect = 0;
}
