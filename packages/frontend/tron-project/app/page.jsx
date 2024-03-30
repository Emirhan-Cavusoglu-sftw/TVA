"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import testABI from "./abis/testABI.json";
import { testAddress } from "./Utils/addresses.js";
import { addRequestMeta } from "next/dist/server/request-meta";
import { useWallet } from "@tronweb3/tronwallet-adapter-react-hooks";
const TronWeb = require("tronweb");

const tronWeb = new TronWeb({
  fullHost: "https://nile.trongrid.io/",
  headers: {},
});

export const sign = async (transaction) => {
  try {
    const tronweb = window.tronWeb;
    const signedTransaction = await tronweb.trx.sign(transaction.transaction);
    return signedTransaction;
  } catch (error) {
    console.log(error, "signerr");
    throw new Error(error);
  }
};

export const sendRawTransaction = async (signedTransaction) => {
  try {
    const tronweb = window.tronWeb;
    const result = await tronweb.trx.sendRawTransaction(signedTransaction);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export default function Home() {
  const { connect, disconnect, select, connected, address } = useWallet();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [result, setresult] = useState({});
  
  const contract = tronWeb.contract(testABI, testAddress);

  console.log(window.tronWeb);
  tronWeb.setAddress(window.tronWeb.defaultAddress.base58);

  console.log(tronWeb.defaultAddress.base58);

  async function store(i) {
    try {

      const result = await tronWeb.transactionBuilder.triggerSmartContract(
        testAddress,
        "store(uint256)",
        { _isConstant: false },
        [{ type: "uint256", value: 10 }]
      );
      console.log(result);
      const signedTransaction = await sign(result);
      const transaction = await sendRawTransaction(signedTransaction);
      console.log(transaction);
    } catch (error) {
      console.log(error);
    }

    setresult(result);
  }

  useEffect(() => {
    // const interval = setInterval(() => {
    //   nextStep();
    // }, 5000);
    // return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
    async function getContract() {
      let result = await contract.retrieve().call();
      console.log(result);
    }
    getContract();
  }, []);

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
    <div className="bg-gradient-to-r from-cyan-400 to-gray-700  flex items-center justify-center min-h-screen flex-col">
      <div className="slideshow">
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
        transition={{ duration: 0.5 }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sit
          adipisci aliquam cum magnam vero tempore facilis voluptatibus eius,
          fuga repudiandae tenetur reprehenderit? Ducimus ullam vel, aut
          deleniti magnam suscipit.
        </p>
      </motion.div>

      <button onClick={() => store(3)}>ONCLICK</button>
    </div>
  );
}
