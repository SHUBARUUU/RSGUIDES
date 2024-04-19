function playAudio() {
    var voice = new Audio('./assets/audio/guts.wav')
    voice.play();
}

if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    recognition.lang = 'en-US';

    recognition.onresult = function (event) {
        var transcript = event.results[0][0].transcript.toLowerCase();
        var output = document.getElementById('answer');
        output.textContent = transcript;

        if (transcript == "guts") {

            document.getElementById('verdict').textContent = "Well done!";

            document.getElementById('next').disabled = false;

        } else {

            document.getElementById('verdict').textContent = "Sorry, try that again?"
        }

    };

    document.getElementById('sayit').addEventListener('click', function () {

        recognition.start();
    });
}

