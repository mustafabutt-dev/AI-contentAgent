
'use client'
import Image from 'next/image'
import { FaBars, FaTimes } from "react-icons/fa";
import SideBar from "./SideBar";
import {signOut, useSession } from 'next-auth/react';

const Header = () => {
  const { data: session } = useSession();


  return (
    <>
      <div className="w-screen mx-auto py-4 px-8 flex justify-between items-center z-50 bg-black text-white text-lg font-bold h-16 sticky top-0">
        <a href="/" className="no-style text-white text-xl font-semibold">AI Agent</a>
        {session && (
                <button
                onClick={() => signOut({ callbackUrl: '/signin' })}
                className="bg-white text-black px-4 py-2 rounded-md shadow hover:bg-gray-200 transition duration-200"
              >
                Sign Out
              </button>
            )}
      </div>
       
      {session && (
             <SideBar /> 
      )}
   
    </>
  );
};

export default Header;
