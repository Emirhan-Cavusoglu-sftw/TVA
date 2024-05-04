"use client";
import React, { use, useEffect, useState } from "react";
import TSDCard from "../Components/TSDCard";
import Image from "next/image";
import TSDInfoCard from "../Components/TSDInfoCard";
import {
  getTSDContract,
  factoryContract,
  entryPointContract,
  getAccountContract,
  publicClient,
  walletClient,
} from "../Utils/helper";
import motion from "framer-motion";
import {
  DynamicContextProvider,
  DynamicWidget,
  useDynamicContext,
} from "@dynamic-labs/sdk-react-core";
import { Hex, parseEther, parseUnits } from "viem";
import { accountABI, entryPointABI } from "../utils/constants";
import { ENTRYPOINT_ADDRESS_V07 } from "permissionless";
import { get } from "http";
import { Vortex } from "../components/vortex";
import { readContract } from "wagmi/actions";
import { config } from "../Utils/config";

const Profile = () => {
  const { user, primaryWallet } = useDynamicContext();
  const [accountAddress, setaccountAddress] = useState<Hex>();
  const [TSDcards, setTSDcards] = useState([]);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    const fetchAccountAddress = async () => {
      const address = primaryWallet?.address;

      if (address) {
        const userAccountAddress = await factoryContract.read.ownerToAccount([
          address,
        ]);
        setaccountAddress(userAccountAddress as Hex);
      }
    };
    fetchAccountAddress();
    console.log(rendered);
  }, [primaryWallet]);

  const getAccountAddress = async () => {
    // const userAccountAddress = await factoryContract.read.ownerToAccount([
    //   primaryWallet?.address,
    // ]);
    console.log(accountAddress);
  };
  const fundAccount = async () => {
    // let fund = await entryPointContract.write.depositTo([accountAddress],parseEther("0.01"));
    
    const { request } = await publicClient.simulateContract({
      account: primaryWallet?.address,
      address: ENTRYPOINT_ADDRESS_V07,
      abi: entryPointABI,
      functionName: "depositTo",
      args: [accountAddress],
      value: parseEther("0.02"),
    });
    fund = await walletClient.writeContract(request);
    console.log(fund);
  };
  const consoleAccount = async () => {
    console.log(account);
  };

  const getTSD = async () => {
    const address = primaryWallet?.address;

    const accountContract = await getAccountContract(accountAddress);

    const tsdCount = await accountContract.read.tsdCounter();

    const newTSDcards = [];
    for (let i = 0; i < tsdCount; i++) {
      const tsd = await accountContract.read.tsds([i]);
      const tsdContract = await getTSDContract(tsd);
      const tsdAddress = tsdContract.address;
      const proofName = await tsdContract.read.projectName();
      const userName = await tsdContract.read.userName();
      const ipfsUrl = await tsdContract.read.dataURI();
      newTSDcards.push({ ...tsd, tsdAddress,userName, ipfsUrl, proofName });
    }

    const tsdd = await accountContract.read.tsds([
      BigInt(tsdCount) - BigInt(1),
    ]);
    const tsdContract = await getTSDContract(tsdd);
    let ipfsUrl = await tsdContract.read.dataURI();
    console.log(ipfsUrl);
    console.log(tsdCount);
    setTSDcards(newTSDcards);
    console.log(newTSDcards);
  };

  const getTSDs = async () => {
    const accountContract = await getAccountContract(accountAddress);
    const tsds = await readContract(config,{
      abi:accountABI,
      address:accountContract.address,
      functionName:"getTsds",
    })
    console.log(tsds);
  }

  return (
    <main className="flex flex-col space-y-12  justify-center items-center ">
      <div className="w-[1300px] h-[100px] rounded-full  overflow-hidden flex justify-center items-center mt-8">
        <Vortex
          backgroundColor="gray-900"
          rangeY={800}
          particleCount={500}
          baseHue={120}
          className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
        >
          <div className="flex flex-row bg-transparent h-[100px] w-full ml-12 justify-center items-center text-center rounded-2xl">
            <h1 className="font-bold text-3xl text-white space-x-4">
              Your Smart Account:{" "}
              {accountAddress ? accountAddress : "Account Address"}
            </h1>
            <button className="flex justify-center  h-[3.5rem] w-64 rounded-xl bg-amber-400 bg-opacity-80 text-black text-center items-center font-bold border border-black" onClick={()=>fundAccount()}>Fund Your Account</button>
          </div>
        </Vortex>
      </div>

      <Image
        src={"/dal2.png"}
        alt="tron"
        width={1800}
        height={400}
        className="flex justify-center items-center "
      ></Image>

      <div className="space-y-24">
        <div className="flex justify-center items-center">
          <button
            className="flex justify-center  h-[3.5rem] w-64 rounded-xl bg-amber-400 bg-opacity-80 text-black text-center items-center font-bold border border-black"
            onClick={() => getTSD()}
          >
            Show Your TSDs
          </button>
          <button
            className="flex justify-center  h-[3.5rem] w-64 rounded-xl bg-amber-400 bg-opacity-80 text-black text-center items-center font-bold border border-black"
            onClick={() => getTSDs()}
          >
            getTsds
          </button>
        </div>
        {/* <button
          className="flex justify-center  h-[3.5rem] w-52 rounded-xl bg-gray-200 bg-opacity-80 text-black text-center items-center font-bold border border-black border-l-4 border-b-4"
          onClick={() => getAccountAddress()}
        >
          BAS
        </button> */}

        <div className="flex justify-center flex-col items-center space-y-5 mr-12 ">
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
        </div>
      </div>
    </main>
  );
};

export default Profile;
