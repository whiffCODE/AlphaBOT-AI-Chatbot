import { Card } from "@/components/ui/card";
import ReactMarkdown from "react-markdown";
import { useEffect, useRef } from "react";
import { speakText } from "@/lib/speech";

type ResponseBoxProps = {
  response: string;
  loading?: boolean;
};

const DEFAULT_MESSAGE = "Welcome to AlphaBOT 🤖";

export default function ResponseBox({ response, loading }: ResponseBoxProps) {
  const hasSpokenOnce = useRef(false);
  const lastSpokenText = useRef<string>("");

  useEffect(() => {
    if (loading) return;

    const textToSpeak = response || DEFAULT_MESSAGE;

    // Avoid repeating the same speech multiple times
    if (!hasSpokenOnce.current || lastSpokenText.current !== textToSpeak) {
      speakText(textToSpeak);
      hasSpokenOnce.current = true;
      lastSpokenText.current = textToSpeak;
    }
  }, [response, loading]);

  return (
    <Card className="p-4 min-h-[120px] dark:bg-gray-800">
      {loading ? (
        <p className="animate-pulse text-indigo-400">Thinking...</p>
      ) : (
        <div className="whitespace-pre-wrap prose prose-invert max-w-full">
          <ReactMarkdown>
            {response || DEFAULT_MESSAGE}
          </ReactMarkdown>
        </div>
      )}
    </Card>
  );
}
