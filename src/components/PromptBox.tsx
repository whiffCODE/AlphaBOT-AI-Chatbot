"use client";

import { Input } from "@/components/ui/input";

type PromptBoxProps = {
  input: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  disabled?: boolean;
};

export default function PromptBox({ input, onChange, onSubmit, disabled }: PromptBoxProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !disabled) {
      onSubmit();
    }
  };

  return (
    <div className="flex gap-2">
      <Input
        value={input}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask AlphaBOT anything..."
        className="flex-1 dark:bg-gray-800 dark:text-white"
        disabled={disabled}
      />
      <button
        onClick={onSubmit}
        disabled={disabled}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
      >
        Ask Alpha
      </button>
    </div>
  );
}
