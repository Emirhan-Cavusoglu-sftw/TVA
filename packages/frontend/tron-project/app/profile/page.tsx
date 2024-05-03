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
import { entryPointABI } from "../utils/constants";
import { ENTRYPOINT_ADDRESS_V07 } from "permissionless";
import { get } from "http";

const Profile = () => {
  const { user, primaryWallet } = useDynamicContext();
  const [accountAddress, setaccountAddress] = useState<Hex>();
  const [TSDcards, setTSDcards] = useState([]);
  const [rendered,setRendered] = useState(false);

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
    // const fund = await entryPointContract.write.depositTo([accountAddress],parseEther("0.01"));
    // console.log(fund);
    const { request } = await publicClient.simulateContract({
      account: primaryWallet?.address,
      address: ENTRYPOINT_ADDRESS_V07,
      abi: entryPointABI,
      functionName: "depositTo",
      args: [accountAddress],
      value: parseEther("0.2"),
    });
    const fund = await walletClient.writeContract(request);
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
        const proofName = await tsdContract.read.projectName();
        const userName = await tsdContract.read.userName();
        const ipfsUrl = await tsdContract.read.dataURI();
        newTSDcards.push({ ...tsd, userName, ipfsUrl, proofName });
      }
      
      const tsdd = await accountContract.read.tsds([BigInt(tsdCount)-BigInt(1)]);
      const tsdContract = await getTSDContract(tsdd);
      let ipfsUrl = await tsdContract.read.dataURI();
      console.log(ipfsUrl);
      console.log(tsdCount);
      setTSDcards(newTSDcards);
      console.log(newTSDcards);
    
  };

  
  
  
  

  return (
    <main className="flex flex-col space-y-48 ">
      <div className="flex flex-col space-y-4 mt-12">
        <div className="flex flex-row bg-orange-400 h-[100px] w-[880px] ml-12 justify-center items-center text-center rounded-2xl">
          <h1 className="font-bold text-2xl">
            Your Smart Account:{" "}
            {accountAddress ? accountAddress : "Account Address"}
          </h1>
          <svg
            width="60px"
            height="60px"
            viewBox="0 -0.5 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.676 14.248C17.676 15.8651 16.3651 17.176 14.748 17.176H7.428C5.81091 17.176 4.5 15.8651 4.5 14.248V6.928C4.5 5.31091 5.81091 4 7.428 4H14.748C16.3651 4 17.676 5.31091 17.676 6.928V14.248Z"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.252 20H17.572C19.1891 20 20.5 18.689 20.5 17.072V9.75195"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        {/* <div className="flex flex-row bg-orange-400 h-[50px] w-[230px] rounded-2xl ml-12 justify-center items-center text-center">
          <button className="font-bold text-xl" onClick={() => fundAccount()}>
            fund your account
          </button>
        </div>
        <div className="flex flex-row bg-orange-400 h-[50px] w-[230px] rounded-2xl ml-12 justify-center items-center text-center">
          <button
            className="font-bold text-xl"
            onClick={() => consoleAccount()}
          >
            fund your account
          </button>
        </div> */}
      </div>

      <div className="relative mt-24 ">
        <Image
          src={"/Group4 1.png"}
          alt="Timeline"
          height={400}
          className="w-full "
          width={2000}
        />

        <div className="absolute" style={{ top: "-30%", left: "20%" }}>
          <TSDCard />
        </div>
        <div className="absolute" style={{ top: "-10%", right: "1%" }}>
          <TSDCard />
        </div>
        <div className="absolute" style={{ top: "-10%", right: "40%" }}>
          <TSDCard />
        </div>
        <div className="absolute" style={{ bottom: "-15%", left: "28%" }}>
          <TSDCard />
        </div>
        <div className="absolute" style={{ bottom: "-15%", right: "15%" }}>
          <TSDCard />
        </div>
        <div className="absolute" style={{ bottom: "-20%", right: "35%" }}>
          <TSDCard />
        </div>
      </div>

      <div className="space-y-24">
        <div className="flex justify-center items-center"><button
          className="flex justify-center  h-[3.5rem] w-64 rounded-xl bg-gray-200 bg-opacity-80 text-black text-center items-center font-bold border border-black border-l-4 border-b-4"
          onClick={() => getTSD()}
        >
          Show Your TSDs
        </button></div>
        {/* <button
          className="flex justify-center  h-[3.5rem] w-52 rounded-xl bg-gray-200 bg-opacity-80 text-black text-center items-center font-bold border border-black border-l-4 border-b-4"
          onClick={() => getAccountAddress()}
        >
          BAS
        </button> */}

        <div className="flex justify-center flex-col items-center space-y-5 mr-12 ">
          <h1 className="font-bold text-4xl ml-12 mb-14">Registrations</h1>
          <div className="flex justify-center flex-wrap space-x-10 ml-12 pb-10">
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
      </div>
    </main>
  );
};

export default Profile;
