'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/navbar";
import { FaUsers, FaStar, FaPlane, FaSuitcase } from "react-icons/fa";


const activities = [
  {
    title: "Hot Air Ballooning",
    description: "Soar high and enjoy breathtaking views.",
    image: "/images/hotairballon.jpg",
    price: "5,000 - 10,000",
    link: "/activities/hot-air-ballooning",
  },
  {
    title: "Paragliding",
    description: "Experience the thrill of flying like a bird.",
    image: "/images/paragliding2.jpg",
    price: "3,000 - 7,000",
    link: "/activities/paragliding",
  },
  {
    title: "Ziplining",
    description: "Glide through the air with speed and excitement.",
    image: "/images/zipline2.jpg",
    price: "1,500 - 4,000",
    link: "/activities/zipline3.jpg",
  },
];


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-300 text-white">
      
       <div className="absolute inset-0">
          <Image
            src="/images/hotairballon.png"
            alt="Adventure Air Activities"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <Header/>
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center text-center bg-transparent text-white px-6">
      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-1 p-4"
      >
        <h1 className="text-5xl font-bold">
          Experience the Thrill of Air Adventures
        </h1>
        <p className="mt-2 text-lg">Paragliding, Skydiving, and Hot Air Ballooning</p>
        <Link
          href="/activities"
          className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg text-lg hover:bg-gray-200 transition font-semibold"
        >
          Explore Activities
        </Link>
      </motion.div>

      {/* Statistics Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {[
          { icon: <FaPlane />, value: "20+", label: "Guides" },
          { icon: <FaSuitcase />, value: "3K+", label: "Happy customers" },
          { icon: <FaStar />, value: "89+", label: "Star Ratings" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className="bg-white text-blue-600 p-6 rounded-lg shadow-lg flex flex-col items-center"
          >
            <div className="text-4xl mb-2">{stat.icon}</div>
            <h3 className="text-3xl font-bold">{stat.value}</h3>
            <p className="text-lg">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>

{/* Featured Activities */}
<section className="py-5 px-8 text-center">
  <h2 className="text-3xl font-bold mb-8">Popular Air Activities</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {activities.map((activity) => (
      <motion.div
        key={activity.title}
        whileHover={{ scale: 1.05 }}
        className="bg-white p-6 rounded-lg shadow-lg text-black flex flex-col items-center"
      >
        {/* Image - Centered and Fit */}
        <div className="w-full h-64 overflow-hidden flex justify-center items-center">
          <Image
            src={activity.image}
            alt={activity.title}
            width={300}
            height={200}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        {/* Activity Info */}
        <h3 className="text-xl font-semibold mt-4">{activity.title}</h3>
        <p className="text-gray-600 mt-2">{activity.description}</p>
        
        {/* Price Range */}
        <p className="text-lg font-bold text-blue-600 mt-2">Price: ₹{activity.price}</p>

        {/* Learn More Button with Dynamic Link */}
        <Link
          href={activity.link} // Redirects to specific activity page
          className="mt-4 inline-block bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-700 transition"
        >
          Book Now
        </Link>
      </motion.div>
    ))}
  </div>
</section>

    </div>
  );
}
