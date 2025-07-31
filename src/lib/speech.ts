const isBrowser = typeof window !== "undefined";

export const speakText = (text: string, onEnd?: () => void) => {
  if (!isBrowser || !text) return;

  const synth: SpeechSynthesis = window.speechSynthesis;
  synth.cancel(); // Cancel any ongoing speech

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

  const SpeechRecognition =
    (window as unknown as { SpeechRecognition: typeof SpeechRecognition }).SpeechRecognition ||
    (window as unknown as { webkitSpeechRecognition: typeof SpeechRecognition }).webkitSpeechRecognition;

  if (!SpeechRecognition) {
    console.warn("SpeechRecognition is not supported in this browser.");
    return null;
  }

  const recognition: SpeechRecognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  return recognition;
};