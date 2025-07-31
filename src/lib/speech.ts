const isBrowser = typeof window !== "undefined";

export const speakText = (text: string, onEnd?: () => void) => {
  if (!isBrowser || !text) return;

  const synth: SpeechSynthesis = window.speechSynthesis;
  synth.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.pitch = 1;
  utterance.rate = 1;
  utterance.volume = 1;

  if (onEnd) {
    utterance.onend = onEnd;
  }

  synth.speak(utterance);
};

export const getSpeechRecognition = (): SpeechRecognition | null => {
  if (!isBrowser) return null;

  const SpeechRecognitionConstructor =
  (window as Window).SpeechRecognition || window.webkitSpeechRecognition;


  if (!SpeechRecognitionConstructor) {
    console.warn("SpeechRecognition is not supported in this browser.");
    return null;
  }

  const recognition = new SpeechRecognitionConstructor();
  recognition.continuous = false;
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  return recognition as SpeechRecognition;
};
