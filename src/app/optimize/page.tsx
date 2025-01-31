'use client';

import { fileDownloader } from "@/utils/fileDownloader";
import DropZone from '@/app/components/DropZone';
import { useAppContext } from "../context/dropzon";
import { useRef, useState } from "react";

export default function Optimize() {
  const {primrayKeyword,setPrimrayKeyword } = useAppContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [showDropZone, setShowDropZone] = useState(false);

  const fetchPrimaryKeyword = ()=>{
    setPrimrayKeyword(inputRef.current?.value)
    setShowDropZone(true)
  }
  
  return (
    <div className="w-full max-w-2xl mx-auto stretch flex flex-col min-h-screen items-center justify-center">
    {/* First Row: Input and Button */}
    <div className="flex items-center space-x-4 mb-6">
      <input
        className="flex-grow min-w-[400px] text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        name="primary"
        type="text"
        placeholder="Enter primary keyword"
        ref={inputRef}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {inputValue && ( // Conditionally render the button if inputValue is non-empty
          <button
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            onClick={fetchPrimaryKeyword}
          >
            Next
          </button>
      )}
      </div>
      {showDropZone && <DropZone />}

    </div>
  );
}