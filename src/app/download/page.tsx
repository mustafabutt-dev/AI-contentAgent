'use client';
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';

export default function Donwload() {
    const router = useRouter();
    const [error, setError] = useState('');
    let response='';
   
    const fileDownloader = async () => {
        const a = document.createElement('a');

        if((localStorage.getItem('userId') === null || localStorage.getItem('directoryName') === null) && (localStorage.getItem('userIdForTrans') === null || localStorage.getItem('userIdForOpt') === null ) ){
            setError("No file found.")
            return;
        }
        if (localStorage.getItem('userIdForOpt') != null) {
            response = await fetch('/api/download',{method:'GET',headers: {
                'userIdForOpt': localStorage.getItem('userIdForOpt')
            }}); 
            a.download = `${localStorage.getItem('userIdForOpt')}.zip`;
        }
        else if (localStorage.getItem('userIdForTrans') != null) {
            response = await fetch('/api/download',{method:'GET',headers: {
                'userIdForTrans': localStorage.getItem('userIdForTrans')
            }}); 
            a.download = `${localStorage.getItem('userIdForTrans')}.zip`;
        } else {
            response = await fetch('/api/download',{method:'GET',headers: {
                'directoryName': localStorage.getItem('directoryName'),
                'uuid': localStorage.getItem('userId')
            }}); 
            a.download = `${localStorage.getItem('directoryName')}.zip`;
        }
          
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        a.href = url;

       // The name for the downloaded file
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url); // Clean up the URL object
        router.push('/')
    };
    // useEffect(()=>{
    //     if((localStorage.getItem('userId') === null || localStorage.getItem('directoryName') === null ) && localStorage.getItem('userIdForTrans') === null)
    //         router.push('/')
    // },[])


    return (
    <div className="flex items-center justify-center h-screen">
       
        <div class="flex items-center justify-center h-screen">
            {error &&<p style={{ marginTop: '10px', color: 'red' }}>{error}</p>}
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