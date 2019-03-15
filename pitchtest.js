
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playFreq() {
    var dur = 1;
    var freq = 440;
    var stopVal = 10;

    var oscillator = audioCtx.createOscillator();

    oscillator.type = 'sine';
    oscillator.frequency.value = freq;
    oscillator.gain = 0.5;
    oscillator.connect(audioCtx.destination);

    oscillator.onended = stopVal;
    oscillator.start(0);
    oscillator.stop(audioCtx.currentTime + dur);
}
