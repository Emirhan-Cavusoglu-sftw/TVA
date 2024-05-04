"use client";
//@ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import { WavyBackground } from "./components/wavy-background";
import Image from "next/image";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { testABI, testAddress } from "./utils/addresses.js";
import {
  bundlerClient,
  calculateSenderAddress,
  entryPointContract,
  factory,
  factoryContract,
  factoryData,
  getFactoryData,
  getGasPrice,
  getNonce,
  publicClient,
  walletClient,
} from "./utils/helper";
import { ENTRYPOINT_ADDRESS_V07 } from "permissionless";
import {
  accountControlABI,
  accountControlAddress,
  accountFactoryABI,
  AF_ADDRESS,
  entryPointABI,
} from "./utils/constants";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import {
  DynamicContextProvider,
  useDynamicContext,
} from "@dynamic-labs/sdk-react-core";
import { Hex, parseEther } from "viem";
import { scrollSepolia } from "wagmi/chains";
import { getAccount, writeContract, readContract } from "wagmi/actions";
import { config } from "./utils/config";

const TronWeb = require("tronweb");

const tronWeb = new TronWeb({
  fullHost: "https://nile.trongrid.io/",
  headers: {},
});

export default function Home() {
  const { user, primaryWallet } = useDynamicContext();
  const [result, setresult] = useState();
  const [hasAccount, setHasAccount] = useState<boolean>();
  const [tronExist, setTronExist] = useState<boolean>();
  const [isAccountChecked, setIsAccountChecked] = useState<boolean>();
  const [accountControlContract, setAccountControlContract] = useState();
  const [testContract, setTestContract] = useState();
  const [hasFund, setHasFund] = useState<boolean>();
 
 

  useEffect(() => {
    const fetchAccountAddress = async () => {
      const tronWeb = (window as any).tronWeb;
      if (tronExist) {
        // tronWeb.setAddress(tronAddress);
      }
      setTestContract(tronWeb.contract(testABI, testAddress));
      setAccountControlContract(
        tronWeb.contract(accountControlABI, accountControlAddress)
      );
      const tronAddress = tronWeb.defaultAddress.base58;
      const contract = tronWeb.contract(
        accountControlABI,
        accountControlAddress
      );
      let result = await contract.isAccountChecked(tronAddress).call();
      setIsAccountChecked(result);
    };
    fetchAccountAddress();
  }, []);

  useEffect(() => {
    async function getContract() {
      if (accountControlContract) {
        let result = await (accountControlContract as any)
          .isAccountChecked("TUwGQNag8QCWWWaPbbRuLs1Zsne1Ro7icv")
          .call();
      }
    }
    getContract();
  }, [accountControlContract]);

  async function consoleContract() {
    console.log(accountControlContract);

    console.log(testContract);
  }

  useEffect(() => {
    const fetchAccountAddress = async () => {
      const address = primaryWallet?.address;

      if (address) {
        const userHasAccount = await factoryContract.read.hasAccount([address]);
        const accountAddress = await factoryContract.read.ownerToAccount([
          address,
        ]);
        const userHasFund = await entryPointContract.read.balanceOf([
          accountAddress,
        ]);

        setHasAccount(!!userHasAccount as boolean);
        setHasFund(!!userHasFund as boolean);
      }
    };

    fetchAccountAddress();
  }, [primaryWallet]);
  const consoleCheck = async () => {
    console.log(isAccountChecked);
  };
  const createControlAccount = async () => {
    if(typeof window === 'undefined'){

      const tronWeb = (window as any).tronWeb;
    }
    
    const address = tronWeb.defaultAddress.base58;
    const metamastAddress = primaryWallet?.address;
    const contract = tronWeb.contract(accountControlABI, accountControlAddress);
    let result = await contract.createAccount(address, metamastAddress).send({
      shouldPollResponse: true,
    });
    console.log(result);
  };
  const setCheck = async () => {
    const address = tronWeb.defaultAddress.base58;
    const metamastAddress = primaryWallet?.address;
    const contract = tronWeb.contract(accountControlABI, accountControlAddress);
    let result = await contract.isAccountChecked(address).call();
    setIsAccountChecked(result);
  };

  const consoleHasFund = async () => {
    console.log(hasFund);
  };
  const consoleAccount = async () => {
    const account = await readContract(config, {
      address: AF_ADDRESS,
      abi: accountFactoryABI,
      functionName: "ownerToAccount",
      args: [primaryWallet?.address],
    });
    console.log(account);
  };

  const getSenderAddress = async () => {
    const factoryData = await getFactoryData(
      primaryWallet?.address,
      user?.alias
    );
    console.log("Sender Address: ", await calculateSenderAddress(factoryData));
  };

  const fundAccount = async () => {
    const factoryData = await getFactoryData(
      primaryWallet?.address,
      user?.alias
    );
    const senderAddress = await calculateSenderAddress(factoryData);
    const { request } = await publicClient.simulateContract({
      account: primaryWallet?.address,
      address: ENTRYPOINT_ADDRESS_V07,
      abi: entryPointABI,
      functionName: "depositTo",
      args: [senderAddress],
      value: parseEther("0.02"),
    });
    const fund = await walletClient.writeContract(request);
    console.log(fund);
  };

  const consoleNonce = async () => {
    const factoryData = await getFactoryData(
      primaryWallet?.address,
      user?.alias
    );
    const senderAddress = await calculateSenderAddress(factoryData);
    const nonce = await getNonce(senderAddress);
    console.log(nonce);
  };

  const createAccount = async () => {
    let gasPrice = await getGasPrice();
    const factoryData = await getFactoryData(
      primaryWallet?.address,
      user?.alias
    );
    const senderAddress = await calculateSenderAddress(factoryData);
    const nonce = await getNonce(senderAddress);

    const userOperationHash = await bundlerClient.sendUserOperation({
      userOperation: {
        sender: senderAddress,
        nonce: BigInt(nonce),
        factory: factory,
        factoryData: factoryData,
        callData: "0x" as Hex,
        maxFeePerGas: BigInt(gasPrice.fast.maxPriorityFeePerGas),
        maxPriorityFeePerGas: BigInt(gasPrice.fast.maxPriorityFeePerGas),
        paymasterVerificationGasLimit: BigInt(1000000),
        signature: "0x" as Hex,
        callGasLimit: BigInt(1_000_000),
        verificationGasLimit: BigInt(1_000_000),
        preVerificationGas: BigInt(1_000_000),
      },
    });

    console.log("Received User Operation hash:" + userOperationHash);

    console.log("Querying for receipts...");
    const receipt = await bundlerClient.waitForUserOperationReceipt({
      hash: userOperationHash,
    });

    const txHash = receipt.receipt.transactionHash;

    console.log(`UserOperation included: ${txHash}`);

    createControlAccount();
  };

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: false,
    threshold: 0.05,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: false,
    threshold: 0.05,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: false,
    threshold: 0.05,
  });

  const mainControls1 = useAnimation();
  const mainControls2 = useAnimation();
  const mainControls3 = useAnimation();

  useEffect(() => {
    if (inView1) {
      mainControls1.start("visible");
    } else {
      mainControls1.start("hidden");
    }
  }, [mainControls1, inView1]);

  useEffect(() => {
    if (inView2) {
      mainControls2.start("visible");
    } else {
      mainControls2.start("hidden");
    }
  }, [mainControls2, inView2]);

  useEffect(() => {
    if (inView3) {
      mainControls3.start("visible");
    } else {
      mainControls3.start("hidden");
    }
  }, [mainControls3, inView3]);

  return (
    <>
      <WavyBackground className="pb-40">
        <motion.p
          className="text-2xl md:text-4xl lg:text-7xl text-black font-bold inter-var text-center mt-12"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
        >
          TimeWeave
        </motion.p>
        <motion.p
          className="text-base md:text-lg mt-4 text-black font-normal inter-var text-center"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
        >
          TimeWeave: Securing unregistered product designs and enhancing user
          experience with decentralized wallets.
        </motion.p>

        {!hasAccount && (
          <div className=" h-8 flex flex-row space-x-6 justify-center items-center text-center mt-4">
            <button
              className="flex justify-center mt-6 h-[3.5rem] w-64  rounded-xl bg-white bg-opacity-80 text-black text-center items-center font-bold"
              onClick={() => createAccount()}
            >
              Create Your Smart Account
            </button>

            <button
              className="flex justify-center mt-6 h-[3.5rem] w-64  rounded-xl bg-white bg-opacity-80 text-black text-center items-center font-bold"
              onClick={() => fundAccount()}
            >
              Fund Your Smart Account
            </button>
          </div>
        )}

        <div className="flex mt-[600px] ">
          <div className="flex flex-col space-y-64">
            <motion.div
              className="flex flex-row space-x-80"
              ref={ref1}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls1}
              transition={{ duration: 1.5, delay: 0.1, ease: "easeInOut" }}
            >
              <Image
                className="rounded-3xl"
                alt="Ethereum"
                src="/tron1.png"
                height={300}
                width={400}
              />
              <p className="w-[450px] text-xl font-normal text-center pt-4 flex flex-col ">
                <span className="font-bold mb-4">
                  TimeWeave Ensures Security and Legal Validity for Unregistered
                  Product Designs
                </span>
                TimeWeave is a groundbreaking platform revolutionizing the
                protection of unregistered product designs. Utilizing Solidity
                for robust backend functionality, WitnessBase ensures the
                integrity of design data, transforming it into admissible
                evidence in legal contexts. With a focus on user experience,
                WitnessBase seamlessly integrates decentralized wallet features,
                providing users with a secure and intuitive interface for
                safeguarding their valuable design assets.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-row space-x-80"
              ref={ref2}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls2}
              transition={{ duration: 1.5, delay: 0.1, ease: "easeInOut" }}
            >
              <p className="w-[450px] text-xl font-normal text-center pt-12 flex flex-col">
                <span className="font-bold mb-4">
                  TimeWeave&apos;s Time Stamp Documents Simplify Registration
                  for Unregistered Product Designs
                </span>
                Time Stamp Documents (TSDs) on the platform allow users to input
                necessary information for registration, securing unregistered
                product designs while providing a seamless user experience with
                decentralized wallets.
              </p>
              <Image
                className="rounded-3xl"
                alt="Ethereum"
                src="/tron3.png"
                height={300}
                width={400}
              />
            </motion.div>
            <motion.div
              className="flex flex-row space-x-80"
              ref={ref3}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls3}
              transition={{ duration: 1.5, delay: 0.1, ease: "easeInOut" }}
            >
              <Image
                className="rounded-3xl"
                alt="Ethereum"
                src="/tron5.png"
                height={300}
                width={400}
              />
              <p className="w-[450px] text-xl font-normal text-center pt-12 flex flex-col">
                <span className="font-bold mb-4">
                  Protecting Unregistered Product Designs
                </span>
                TimeWeave incorporates Account Abstraction (AA), a secure
                mechanism for storing Time Stamp Documents (TSDs) within users’
                wallets. This feature empowers users to download sample PDFs and
                seamlessly input essential registration details, ensuring the
                protection of unregistered product designs on the platform.
              </p>
            </motion.div>
          </div>
        </div>
      </WavyBackground>
      {/* 
      <button
        className="flex justify-center mt-6 h-[3.5rem] w-64  rounded-xl bg-white bg-opacity-80 text-black text-center items-center font-bold border border-black border-l-4 border-b-4"
        onClick={() => consoleAddress()}
      >
        Console Address
      </button>
      <button
        className="flex justify-center mt-6 h-[3.5rem] w-64  rounded-xl bg-white bg-opacity-80 text-black text-center items-center font-bold border border-black border-l-4 border-b-4"
        onClick={() => fundAccount()}
      >
        Console Has Account
      </button>

      <button
        className="flex justify-center mt-6 h-[3.5rem] w-64  rounded-xl bg-white bg-opacity-80 text-black text-center items-center font-bold border border-black border-l-4 border-b-4"
        onClick={() => consoleContract()}
      >
        Console Contract
      </button>
      <button
        className="flex justify-center mt-6 h-[3.5rem] w-64  rounded-xl bg-white bg-opacity-80 text-black text-center items-center font-bold border border-black border-l-4 border-b-4"
        onClick={() => getSenderAddress()}
      >
        Console Contract
      </button>
      <button
        className="flex justify-center mt-6 h-[3.5rem] w-64  rounded-xl bg-white bg-opacity-80 text-black text-center items-center font-bold border border-black border-l-4 border-b-4"
        onClick={() => consoleNonce()}
      >
        Console Nonce
      </button>
      <button
        className="flex justify-center mt-6 h-[3.5rem] w-64  rounded-xl bg-white bg-opacity-80 text-black text-center items-center font-bold border border-black border-l-4 border-b-4"
        onClick={() => consoleAccount()}
      >
        Console Account
      </button>
      <button
        className="flex justify-center mt-6 h-[3.5rem] w-64  rounded-xl bg-white bg-opacity-80 text-black text-center items-center font-bold border border-black border-l-4 border-b-4"
        onClick={() => consoleHasFund()}
      >
        Console HasFund
      </button>
      
      <button
        className="flex justify-center mt-6 h-[3.5rem] w-64  rounded-xl bg-white bg-opacity-80 text-black text-center items-center font-bold border border-black border-l-4 border-b-4"
        onClick={() => store(10)}
      >
        Store
      </button>
      
      <button
        className="flex justify-center mt-6 h-[3.5rem] w-64  rounded-xl bg-white bg-opacity-80 text-black text-center items-center font-bold border border-black border-l-4 border-b-4"
        onClick={() => storeSend()}
      >
        storeSend
      </button>
      <button
        className="flex justify-center mt-6 h-[3.5rem] w-64  rounded-xl bg-white bg-opacity-80 text-black text-center items-center font-bold border border-black border-l-4 border-b-4"
        onClick={() => createAccountt()}
      >
        createAccount
      </button> */}
    </>
  );
}
