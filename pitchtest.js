var c = 261.63;
var d = 293.67;
var e = 329.63;
var f = 349.23;
var g = 392;
var a = 440;
var b = 493.88;
var cSharp = 277.18;
var dSharp = 311.13;
var fSharp = 369.99;
var gSharp = 415.3;
var aSharp = 466.16;
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var oscillator = audioCtx.createOscillator();

function start() {
  let idx = Math.ceil(Math.random(1, 12));
  let noteArr = [261.63, 293.67, 329.63, 349.23, 392, 440, 493.88, 277.18, 311.13, 369.99, 415.3, 466.16];
  let correct = noteArr[idx];
  console.log(correct);
  playFreq(correct);
}

function notePlayed(note, correct) {
  playFreq(note);
  compare(note, correct);
  newNote();
}

function playFreq(freq) {
    var dur = 1;
    var stopVal = 10;
    console.log(freq);

    oscillator.type = 'sine';
    oscillator.frequency.value = freq;
    oscillator.gain = 0.5;
    oscillator.connect(audioCtx.destination);

    oscillator.onended = stopVal;
    oscillator.start(0);
    oscillator.stop(audioCtx.currentTime + dur);
}

function compare() {

}

function newNote() {

}
