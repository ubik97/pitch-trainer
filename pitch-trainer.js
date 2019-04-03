var orignal;
var sharps;
var correct;
var playedFreq;
let noteArr = [261.63, 293.67, 329.63, 349.23, 392, 440, 493.88, 277.18, 311.13, 369.99, 415.3, 466.16];
let sharpsNameArr = ["c", "d", "e", "f", "g", "a", "b", "c#", "d#", "f#", "g#", "a#"];
let noteIdArr = ["Cnat", "Dnat", "Enat", "Fnat", "Gnat", "Anat", "Bnat", "cSharpDiv", "dSharpDiv", "fSharpDiv", "gSharpDiv", "aSharpDiv"];
var idx;
var counterInput;
var count = 0;
var rawCorrect = 0;
var a;

function includeSharps(value) {
  document.getElementById("start").disabled = false;
  document.getElementById("sfYes").disabled = true;
  document.getElementById("sfNo").disabled = true;
  sharps = value;
  console.log(sharps);
}

function gameplay(midgame) {
        correct = noteGenerator();
        document.getElementById("start").disabled = true;
  }

function reset() {
  document.getElementById("start").disabled = true;
  document.getElementById("sfYes").disabled = false;
  document.getElementById("sfNo").disabled = false;
  document.getElementById('feedbackBox').innerHTML = "";
  count = 0;
  rawCorrect = 0;
}

//correct/incorrect
  function compare() {
    if (playedFreq!==correct) {
      document.getElementById('feedbackBox').innerHTML = "Incorrect: That was a(n) " + sharpsNameArr[idx];
      document.getElementById('feedbackBox').style.color = "#c41f17";
      counterInput = 0;
    }
    if (playedFreq==correct) {
      document.getElementById('feedbackBox').innerHTML = "Correct! That was a(n) " + sharpsNameArr[idx] + "!";
      document.getElementById('feedbackBox').style.color = "#195b00";
      counterInput = 1;
    }
    return counterInput;
  }

//score counter
  function resultCounter(param) {
    console.log(param);
    rawCorrect = rawCorrect + param;
    count = count + 1;
    console.log("correct: " + rawCorrect + " total: " + count);
  }

//display score
   function displayScore() {
     let incorrect = count - rawCorrect;
     document.getElementById('feedbackBox').innerHTML = "Correct: " + rawCorrect + " Incorrect: " + incorrect + " Attempts: " + count;
     document.getElementById('feedbackBox').style.color = "black";
     document.getElementById('feedbackBox').style.left = "75px";
   }


//note input
  function notePlayed(note) {
    playFreq(note);
    counterInput = compare(correct, playedFreq);
    resultCounter(counterInput);
    console.log("bleh " + counterInput);
  }

//random note noteGenerator
  function noteGenerator() {
    if (sharps) {
        idx = randomInt(0, 11);
        correct = noteArr[idx];
        console.log("Correct frequency: " + correct);
        playFreq(correct);
      }

    if (!sharps) {
      idx = randomInt(0, 6);
      correct = noteArr[idx];
      console.log(correct);
      playFreq(correct);
      }
    return correct;
}

//random number generator
function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
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


