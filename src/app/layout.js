import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/footer"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Adventures Heaven Dalhousie",
  description: "Experience the ultimate thrill with Adventures Heaven Dalhousie! Enjoy paragliding, ziplining, hot air ballooning, and more in the breathtaking landscapes of Dalhousie. Book your adventure today and create unforgettable memories.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
