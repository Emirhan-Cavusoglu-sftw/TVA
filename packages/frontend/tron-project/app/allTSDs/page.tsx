"use client";
import React, { use, useEffect, useState } from "react";
import TSDInfoCard from "../components/TSDInfoCard";
import {
  getTSDContract,
  factoryContract,
  entryPointContract,
  getAccountContract,
  publicClient,
  walletClient,
} from "../utils/helper";

import {
  DynamicContextProvider,
  DynamicWidget,
  useDynamicContext,
} from "@dynamic-labs/sdk-react-core";
import { motion } from "framer-motion";

const AllTSDs = () => {
  const [TSDcards, setTSDcards] = useState([]);
  const { user, primaryWallet } = useDynamicContext();
  const [searchTerm, setSearchTerm] = useState("");

  const getAllTsds = async () => {
    const tsds = await factoryContract.read.getAllTsds();
    console.log(tsds);
    const newTSDcards = await Promise.all(
      tsds.map(async (tsd) => {
        const tsdContract = await getTSDContract(tsd);
        const tsdAddress = tsdContract.address;
        const proofName = await tsdContract.read.projectName();
        const userName = await tsdContract.read.userName();
        const ipfsUrl = await tsdContract.read.dataURI();
        return { ...tsd, tsdAddress, userName, ipfsUrl, proofName };
      })
    );
    console.log(newTSDcards.length);
    setTSDcards(newTSDcards);
  };

  useEffect(() => {
    getAllTsds();
  }, []);

  const filteredTSDcards = TSDcards.filter((tsd) =>
    tsd.proofName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col items-center space-y-5 mt-8">
        <motion.div
          className="flex justify-center mt-6"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search by Proof Name..."
              className="pl-10 pr-4 w-96 h-[3.5rem] rounded-xl focus:outline-none focus:border-gray-800 bg-white bg-opacity-80"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
        <h1 className="font-bold text-4xl mb-14">Registrations</h1>
        <div className="flex justify-center flex-wrap gap-5">
          {filteredTSDcards.map((tsd, index) => (
            <TSDInfoCard
              key={index}
              tsdAddress={tsd.tsdAddress}
              ipfsUrl={tsd.ipfsUrl}
              userName={tsd.userName}
              proofName={tsd.proofName}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllTSDs;
