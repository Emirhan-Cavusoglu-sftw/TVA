"use client"
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import testABI from "./abis/testABI.json";
import {testAddress} from "./Utils/addresses.js";
import { addRequestMeta } from "next/dist/server/request-meta";
const TronWeb = require('tronweb');





const tronWeb = new TronWeb({
  fullHost: 'https://api.shasta.trongrid.io',
  headers: { 
  
},
  
  privatekey: process.env.NEXT_PUBLIC_PRIVATE_KEY,
});







const images = [
  "https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1530076886461-ce58ea8abe24?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1570051008600-b34baa49e751?q=80&w=1185&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const variants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  animate: {
    x: 0,
    opacity: 1,

    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,

      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    };
  },
};

export default function Home() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [result, setresult] = useState({})
  // const [contract, setContract] = useState()
  const contract = tronWeb.contract(testABI, testAddress);
  
  // console.log(contract);
// console.log(window.tronWeb.defaultAddress.base58);
// tronWeb.setAddress(window.tronWeb.defaultAddress.base58);
  async function store(i) {
    try {
      const result = await contract.store(i).send({
        callValue: 0,
        shouldPollResponse: true,
        
      })
    } catch (error) {
      console.log(error);
    }
    
    
    setresult(result);
  }
  console.log(result);
  useEffect(() => {
    // const interval = setInterval(() => {
    //   nextStep();
    // }, 5000);

    // return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
  //   async function setContract(){
  //     const contract = await tronWeb.contract().at("TCR7Haj8axUtxaWQq8V8hFuEySHmRHnHK9");
  //     setContract(contract);
  //     console.log(contract);
  //   }
  
  //  setContract();
     async function getContract(){
      let result = await contract.retrieve().call();
      console.log(result);
     }
    getContract();
  }, [])
  

  function nextStep() {
    setDirection(1);
    if (index === images.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }

  function prevStep() {
    setDirection(-1);
    if (index === 0) {
      setIndex(images.length - 1);
      return;
    }
    setIndex(index - 1);
  }

  return (
    <div className="bg-gradient-to-r from-purple-950 to-violet-600 flex items-center justify-center min-h-screen flex-col">
      <div className="slideshow">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            variants={variants}
            animate="animate"
            initial="initial"
            exit="exit"
            src={images[index]}
            alt="slides"
            className="slides"
            key={images[index]}
            custom={direction}
          />
        </AnimatePresence>
        <button className="prevButton" onClick={prevStep}>
          ◀
        </button>
        <button className="nextButton" onClick={nextStep}>
          ▶
        </button>
      </div>

      <motion.div
          className="text-white h-10"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sit adipisci aliquam cum magnam vero tempore facilis voluptatibus eius, fuga repudiandae tenetur reprehenderit? Ducimus ullam vel, aut deleniti magnam suscipit.</p>
      </motion.div>


      <button onClick={()=>store(3)}>
        ONCLICK
      </button>


    </div>
  );
}
