"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import WalletComponent from "./components/WalletComponent";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/AboutUs",
  },
  {
    name: "Contact Us",
    path: "/ContactUs",
  },
  {
    name: "How It Works?",
    path: "/HowItIsWork",
  },
  {
    name: "Create Design Stamp",
    path: "/CreateDesignStamp",
  },
  {
    name: "Profile",
    path: "/Profile",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="z-[999] relative items-center justify-center text-center">
      <motion.div
        className="flex justify-center fixed top-0 left-1/2 h-[4.5rem]  -translate-x-1/2 w-full
        rounded-none border border-white border-opacity-40 bg-white
        bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]
        sm:top-6 sm:h-[3.25rem] sm:w-[82rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex justify-around items-center p-4">
          <nav className="flex space-x-24">
            {links.map((link) => (
              <Link href={link.path} key={link.path}>
                {/* {pathname === link.path ? (
                  <div
                    className={`cursor-pointer 
                        "text-blue-500"
                     hover:text-blue-700`}
                    key={link.path}
                  >
                    {link.name}
                  </div>
                ) : (
                  <div
                    className={`cursor-pointer 
                    "text-blue-500"
                    hover:text-blue-700`}
                    key={link.path}
                  >
                    {link.name}
                    <motion.div
                      className="underline"
                      layoutId="underline"
                    ></motion.div>
                  </div>
                )} */}
                {link.name}
                {/* {pathname === link.path ?(<motion.div className="underline" layoutId="underline"></motion.div>):null} */}
              </Link>
            ))}
          </nav>
        </div>
        <WalletComponent />
      </motion.div>

      <motion.div
        className="flex justify-center fixed top-[5rem] left-1/2 -translate-x-1/2 w-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-96 border border-gray-300 rounded-full focus:outline-none focus:border-gray-800 bg-white
      bg-opacity-80"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="10.5" cy="10.5" r="7.5" />
            <line x1="21" y1="21" x2="15.8" y2="15.8" />
          </svg>
        </div>
      </motion.div>
    </header>
  );
}
