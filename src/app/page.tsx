'use client';

import { useChat } from 'ai/react';
import { redirect } from 'next/navigation';
import Link from 'next/link'
import SideBar from '@/components/SideBar';
export default function Chat() {
  redirect('/generate'); 
  return (
    <div className="flex flex-row w-full items-center justify-center max-w-md  mx-auto h-screen space-x-4">

      {/* <Link href="/generate"><div className='m-0 border-double border-sky-500 border-2 p-2 hover:bg-sky-300 cursor-pointer'>Generate a Blog Post</div></Link>
      <Link href="/translate"><div className='m-0 border-double border-sky-500 border-2 p-2 hover:bg-sky-300 cursor-pointer'>Translate a Blog Post</div></Link>
      <Link href="/optimize"><div className='m-0 border-double border-sky-500 border-2 p-2 hover:bg-sky-300 cursor-pointer'>Optimize a Blog Post</div></Link> */}
    </div>
  );
}