import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {  Menu, X } from "lucide-react"; // Importing Menu and Close icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <header className="bg-transparent text-white md:px-20">
      <nav className="flex items-center justify-between py-4 px-6 bg-transparent rounded-lg w-full relative">
        
        {/* Logo */}
        <div className="text-4xl font-bold font-serif h-32 w-32 flex items-center justify-center">
          <Image src="/logo.png" alt="Company Logo" width={128} height={128} className="object-contain" />
        </div>

        {/* Centered navigation menu (Desktop) */}
        <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 border border-[#8931ff]/50 backdrop-blur-lg shadow-[0px_0px_20px_rgba(137,49,255,0.5)] text-white text-xl px-20 py-4 rounded-[50px]">
          <div className="flex space-x-16">
            <Link href="/" className="transition-all duration-300 ease-in-out hover:bg-[rgba(125,120,120,0.7)] hover:text-white hover:px-4 hover:py-1 hover:rounded-[50px]">
              Home
            </Link>
            <Link href="/about" className="transition-all duration-300 ease-in-out hover:bg-[rgba(125,120,120,0.7)] hover:text-white hover:px-4 hover:py-1 hover:rounded-[50px]">
              About
            </Link>
            <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="transition-all duration-300 ease-in-out hover:bg-[rgba(125,120,120,0.7)] hover:text-white hover:px-4 hover:py-1 hover:rounded-[50px] focus:outline-none"
          >
            Activities ▼
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-50">
              <Link
                href="/paragliding"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Paragliding
              </Link>
              <Link
                href="/ziplining"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Ziplining
              </Link>
              <Link
                href="/hotairballooning"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Hot Air Ballooning
              </Link>
            </div>
          )}
        </div>
            <Link href="/contact" className="transition-all duration-300 ease-in-out hover:bg-[rgba(125,120,120,0.7)] hover:text-white hover:px-4 hover:py-1 hover:rounded-[50px]">
              Contact
            </Link>
          </div>
        </div>

        {/* Right-aligned Admin Icon & Mobile Menu Button */}
        <div className="flex items-center space-x-4">

          {/* Hamburger Menu (Mobile) */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[rgba(23,23,23,0.9)] text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button onClick={() => setIsOpen(false)} className="absolute top-5 right-5">
          <X size={32} />
        </button>
        
        <ul className="flex flex-col items-center justify-center h-full space-y-6 text-lg">
          <li>
            <Link href="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Services</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
