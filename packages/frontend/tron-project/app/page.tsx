"use client";
import React, { useEffect, useRef, useState } from "react";
import { WavyBackground } from "./components/wavy-background";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import Provider from "./components/dy-provider";
// import {
//   DynamicContextProvider,
//   DynamicWidget,
//   useDynamicContext,
// } from "@dynamic-labs/sdk-react-core";
// import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
// import {} from "viem/actions";
// import {
//   getGasPrice,
//   getFactoryData,
//   calculateSenderAddress,
//   bundlerClient,
//   factory,
//   factoryContract,
//   publicClient,
//   walletClient,
//   factoryData,
// } from "./utils/helper";
// import { Hex, parseEther } from "viem";
// import { ENTRYPOINT_ADDRESS_V07 } from "permissionless";
// import { entryPointABI } from "./utils/constants";
import { get } from "http";

export default function Home() {
  // const { user, primaryWallet } = useDynamicContext();
  const [hasAccount, setHasAccount] =  useState<boolean>();

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

  // useEffect(() => {
  //   const fetchAccountAddress = async () => {
  //     const address = primaryWallet?.address;
  //     console.log(address);
  //     if (address) {
  //       const userHasAccount = await factoryContract.read.hasAccount([address]);
  //       setHasAccount(userHasAccount as boolean);
  //     }
  //   };

  //   fetchAccountAddress();
  // }, [primaryWallet]);

  // const consoleHasAccount = async () => {
  //   console.log(hasAccount);
  // };

  // const getSenderAddress = async () => {
  //   const factoryData = await getFactoryData(
  //     primaryWallet?.address,
  //     user?.alias
  //   );
  //   console.log("Sender Address: ", await calculateSenderAddress(factoryData));
  // };

  // const fundAccount = async () => {
  //   // const fund = await entryPointContract.write.depositTo([accountAddress],parseEther("0.01"));
  //   // console.log(fund);
  //   const factoryData = await getFactoryData(
  //     primaryWallet?.address,
  //     user?.alias
  //   );
  //   const { request } = await publicClient.simulateContract({
  //     account: primaryWallet?.address,
  //     address: ENTRYPOINT_ADDRESS_V07,
  //     abi: entryPointABI,
  //     functionName: 'depositTo',
  //     args: [await calculateSenderAddress(factoryData)],
  //     value: parseEther("0.2"),
  //   })
  //   const fund =await walletClient.writeContract(request)
  //   console.log(fund)
  // }

  // const createAccount = async () => {
  //   let gasPrice = await getGasPrice();
  //   const factoryData = await getFactoryData(
  //     primaryWallet?.address,
  //     user?.alias
  //   );
  //   const senderAddress = await calculateSenderAddress(factoryData);

  //   const userOperationHash = await bundlerClient.sendUserOperation({
  //     userOperation: {
  //       sender: senderAddress,
  //       nonce: BigInt(0),
  //       factory: factory,
  //       factoryData: factoryData,
  //       callData: "0x" as Hex,
  //       maxFeePerGas: BigInt(gasPrice.fast.maxPriorityFeePerGas),
  //       maxPriorityFeePerGas: BigInt(gasPrice.fast.maxPriorityFeePerGas),
  //       paymasterVerificationGasLimit: BigInt(1000000),
  //       signature: "0x" as Hex,
  //       callGasLimit: BigInt(2_000_000),
  //       verificationGasLimit: BigInt(2_000_000),
  //       preVerificationGas: BigInt(2_000_000),
  //     },
  //   });

  //   console.log("Received User Operation hash:" + userOperationHash);

  //   console.log("Querying for receipts...");
  //   const receipt = await bundlerClient.waitForUserOperationReceipt({
  //     hash: userOperationHash,
  //   });

  //   const txHash = receipt.receipt.transactionHash;

  //   console.log(`UserOperation included: ${txHash}`);
  // };

  return (
    <>
      <WavyBackground className="pb-40">
        <motion.p
          className="text-2xl md:text-4xl lg:text-7xl text-black font-bold inter-var text-center mt-12"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
        >
          WitnessBase
        </motion.p>
        <motion.p
          className="text-base md:text-lg mt-4 text-black font-normal inter-var text-center"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
        >
          WitnessBase: Securing unregistered product designs and enhancing user
          experience with decentralized wallets.
        </motion.p>
         {/* {!hasAccount && (<div className=" h-8 flex flex-row space-x-6 justify-center items-center text-center mt-4">
          {primaryWallet?.address}
          <button
            className="flex justify-center mt-6 h-[3.5rem] w-64  rounded-xl bg-white bg-opacity-80 text-black text-center items-center font-bold border border-black border-l-4 border-b-4"
            onClick={() => createAccount()}
          >
            Create Your Smart Account
          </button>

          <button
            className="flex justify-center mt-6 h-[3.5rem] w-64  rounded-xl bg-white bg-opacity-80 text-black text-center items-center font-bold border border-black border-l-4 border-b-4"
            onClick={() => fundAccount()}
          >
            Fund Your Smart Account
          </button>
        </div>)} */}
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
                src="/metinImage1.jpg"
                height={300}
                width={400}
              />
              <p className="w-[450px] text-xl font-normal text-center pt-4 flex flex-col ">
                <span className="font-bold mb-4">
                  WitnessBase Ensures Security and Legal Validity for
                  Unregistered Product Designs
                </span>
                WitnessBase is a groundbreaking platform revolutionizing the
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
                  WitnessBase&apos;s Time Stamp Documents Simplify Registration
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
                src="/metinImage2.jpg"
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
                src="/metinImage4.jpg"
                height={300}
                width={400}
              />
              <p className="w-[450px] text-xl font-normal text-center pt-12 flex flex-col">
                <span className="font-bold mb-4">
                  Protecting Unregistered Product Designs
                </span>
                WitnessBase incorporates Account Abstraction (AA), a secure
                mechanism for storing Time Stamp Documents (TSDs) within users’
                wallets. This feature empowers users to download sample PDFs and
                seamlessly input essential registration details, ensuring the
                protection of unregistered product designs on the platform.
              </p>
            </motion.div>
          </div>
        </div>
      </WavyBackground>
    </>
  );
}