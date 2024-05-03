"use client";
//@ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import { WavyBackground } from "./components/wavy-background";
import Image from "next/image";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { testABI, testAddress } from "./Utils/addresses.js";
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
} from "./Utils/helper";
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
import Main from "./Components/Main";
import { config } from "./Utils/config";

const TronWeb = require("tronweb");

const tronWeb = new TronWeb({
  fullHost: "https://nile.trongrid.io/",
  headers: {},
});
const tronExist = !!(window as any).tronWeb.defaultAddress.base58;
const tronAddress = (window as any).tronWeb.defaultAddress.base58;
const sign = async (transaction: { transaction: any }) => {
  try {
    const tronweb = window.tronWeb;
    const signedTransaction = await tronweb.trx.sign(transaction.transaction);
    return signedTransaction;
  } catch (error) {
    console.log(error, "signerr");
    throw new Error(String(error));
  }
};

const sendRawTransaction = async (signedTransaction: any) => {
  try {
    const tronweb = window.tronWeb;
    const result = await tronweb.trx.sendRawTransaction(signedTransaction);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
export default function Home() {
  const { user, primaryWallet } = useDynamicContext();
  const [result, setresult] = useState();
  const [hasAccount, setHasAccount] = useState<boolean>();
  const [accountControlContract, setAccountControlContract] = useState();
  const [testContract, setTestContract] = useState();
  const [hasFund, setHasFund] = useState<boolean>();
  // const contract = tronWeb.contract(testABI, testAddress);
  // const contractt = tronWeb.contract(accountControlABI, accountControlAddress);
  // tronWeb.setAddress((window as any).tronWeb.defaultAddress.base58);

  useEffect(() => {
    const fetchAccountAddress = async () => {
     const  tronWeb = (window as any).tronWeb;
      if (tronExist) {
        // tronWeb.setAddress(tronAddress);
      }
      setTestContract(tronWeb.contract(testABI, testAddress));
      setAccountControlContract(
        tronWeb.contract(accountControlABI, accountControlAddress)
      );
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
        const accountAddress = await factoryContract.read.ownerToAccount([address]);
        const userHasFund = await entryPointContract.read.balanceOf([accountAddress]);
        setHasAccount(!!userHasAccount as boolean);
        setHasFund(!!userHasFund as boolean);
      }
    };

    fetchAccountAddress();
  }, [primaryWallet]);
  const storeSend = async () => {
    const tronWeb= (window as any).tronWeb;
    const contract = tronWeb.contract(testABI, testAddress);
    let result = await contract.store(0).send({
    
    shouldPollResponse:true

  })
  console.log(result)
  }
  const createAccountt = async () => {
    const tronWeb= (window as any).tronWeb;
    const address = tronWeb.defaultAddress.base58;
    const metamastAddress = primaryWallet?.address;
    const contract = tronWeb.contract(accountControlABI, accountControlAddress);
    let result = await contract.createAccount(address,metamastAddress).send({
    
    shouldPollResponse:true

  })
  console.log(result)
  }
  
  
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
  
  async function store(i) {
    try {

      const result = await tronWeb.transactionBuilder.triggerSmartContract(
        testAddress,
        "store(uint256)",
        { _isConstant: false },
        [{ type: "uint256", value: i }]
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
  const fundAccount = async () => {
    // const fund = await entryPointContract.write.depositTo([accountAddress],parseEther("0.01"));
    // console.log(fund);
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

  const consoleAddress = async () => {
    async function getContract() {
      if (accountControlContract) {
        let result = await (accountControlContract as any)
          .isAccountChecked("TUwGQNag8QCWWWaPbbRuLs1Zsne1Ro7icv")
          .call();
        console.log(result);
      }
    }
    await getContract();

    console.log((window as any).tronWeb.defaultAddress.base58);
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

    createAccountt()
  };

  return (
    <>
      
      {!hasAccount && (
        <div className=" h-8 flex flex-row space-x-6 justify-center items-center text-center mt-4">
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
        </div>
      )}

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
      </button>
    </>
  );
}
