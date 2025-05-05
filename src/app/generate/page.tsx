'use client';

import { fileDownloader } from "@/utils/fileDownloader";
import BlogPostGenerator from '@/components/BlogGenerator';
import { useState } from "react";

export default function Generate() {
  const [bgRemoved, setBgRemoved] = useState(false);
  const [justifyDiv, setJustifyDiv] = useState(false);
  const [showBlog, setShowBlog] = useState(false); 
  const [userInput, setUserInput] = useState(false); 
  let userValue = "";

  function toggleDivs(value){
    setUserInput(value);
    setJustifyDiv(true);
    setShowBlog(true)
  }

  return (

      <div
        className={`${
          justifyDiv ? "" : "justify-center min-h-screen flex flex-col items-center"
        } w-full max-w-2xl mx-auto stretch`}
      >
        {showBlog ? (
          <BlogPostGenerator value = {userInput} />
        ) : (
          !justifyDiv && (
            <div className="flex items-center space-x-4 mb-6">
              <div
                onClick={() =>toggleDivs("programmatic")}
                className="hover:border-2 border-gray-500 hover:bg-gray-200 shadow-md bg-white cursor-pointer flex items-center p-2 text-gray-900 rounded-lg hover:bg-dark-100 dark:hover:bg-black-700"
              >
                <span className="ms-3 ">Programmatic Blog post</span>
              </div>
              <div  onClick={() =>toggleDivs("non-programmatic")} className="hover:border-2 border-gray-500 hover:bg-gray-200 shadow-md bg-white cursor-pointer flex items-center p-2 text-gray-900 rounded-lg hover:bg-dark-100 dark:hover:bg-black-700">
                <span className="ms-3">Tool-Based Blog post</span>
              </div>
            </div>
          )
        )}
      </div>

  );
}