'use client';
import Image from "next/image";
import Head from 'next/head';
import { PlayCircle } from "lucide-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import Header from "../components/navbar";
import { usePathname } from "next/navigation";


const activities = [
  {
    title: "Khajjiar",
    location: "Dalhousie,Chamba",
    image: "/images/Paragliding1.jpg",
  },
  {
    title: "Khajjiar",
    location: "Dalhousie,Chamba",
    image: "/images/Paragliding5.jpg",
  },
  {
    title: "Khajjiar",
    location: "Dalhousie,Chamba",
    image: "/images/Paragliding3.jpg",
  },
  {
    title: "Khajjiar",
    location: "Dalhousie,Chamba",
    image: "/images/Paragliding4.jpg",
  },
];

export default function Paragliding() {
  const pathname = usePathname(); // Get current URL path
  const isHomePage = pathname === "/"; 
  const whatsappNumber = "9817404544";
const message = encodeURIComponent("Hello, I am interested in your services.");
  return (
    <>
    <Head>
      <title>Paragliding in Khajjiar - Best Adventure Experience</title>
      <meta name="description" content="Experience the thrill of paragliding in Khajjiar, Dalhousie. Book your adventure today with experienced guides, safe travel, and affordable prices." />
      <meta name="keywords" content="paragliding in Khajjiar, adventure sports in Dalhousie, best paragliding experience, Himachal Pradesh tourism" />
      <meta name="author" content="Adventures Heaven" />
      <meta property="og:title" content="Paragliding in Khajjiar - Best Adventure Experience" />
      <meta property="og:description" content="Enjoy a breathtaking paragliding experience in Khajjiar, Dalhousie. Safe, affordable, and guided by experts!" />
      <meta property="og:image" content="/images/Paragliding2.jpg" />
      <meta property="og:type" content="website" />
    </Head>

    <div className="min-h-screen bg-gradient-to-b from-[#efce87] via-[#f49664] to-[#ed3050] text-white ">
    
        <div
        className=" min-h-screen inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/Paragliding2.jpg')" }}>
      
      {!isHomePage && <Header />}
      <h1 className="text-5xl text-blue-500 font-bold text-center font-serif p-5  mb-8">Paragliding</h1>      
    
      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        <div className="md:row-span-2 relative group overflow-hidden rounded-lg shadow-md">
          <Image
            src={activities[0].image}
            alt={activities[0].title}
            width={400}
            height={500}
            className="w-full h-full object-fit group-hover:scale-105 transition duration-300"
          />
          <div className="absolute bottom-0 left-0 bg-white bg-opacity-50 text-blue-500 p-4 w-full">
            <h2 className="text-lg font-bold">{activities[0].title}</h2>
            <p className="text-sm">{activities[0].location}</p>
          </div>
        </div>
        {activities.slice(1).map((activity, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-md">
            <Image
              src={activity.image}
              alt={activity.title}
              width={400}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="absolute bottom-0 left-0 bg-white bg-opacity-50 text-blue-500 p-3 w-full">
              <h2 className="text-md font-bold">{activity.title}</h2>
              <p className="text-sm">{activity.location}</p>
            </div>
          </div>
        ))}
      </div>
      </div>

   {/* Experience Section */}
   <motion.div 
      className="mt-12 text-center max-w-4xl mx-auto p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-extrabold text-gray-900 leading-tight tracking-wide">
        Experience The <span className="text-blue-600">New Adventure</span>
      </h1>
      <p className="text-white mt-4 text-lg">
        Explore breathtaking landscapes and thrilling experiences with our latest adventure package.  
        Enjoy a hassle-free journey with <span className="font-semibold text-blue-500">pickup and drop included</span>, making your travel smooth and convenient.
      </p>

      {/* Newly Launched Section */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-lg shadow-lg max-w-6xl mx-auto mt-12">
      
      {/* Left Section - Information */}
      <motion.div 
        className="md:w-1/2 text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold text-gray-900">Adventure  to Make Sweet Memories</h1>
        <p className="text-gray-600 mt-2 text-lg">Find the perfect adventure  .</p>

        {/* Features */}
        <div className="mt-6 space-y-6">
        <FeatureItem number="1" title="Experienced Tour Guides" description="Our professional guides ensure a safe and informative journey, enhancing your travel experience." />
<FeatureItem number="2" title="Safe Traveling" description="We prioritize your safety with well-planned routes and reliable transportation." />
<FeatureItem number="3" title="Affordable Price" description="Enjoy budget-friendly trips without compromising on quality and comfort." />

        </div>

        {/* Call to Action Button */}
    <button
  className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition-all"
  onClick={() => window.open("https://wa.me/9817404544?text=Hello%2C%20I%20am%20interested%20in%20your%20services", "_blank")}
>
  Start Your Explore
</button>

      </motion.div>

      {/* Right Section - Image with Floating User Reviews */}
      <motion.div 
        className="md:w-1/2 mt-8 md:mt-0 relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <Image 
            src="/images/Paragliding4.jpg"
            alt="Beautiful Travel Destination"
            width={500}
            height={600}
            className="w-full h-auto rounded-lg object-cover"
          />
          
        </div>
      </motion.div>
      
    </div>

 

      {/* Call to Action */}
      <motion.button
      className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg text-lg transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.1 }}
      onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")}
    >
      Book Your Adventure Now
    </motion.button>
    </motion.div>
      
      </div>
      </>
  );
}


function FeatureItem({ number, title, description }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white font-bold text-lg rounded-full shadow-md">
        {number}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div> );
}