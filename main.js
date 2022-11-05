var SpeechRecognition = window.webkitSpeechRecognition;
var content;
var recognition = new SpeechRecognition();

function start(){
    recognition.start();
}

recognition.onresult = function(event) 
{ console.log(event); 
    Content = event.results[0][0].transcript.toLowerCase(); 
    console.log(Content); 
    if (Content == "selfie") { speak(); 
    }
 }
 camera = document.getElementById("camera");
 Webcam.set({
    width: 500, 
    height: 400, 
    image_format:'jpeg',
    jpeg_quality: 90
 })