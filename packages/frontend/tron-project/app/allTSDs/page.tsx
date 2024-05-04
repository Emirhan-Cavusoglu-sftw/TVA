"use client";
import React, { use, useEffect, useState } from "react";
import TSDInfoCard from "../Components/TSDInfoCard";
import {
  getTSDContract,
  factoryContract,
  entryPointContract,
  getAccountContract,
  publicClient,
  walletClient,
} from "../Utils/helper";
import { Hex, parseEther, parseUnits } from "viem";
import { readContract } from "wagmi/actions";
import { config } from "../Utils/config";
import { accountABI, entryPointABI } from "../utils/constants";
import {
  DynamicContextProvider,
  DynamicWidget,
  useDynamicContext,
} from "@dynamic-labs/sdk-react-core";

const AllTSDs = () => {
  const [TSDcards, setTSDcards] = useState([]);
  const { user, primaryWallet } = useDynamicContext();


  // factoryContract.read.getAllTsds();
  const getTSD = async () => {
    if (!primaryWallet || !primaryWallet.address) {
      console.error('Wallet address is not available.');
      return;
    }
  
    const address = primaryWallet.address;
  
    // Retrieve the user account address using the wallet address
    const userAccountAddress = await factoryContract.read.ownerToAccount([address]);
  
    if (!userAccountAddress) {
      console.error('User account address is not available.');
      return;
    }
  
    // Proceed to get TSDs only if `userAccountAddress` is available
    const accountContract = await getAccountContract(userAccountAddress);
    const tsds = await accountContract.read.getTsds();
    
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
  
    if (newTSDcards.length > 0) {
      const lastTSD = newTSDcards[newTSDcards.length - 1];
      console.log(lastTSD.ipfsUrl);
    }
  
    console.log(newTSDcards.length);
    setTSDcards(newTSDcards);
  };

  const getAllTsds = async () => {
    const tsds = await factoryContract.read.getAllTsds();
    console.log(tsds);
  }
  

  useEffect(() => {
    getTSD();
  }, [primaryWallet]);;

  return (
    <>
      <div className="flex justify-center flex-col items-center space-y-5 mr-12 mt-8">
        <h1 className="font-bold text-4xl ml-12 mb-14">Registrations</h1>
        <div className="flex justify-center flex-wrap space-x-10 ml-12 pb-10 ">
        {TSDcards.map((tsd, index) => {
              return (
                <TSDInfoCard
                  key={index}
                  tsdAddress={tsd.tsdAddress}
                  ipfsUrl={tsd.ipfsUrl}
                  userName={tsd.userName}
                  proofName={tsd.proofName}
                />
              );
            })}
        </div>
        <button className="flex justify-center  h-[3.5rem] w-64 rounded-xl bg-amber-400 bg-opacity-80 text-black text-center items-center font-bold border border-black" onClick={()=>getAllTsds()}>
          Get All TSDs
        </button>
      </div>
    </>
  );
};

export default AllTSDs;
