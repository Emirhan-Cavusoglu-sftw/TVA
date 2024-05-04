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

const AllTSDs = () => {
  const [TSDcards, setTSDcards] = useState([]);
  const [factoryContractAddress, setFactoryContractAddress] = useState<Hex>();

  const getTSDs = async () => {
    const contractAddress = await factoryContract.read.factory([factoryContractAddress]);
    const tsds = await factoryContract.read.getTSDs([contractAddress]);

    const tsdCardPromises = tsds.map(async tsd => {
      const tsdContract = await getTSDContract(tsd);
      const proofName = await tsdContract.read.projectName();
      const userName = await tsdContract.read.userName();
      const ipfsUrl = await tsdContract.read.dataURI();
      return { tsd, userName, ipfsUrl, proofName };
    });

    const newTSDcards = await Promise.all(tsdCardPromises);
    setTSDcards(newTSDcards);
    console.log(newTSDcards);
  };

  useEffect(() => {
    getTSDs();
  }, []);

  return (
    <>
      <div className="flex justify-center flex-col items-center space-y-5 mr-12 mt-8">
        <h1 className="font-bold text-4xl ml-12 mb-14">Registrations</h1>
        <div className="flex justify-center flex-wrap space-x-10 ml-12 pb-10 ">
          {TSDcards.map((tsd, index) => {
          return (
            <TSDInfoCard
              key={index}
              ipfsUrl={tsd.ipfsUrl}
              userName={tsd.userName}
              proofName={tsd.proofName}
            />
          );
        })}
        </div>
      </div>
    </>
  );
};

export default AllTSDs;
