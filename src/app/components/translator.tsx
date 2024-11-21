'use client';

import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { InvokeOpenAIForTranslations } from '@/actions/actions';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link'
import { Observable } from "rxjs";
import eventBus from './eventBus';
const Translator = () => {
    const [fileContent, setFileContent] = useState('');
    const [fileName, setFileName] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState('');
    const [progress, setProgress] = useState(null);
    
        
    useEffect(()=>{
        localStorage.setItem('userIdForTrans', uuidv4());
        let eventSource = new EventSource('/api/openAI/'); // Adjust to match your API route
       
        eventSource.onmessage = (event) => {
            setData(event.data.replace(/^"|"$/g, '').split(",")[0]);
            setProgress(event.data.replace(/^"|"$/g, '').split(",")[1].split(":")[1])
        };
        eventSource.onerror = (error) => {
            console.error("EventSource failed:", error);
            eventSource.close();
        };

        return () => {
            eventSource.close(); // Cleanup on component unmount
        };
    },[])

    const translate = async ()=>{
        setLoading(true);
        const response = await fetch('/api/openAI', {
            method: "POST",
            body:  fileContent ,
            headers: { "Content-Type": "application/json", 'uuid': localStorage.getItem('userIdForTrans') },
          });
        if(response.status == '200')
            window.location.href = '/download';   
    }

    const onDrop = (acceptedFiles) => {
        setError('')
        if (acceptedFiles.length === 1 && acceptedFiles[0].type === 'text/markdown') {
            const file = acceptedFiles[0];
            setFileName(file.name);

            const reader = new FileReader();
            reader.onload = () => {
                setFileContent(reader.result); // Set file content
                console.log('File Content:', reader.result); // Log the content
            };
            reader.readAsText(file);
        } else {
            setError('Please upload a markdown file.');
        }
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: '.md',
        maxFiles: 1,
    });

    return (
        <div>
            
            <div className='flex flex-col min-h-screen items-center justify-center'>
                <style jsx>{`
                .overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 9999;
                }

                .loader {
                    border: 4px solid #f3f3f3;
                    border-radius: 50%;
                    border-top: 4px solid #3498db;
                    width: 40px;
                    height: 40px;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    0% {
                    transform: rotate(0deg);
                    }
                    100% {
                    transform: rotate(360deg);
                    }
                }
                `}</style>

                {loading && (
                <div className="overlay">
                    <div className="loader"></div>
                </div>
                )}
                <Link href="/" className='p-2'>
                    <button className="float-left text-white font-bold py-1 px-1 rounded-full shadow-md bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-[length:400%_400%] animate-spin-slow">
                    <span className="mr-2">&#8592; Back</span>
                    </button>
                </Link>
                <div
                {...getRootProps()}
                className={`w-full max-w-md border-2 border-dashed border-blue-500 rounded-lg p-6 text-center ${
                    isDragActive ? 'bg-cyan-100' : 'bg-gray-100'
                } cursor-pointer`}
                >
                <input {...getInputProps()} />
                <p>
                    {isDragActive
                    ? 'Drop Markdown file here...'
                    : 'Drag & drop a Markdown file here, or click to select'}
                </p>
                <p className="mt-2 text-blue-600">{fileName}</p>
                {error && <p className="mt-2 text-red-500">{error}</p>}
                </div>

                {/* Move button to the next line */}
                {(fileContent && !data) && (
                <div className="mt-4">
                    <button 
                    onClick={translate} 
                    className="text-white font-bold py-4 px-4 rounded-full shadow-md bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-[length:400%_400%] animate-spin-slow"
                    >
                    Start Translation
                    </button>
                </div>
                )}
                
                {data}
                {progress&& ( <div className="w-3/4 bg-gray-300 rounded-full h-6 overflow-hidden shadow-md">
                    {/* Progress Indicator */}
                    <div
                    className="bg-blue-500 h-full text-xs font-medium text-white text-center flex items-center justify-center transition-all duration-300"
                    style={{ width: progress }}
                    >
                    </div>
                </div>)}
               

            </div>
        </div>


    );
};

export default Translator;
