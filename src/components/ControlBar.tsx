"use client";

import {
  FaMicrophone,
  FaStop,
  FaUpload,
  FaVolumeUp,
  FaSyncAlt,
  FaCopy,
  FaEraser,
  FaSun,
  FaMoon,
  FaInfo,
} from "react-icons/fa";

type ControlBarProps = {
  isListening: boolean;
  onMicClick: () => void;
  onUpload: () => void;
  onSpeak: () => void;
  onCopy: () => void;
  onReset: () => void;
  onClear: () => void;
  onToggleTheme: () => void;
  onInfo: () => void;
};

export default function ControlBar({
  isListening,
  onMicClick,
  onUpload,
  onSpeak,
  onCopy,
  onReset,
  onClear,
  onToggleTheme,
  onInfo,
}: ControlBarProps) {
  return (
    <div className="flex justify-center gap-3 flex-wrap">
      <button onClick={onMicClick} className="p-3 rounded-full bg-indigo-500 text-white shadow">
        {isListening ? <FaStop /> : <FaMicrophone />}
      </button>
      <button onClick={onUpload} className="p-3 rounded-full bg-green-500 text-white shadow">
        <FaUpload />
      </button>
      
      <button onClick={onSpeak} className="p-3 rounded-full bg-yellow-500 text-white shadow">
        <FaVolumeUp />
      </button>

      <button onClick={onCopy} className="p-3 rounded-full bg-blue-500 text-white shadow">
        <FaCopy />
      </button>

      <button onClick={onClear} className="p-3 rounded-full bg-pink-500 text-white shadow">
        <FaEraser />
      </button>

      <button onClick={onReset} className="p-3 rounded-full bg-red-500 text-white shadow">
        <FaSyncAlt />
      </button>

      <button
        onClick={onToggleTheme}
        className="p-3 rounded-full bg-gray-700 text-white shadow dark:bg-gray-900"
      ><FaSun className="block dark:hidden" />
        <FaMoon className="hidden dark:block" />
      </button>

        <button
        onClick={onInfo}
        className="p-3 rounded-full bg-gray-700 text-white shadow dark:bg-gray-900"
      >
        <FaInfo />
      </button>
        
    </div>
  );
}
