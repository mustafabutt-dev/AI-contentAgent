
'use client'
import Image from 'next/image'
import { FaBars, FaTimes } from "react-icons/fa";
import SideBar from "./SideBar";


const Header = () => {

  return (
    <>
      <div className="w-screen mx-auto py-4 flex justify-center  z-50 bg-black text-white text-lg font-bold h-16 sticky top-0 ">
          <a href="" className="no-style">AI Agent</a>
        </div>
      <SideBar /> 
    </>
  );
};

export default Header;
