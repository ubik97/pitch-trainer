
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playFreq() {
    var duration = 1;
    var frequency = 440;
    var callback = 10;

    var oscillator = audioCtx.createOscillator();

    oscillator.type = 'sine';
    oscillator.frequency.value = frequency;
    oscillator.gain = 0.5;
    oscillator.connect(audioCtx.destination);

    oscillator.onended = callback;
    oscillator.start(0);
    oscillator.stop(audioCtx.currentTime + duration);
}
