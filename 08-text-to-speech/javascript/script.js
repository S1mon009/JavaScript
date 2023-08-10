"use strict";

const convertToSpeechBtn = document.querySelector("button");
const textToSpeech = document.querySelector("textarea");

convertToSpeechBtn.addEventListener("click", function () {
  let speech = new SpeechSynthesisUtterance();

  speech.lang = "en-US";
  speech.text = textToSpeech.value;
  speech.rate = 1;
  speech.volume = 1;
  speech.pitch = 1;

  speechSynthesis.speak(speech);
});
