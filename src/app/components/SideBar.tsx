'use client'

import Link from "next/link";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { UserService } from "@/services/user.service";

const SideBar = () => {
    const pathname = usePathname();
    
    return (
        <div>
            <>
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="logo-sidebar" className="shadow-2xl p-4 bg-white rounded fixed top-20 left-0 z-40 w-64 transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto ">
                    <div className="flex items-center ps-2.5 mb-5">
                    
                    <span className="self-center text-xl font-semibold whitespace-nowrap "></span>
                    </div>
                    <ul className="space-y-2 font-medium">
                    <li className={`p-2 ${
                        pathname === '/generate' ? 'bg-gray-500 text-white' : 'hover:bg-gray-200'
                    }`}>
                        <Link href="/generate">
                            <div className="shadow-md p-2 bg-white rounded cursor-pointer no-style flex items-center p-2 text-gray-900 rounded-lg dark:text-dark hover:bg-dark-100 dark:hover:bg-black-700 group">
                            {/* <img src={"/images/dashboard.png"}  width={25} height={25} /> */}
                            <span className="ms-3">Generate Blog Post</span>
                            </div>
                        </Link>
                    </li>
                    <li className={`p-2 ${
                        pathname === '/translate' ? 'bg-gray-500 text-white' : 'hover:bg-gray-200'
                    }`}>
                        <Link href="/translate">
                            <div className="shadow-md p-2 bg-white rounded cursor-pointer no-style flex items-center p-2 text-gray-900 rounded-lg dark:text-dark hover:bg-gray-100 dark:hover:bg-black-700 group">
                            {/* <img src={"/images/order.png"}  width={25} height={25} /> */}
                            <span className="ms-3">Translate Blog Post</span>
                            </div>
                        </Link>
                    </li>
                    <li className={`p-2 ${
                        pathname === '/optimize' ? 'bg-gray-500 text-white' : 'hover:bg-gray-200'
                    }`}>
                        <Link href="/optimize">
                            <div className="shadow-md p-2 bg-white rounded cursor-pointer no-style flex items-center p-2 text-gray-900 rounded-lg dark:text-dark hover:bg-gray-100 dark:hover:bg-black-700 group">
                            {/* <img src={"/images/clients.png"}  width={25} height={25} /> */}
                            <span className="ms-3">Optimize Blog Post</span>
                            </div>
                        </Link>
                    </li>
                    
                    </ul>
                </div>
            </aside></>
            
        </div>
    );
};

export default SideBar;
