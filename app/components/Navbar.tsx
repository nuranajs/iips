"use client"
import Link from "next/link"
import { ModeToggle } from "./ModeToggle"
import React, { useState } from "react";


export default function Navbar(){
    const [navbarOpen, setNavbarOpen] = useState(false);



    return (
        <nav className="w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5">
            <Link href="/" className="font-bold text-3xl">Pshcology<span className="text-green-400">Islamic</span>
            </Link>
            <ul className="flex items-center space-x-4">
                <li>About</li>
                <li>Our Relation</li>
                <li>Program</li>
            </ul>
            <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              {/* <Bars3Icon className="h-5 w-5" /> */}
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              {/* <XMarkIcon className="h-5 w-5" /> */}
            </button>
          )}
        </div>
            <ModeToggle/>
        </nav>
    )
}