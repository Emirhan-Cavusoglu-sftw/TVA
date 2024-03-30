"use client"
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
    name: "How It Is Work?",
    path: "/HowItIsWork",
  },
  {
    name: "Create Design Stamp",
    path: "/CreateDesignStamp",
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
        sm:top-6 sm:h-[3.25rem] sm:w-[72rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <div className=" flex justify-around items-center p-4">
          <nav className="flex space-x-24">
            {links.map((link) => (
              <Link href={link.path} key={link.path}>
                <div className={`cursor-pointer ${pathname === link.path ? "text-blue-500" : "text-gray-800"} hover:text-blue-700`} key={link.path}>
                  {link.name}
                </div>
              </Link>
            ))}
          </nav>
        </div>
        <WalletComponent />
      </motion.div>
    </header>
  );
}
