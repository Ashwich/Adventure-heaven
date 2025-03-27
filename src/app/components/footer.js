import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#131313] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo & About */}
        <div>
          <Image src="/logo.png" alt="Company Logo" width={150} height={100} />
          <p className="mt-4 text-gray-400 text-sm">
            Experience the best adventure activities with us. Safety & thrill guaranteed!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
            <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            <li><Link href="/activities" className="text-gray-400 hover:text-white">Activities</Link></li>
          </ul>
        </div>

        {/* Social Media & Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" target="_blank"><Facebook size={24} className="text-gray-400 hover:text-white" /></Link>
            <Link href="https://instagram.com" target="_blank"><Instagram size={24} className="text-gray-400 hover:text-white" /></Link>
            <Link href="https://twitter.com" target="_blank"><Twitter size={24} className="text-gray-400 hover:text-white" /></Link>
            <Link href="mailto:info@company.com"><Mail size={24} className="text-gray-400 hover:text-white" /></Link>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-5">
        &copy; {new Date().getFullYear()} YourCompany. All Rights Reserved.
      </div>
    </footer>
  );
}
