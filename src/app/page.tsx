"use client";

import { useEffect, useRef, useState } from "react";
import PromptBox from "@/components/PromptBox";
import ResponseBox from "@/components/ResponseBox";
import ControlBar from "@/components/ControlBar";
import useTypingEffect from "@/hooks/useTypingEffect";
import { speakText, getSpeechRecognition } from "@/lib/speech";
import { askAI } from "@/lib/askAI";

export default function Home() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const welcomeSpokenRef = useRef(false);

  const typedResponse = useTypingEffect(response, 25);

  useEffect(() => {
    const welcomeMessage = "Welcome to AlphaBOT. Your next AI Assistant";

    if (!welcomeSpokenRef.current) {
      speakText(welcomeMessage);
      setResponse(welcomeMessage);
      welcomeSpokenRef.current = true;
    }
  }, []);

  const handleSubmit = async () => {
    if (!input.trim()) return;

    setLoading(true);
    try {
      const result = await askAI(input);
      setResponse(result);
      speakText(result);
    } catch {
      setResponse("Something went wrong. Try again.");
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  const handleMicClick = () => {
    const recognition = getSpeechRecognition();

    if (!recognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    if (!recognitionRef.current) {
      recognitionRef.current = recognition;

      recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => setIsListening(false);
      recognitionRef.current.onerror = () => setIsListening(false);
    }

    if (!isListening) {
      recognitionRef.current.start();
      setIsListening(true);
    } else {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const handleUpload = () => {
    const inputEl = document.createElement("input");
    inputEl.type = "file";
    inputEl.accept = `
      .pdf,.doc,.docx,.txt,.md,.rtf,.csv,.xlsx,.json,.xml,.tsv,
      .js,.ts,.py,.java,.cpp,.c,.cs,.html,.css,.php,.rb,.sh,
      .png,.jpg,.jpeg,.webp,.bmp,.gif,.zip
    `.replace(/\s+/g, "");

    inputEl.onchange = () => {
      const file = inputEl.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = async (e) => {
        const text = (e.target?.result as string)?.trim();
        if (!text) return;

        setInput(text);
        setLoading(true);

        try {
          const result = await askAI(text);
          setResponse(result);
          speakText(result);
        } catch {
          setResponse("Error reading or processing file.");
        } finally {
          setLoading(false);
        }
      };

      reader.readAsText(file);
    };

    inputEl.click();
  };

  const handleSpeak = () => {
    speakText(response);
  };

  const handleCopy = () => {
    if (response) navigator.clipboard.writeText(response);
  };

  const handleClear = () => {
    setInput("");
    setResponse("");
  };

  const handleReset = () => {
    setInput("");
    setResponse("");
    window.location.reload();
  };

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  const handleInfo = () => {
    alert("👨‍💻 Developer: whiffCODE \n🚀 AlphaBOT v1.0.0");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-100 to-white dark:from-gray-900 dark:to-black text-gray-800 dark:text-white p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center">🤖 AʅρԋαBOT</h1>

        <ControlBar
          isListening={isListening}
          onMicClick={handleMicClick}
          onUpload={handleUpload}
          onSpeak={handleSpeak}
          onCopy={handleCopy}
          onClear={handleClear}
          onReset={handleReset}
          onToggleTheme={toggleTheme}
          onInfo={handleInfo}
        />

        <PromptBox
          input={input}
          onChange={setInput}
          onSubmit={handleSubmit}
          disabled={loading}
        />

        <ResponseBox response={typedResponse} loading={loading} />
      </div>
    </main>
  );
}
