import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close menu on page change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-transparent text-white md:px-20 relative z-50">
      <nav className="flex items-center justify-between py-4 px-6 bg-transparent rounded-lg w-full relative">
        
        {/* Logo */}
        <div className="h-32 w-32 flex items-center justify-center z-50">
        <Image src="/images/logo.png" alt="Company Logo" width={150} height={100} />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 border border-[#8931ff]/50 backdrop-blur-lg shadow-[0px_0px_20px_rgba(137,49,255,0.5)] text-white text-xl px-20 py-4 rounded-[50px]">
          <div className="flex space-x-16">
            <Link href="/" className="nav-link">Home</Link>
       

            {/* Activities Dropdown (Desktop) */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="nav-link flex items-center gap-1"
              >
                Activities ▼
              </button>

              {dropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-50">
                  <li className="dropdown-item">
                    <Link href="/paragliding" className="block px-4 py-2 hover:bg-gray-200">Paragliding</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link href="/ziplining" className="block px-4 py-2 hover:bg-gray-200">Ziplining</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link href="/hotairballooning" className="block px-4 py-2 hover:bg-gray-200">Hot Air Ballooning</Link>
                  </li>
                </ul>
              )}
            </div>

            <Link href="https://wa.me/9817404544?text=Hello%2C%20I%20am%20interested%20in%20your%20services" className="nav-link">Contact</Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 w-64 h-full bg-[rgba(23,23,23,0.95)] text-white z-[9999] transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button onClick={() => setIsOpen(false)} className="absolute top-5 right-5">
          <X size={32} />
        </button>

        <ul className="flex flex-col items-center justify-center pt-30 space-y-6 text-lg">
          <li><Link href="/" className="mobile-link" onClick={() => setIsOpen(false)}>Home</Link></li>
          {/* Activities Dropdown (Mobile) */}
          <li className="relative">
            <button
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className="mobile-link flex items-center gap-1"
            >
              Activities ▼
            </button>
            {mobileDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-50">
                <li className="dropdown-item">
                  <Link 
                    href="/paragliding" 
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => { setMobileDropdownOpen(false); setIsOpen(false); }} // ✅ Closes both dropdown and mobile menu
                  >
                    Paragliding
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link 
                    href="/ziplining" 
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => { setMobileDropdownOpen(false); setIsOpen(false); }} // ✅ Closes both dropdown and mobile menu
                  >
                    Ziplining
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link 
                    href="/hotairballooning" 
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => { setMobileDropdownOpen(false); setIsOpen(false); }} // ✅ Closes both dropdown and mobile menu
                  >
                    Hot Air Ballooning
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li><Link href="https://wa.me/9817404544?text=Hello%2C%20I%20am%20interested%20in%20your%20services" className="mobile-link" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </div>

      {/* Styles */}
      <style jsx>{`
        .nav-link, .mobile-link {
          transition: all 0.3s ease-in-out;
          padding: 4px 10px;
          border-radius: 50px;
        }
        .nav-link:hover, .mobile-link:hover {
          background: rgba(125,120,120,0.7);
          padding: 4px 16px;
        }
        .dropdown-item {
          display: block;
          padding: 10px 16px;
          transition: background 0.2s;
        }
        .dropdown-item:hover {
          background: #f0f0f0;
        }
      `}</style>
    </header>
  );
}
