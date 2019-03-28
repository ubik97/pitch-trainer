var attempted = false;
var orignal;
var sharps;
var correct;
var playedFreq;
let noteArr = [261.63, 293.67, 329.63, 349.23, 392, 440, 493.88, 277.18, 311.13, 369.99, 415.3, 466.16];
let sharpsNameArr = ["c", "d", "e", "f", "g", "a", "b", "c#", "d#", "f#", "g#", "a#"];
var idx;
var counterInput;
var count;
var rawCorrect;

function includeSharps(value) {
  document.getElementById("start").disabled = false;
  sharps = value;
}

function gameplay(midgame) {
        original = noteGenerator();
        document.getElementById("start").disabled = true;
  }


  function compare() {
    if (playedFreq!==original) {
      document.getElementById('feedbackBox').innerHTML = "Incorrect: That was a(n) " + sharpsNameArr[idx];
      document.getElementById('feedbackBox').style.color = "#c41f17";
      counterInput = 0;
    }
    if (playedFreq==original) {
      document.getElementById('feedbackBox').innerHTML = "Correct! That was a(n) " + sharpsNameArr[idx] + "!";
      document.getElementById('feedbackBox').style.color = "#195b00";
      counterInput = 1;
    }
    return counterInput;
  }

  function resultCounter(counterInput) {
    rawCorrect += counterInput;
    count = count + 1;



    console.log("correct: "+rawCorrect+"total: "+count);
  }

  function notePlayed(note) {
    playFreq(note);
    counterInput = compare(original, playedFreq);
    resultCounter(counterInput);
  }

function noteGenerator() {
  if (sharps = true) {
  idx = randomInt(0, 11);
  correct = noteArr[idx];
  console.log("Correct frequency: " + correct);
  playFreq(correct);
  return correct;
}

  if (sharps = false) {
    idx = randomInt(0, 6);
    correct = noteArr[idx];
    console.log(correct);
    playFreq(correct);
    return correct;
  }
}

//random number generator
function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



function playFreq(freq) {
    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    var oscillator = audioCtx.createOscillator();
    var dur = 0.5;
    var stopVal = 10;
    playedFreq = freq;

    oscillator.type = 'sine';
    oscillator.frequency.value = freq;
    oscillator.gain = 0.1;
    oscillator.connect(audioCtx.destination);

    oscillator.onended = stopVal;
    oscillator.start(0);
    oscillator.stop(audioCtx.currentTime + dur);


}

