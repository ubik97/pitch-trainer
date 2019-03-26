var attempted = false;
var orignal;
var correct;
var playedFreq;


function gameplay() {
      original = noteGenerator();
  }


  function compare() {
    if (playedFreq!==original) {
      console.log("Wrong note!!");
    }
  }


  function notePlayed(note) {
    playFreq(note);
    compare(original, playedFreq);
    wait(3000);
    gameplay();
  }

  function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

function noteGenerator() {
  let noteArr = [261.63, 293.67, 329.63, 349.23, 392, 440, 493.88, 277.18, 311.13, 369.99, 415.3, 466.16];
              //[c,       d,      e,      f,     g,   a,   b,      c#,      d#,    f#,     g#,    a#     ]
  let idx = randomInt(0, 11);
  console.log(idx);
  correct = noteArr[idx];
  console.log(correct);
  playFreq(correct);
  return correct;
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
    console.log(freq);

    oscillator.type = 'sine';
    oscillator.frequency.value = freq;
    oscillator.gain = 0.1;
    oscillator.connect(audioCtx.destination);

    oscillator.onended = stopVal;
    oscillator.start(0);
    oscillator.stop(audioCtx.currentTime + dur);


}
