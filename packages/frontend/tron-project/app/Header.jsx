"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
// import WalletComponent from "./components/WalletComponent";

export const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="z-[999] sticky top-0">
      <div className="flex flex-row justify-center items-center text-center space-x-24">
        <motion.div
          className="flex justify-center items-center mt-6 h-[3.5rem] w-[70rem]
        rounded-xl bg-white
        bg-opacity-80 space-x-32 font-bold max-sm:w-[40rem] "
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href={"/"}>
            <p className={pathname === "/" ? "text-[#93A6EB]" : "text-black"}>
              Home
            </p>
          </Link>
          
          <Link href={"/AllTSDs"}>
            <p
              className={
                pathname === "/AllTSDs" ? "text-[#93A6EB]" : "text-black"
              }
            >
              All TSDs
            </p>
          </Link>
          <Link href={"/CreateDesignStamp"}>
            <p
              className={
                pathname === "/CreateDesignStamp"
                  ? "text-[#93A6EB]"
                  : "text-black"
              }
            >
              Create Your Design Stamp
            </p>
          </Link>
          <Link href={"/profile"}>
            <p
              className={
                pathname === "/profile" ? "text-[#93A6EB]" : "text-black"
              }
            >
              Profile
            </p>
          </Link>
        </motion.div>

        {/* <motion.div
          className="flex justify-center mt-6"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 w-96 h-[3.5rem] border border-black border-l-4 border-b-4 rounded-xl focus:outline-none focus:border-gray-800 bg-white
      bg-opacity-80 "
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
        </motion.div> */}
        <div className="flex justify-center items-center text-center mt-6">
          <DynamicWidget />
        </div>
      </div>
    </header>
  );
};
