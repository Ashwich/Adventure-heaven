'use client';
import Image from "next/image";
import { PlayCircle } from "lucide-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import Header from "../components/navbar";


const activities = [
  {
    title: "Khajjiar",
    location: "Dalhousie,Chamba",
    image: "/images/hotairballon.jpg",
  },
  {
    title: "Khajjiar",
    location: "Dalhousie,Chamba",
    image: "/images/hotairballon2.jpg",
  },
  {
    title: "Khajjiar",
    location: "Dalhousie,Chamba",
    image: "/images/hotairballon3.jpeg",
  },
  {
    title: "Khajjiar",
    location: "Dalhousie,Chamba",
    image: "/images/hotairballon4.avif",
  },
];

export default function HotAirBallooning() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-300 text-white p-4 md:p-8">
      <Header/>
      <h1 className="text-4xl font-bold text-center mb-8">Hot Air Balloons</h1>      
    
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
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition-all">
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
            src="/images/travel-image.jpg"
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
      >
        Book Your Adventure Now 🚀
      </motion.button>
    </motion.div>
      
      </div>

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