import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" text-white py-10" style={{ backgroundImage: "url('/images/footer bg.webp')" }} >
   
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo & About */}
        <div>
          <Image src="/images/logo.png" alt="Company Logo" width={150} height={100} />
          <p className="mt-4 text-black text-lg font-semibold">
            Experience the best adventure activities with us. Safety & thrill guaranteed!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className=" text-blue-500 hover:text-white">Home</Link></li>
            <li><Link href="https://wa.me/9817404544?text=Hello%2C%20I%20am%20interested%20in%20your%20services" className=" text-blue-500 hover:text-white">Contact</Link></li>
            <li><Link href="/activities" className=" text-blue-500 hover:text-white">Activities</Link></li>
          </ul>
        </div>

        {/* Social Media & Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="https://www.instagram.com/adventures_heaven_dalhousie?igsh=c3hpN29heGFkNW5o" target="_blank"><Facebook size={24} className=" text-blue-500 hover:text-white" /></Link>
            <Link href="https://www.instagram.com/adventures_heaven_dalhousie?igsh=c3hpN29heGFkNW5o" target="_blank"><Instagram size={24} className=" text-blue-500 hover:text-white" /></Link>
          
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center  text-black text-sm mt-10  pt-5">
        &copy; {new Date().getFullYear()} Adventures Heaven All Rights Reserved.
      </div>
    </footer>
  );
}
