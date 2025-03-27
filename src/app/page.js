'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/navbar";
import { FaUsers, FaStar, FaPlane, FaSuitcase } from "react-icons/fa";
import Paragliding from "./paragliding/page";
import Ziplining from "./ziplining/page";
import HotAirBallooning from "./hotairballooning/page";
import Head from "next/head";


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
<>
<Head>
        <title>Adventure Air Activities | Paragliding, Ziplining & Hot Air Ballooning</title>
        <meta name="description" content="Explore thrilling air adventures including Paragliding, Ziplining, and Hot Air Ballooning. Experience breathtaking views and unforgettable memories!" />
        <meta name="keywords" content="paragliding, ziplining, hot air ballooning, adventure, air activities, extreme sports, travel, tourism" />
        <meta name="author" content="Adventure Tours" />
        <meta property="og:title" content="Adventure Air Activities | Paragliding, Ziplining & Hot Air Ballooning" />
        <meta property="og:description" content="Discover the best air adventure experiences, from paragliding to hot air balloon rides. Book your next thrilling adventure today!" />
        <meta property="og:image" content="/images/hotairballon.jpg" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-300 text-white  overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hotairballon.png')" }}
      />

      <Header />

      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative p-4"
        >
          <h1 className="text-3xl sm:text-5xl font-bold">
            Experience the Thrill of Air Adventures
          </h1>
          <p className="mt-2 text-base sm:text-lg">
            Paragliding, Skydiving, and Hot Air Ballooning
          </p>
          <Link
            href="/hotairballooning"
            className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg text-lg hover:bg-gray-200 transition font-semibold"
          >
            Explore Activities
          </Link>
        </motion.div>
         {/* Statistics Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <h3 className="text-2xl sm:text-3xl font-bold">{stat.value}</h3>
            <p className="text-sm sm:text-lg">{stat.label}</p>
          </motion.div>
        ))}
      </div>
      </div>

     

      {/* Featured Activities */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Popular Air Activities</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <motion.div
              key={activity.title}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-black flex flex-col items-center"
            >
              {/* Image - Responsive */}
              <div className="w-full h-48 sm:h-64 flex justify-center items-center overflow-hidden rounded-lg">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Activity Info */}
              <h3 className="text-lg sm:text-xl font-semibold mt-3">{activity.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base mt-2">{activity.description}</p>
              <p className="text-base sm:text-lg font-bold text-blue-600 mt-2">Price: ₹{activity.price}</p>
              <Link
                href={`https://wa.me/9817404544?text=${encodeURIComponent(`Hello, I am interested in ${activity.title}. Can you share more details?`)}`}
                className="mt-4 inline-block bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-700 transition"
              >
                Book Now
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Activity Components */}
      <HotAirBallooning />
      <Paragliding />
      <Ziplining />
    </div>
    </>
  );
}
