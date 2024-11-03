'use client';
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';

export default function Donwload() {
    const router = useRouter();

    const fileDownloader = async () => {
     
        const response = await fetch('/api/download',{method:'GET',headers: {
            'directoryName': localStorage.getItem('directoryName'),
            'uuid': localStorage.getItem('userId')
          }}); 
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${localStorage.getItem('directoryName')}.zip`; // The name for the downloaded file
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url); // Clean up the URL object
        router.push('/generate')
    };
    useEffect(()=>{
        if(localStorage.getItem('userId') === null || localStorage.getItem('directoryName') === null )
            router.push('/generate')
    },[])


    return (
    <div className="flex items-center justify-center h-screen">
       
        <div class="flex items-center justify-center h-screen">
            <button  onClick={fileDownloader} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg flex items-center space-x-2">
                <span>Download Files</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
            </button>
        </div>
        
    </div>
    );
}