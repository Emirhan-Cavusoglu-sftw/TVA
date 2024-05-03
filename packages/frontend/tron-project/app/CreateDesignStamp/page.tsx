
"use client";
import React, { useEffect, useState } from "react";
import { uploadFileToIPFS } from "../Utils/pinata";
import MyDocument from "../components/pdfviewer.jsx";
// import dynamic from "next/dynamic";
import { pdf } from "@react-pdf/renderer";
import Link from "next/link";

import { testAddress, tsdFactoryAddress } from "../Utils/addresses.js";
import { bundlerClient, entryPointContract, factoryContract, getCreateTSD, getGasPrice } from "../Utils/helper";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { Hex } from "viem";

const TronWeb = require("tronweb");

const tronWeb = new TronWeb({
  fullHost: "https://nile.trongrid.io/",
  headers: {},
});
// import { accountABI } from "../utils/constants";
// import { encodeFunctionData, Hex } from "viem";
// import {
//   accountContract,
//   attestTSD,
//   bundlerClient,
//   entryPointContract,
//   factory,
//   factoryContract,
//   getAccountContract,
//   getCreateTSD,
//   getGasPrice,
//   getTSDContract,
// } from "../utils/helper";
// import { create } from "domain";
// import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

// const PDFDownloadLink = dynamic(
//   () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
//   { ssr: false }
// );

const sign = async (transaction: { transaction: any }) => {
  try {
    // @ts-ignore
    const tronweb: any = window.tronWeb;
    const signedTransaction = await tronweb.trx.sign(transaction.transaction);
    return signedTransaction;
  } catch (error) {
    console.log(error, "signerr");
    throw new Error(String(error));
  }
};

const sendRawTransaction = async (signedTransaction: any) => {
  try {
    // @ts-ignore
    const tronweb = window.tronWeb;
    const result = await tronweb.trx.sendRawTransaction(signedTransaction);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
const CreateYourDesignStamp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [attestTxHash, setAttestTxHash] = useState(null);
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [fileURLs, setFileURLs] = useState([]);
  const [enableButton, setEnableButton] = useState(false);
  const [message, setMessage] = useState("");
  const [proofName, setProofName] = useState("");
  const [proofDescription, setProofDescription] = useState("");
  const [fileDataUrls, setFileDataUrls] = useState([]);
  const [ipfsUrl, setIpfsUrl] = useState(null);
  const [attestCompleted, setAttestCompleted] = useState(false);
  const { user, primaryWallet } = useDynamicContext();
  const [accountAddress, setaccountAddress] = useState<Hex>();
  const [TSDcards, setTSDcards] = useState([]);
  const [result, setresult] = useState();
  const [hasAccount, setHasAccount] = useState<boolean>();

  // const contract = tronWeb.contract(tsdFactoryABI, tsdFactoryAddress);
  // @ts-ignore
  useEffect(() => {
    if (window.tronWeb) {
      console.log(window.tronWeb.defaultAddress.base58);
      const tronWeb = window.tronWeb;
      tronWeb.setAddress(window.tronWeb.defaultAddress.base58);
    } else {
      console.log("no tronweb");
    }
  }, []);

  useEffect(() => {
    const fetchAccountAddress = async () => {
      const address = primaryWallet?.address;
      console.log(address);
      if (address) {
        const userAccountAddress = await factoryContract.read.ownerToAccount([
          address,
        ]);
        setaccountAddress(userAccountAddress as Hex);
      }
    };

    fetchAccountAddress();
  }, [primaryWallet]);

  // CONTRACT CALLS
  // useEffect(() => {
  //   async function getContract() {
  //     let result = await contract.retrieve().call();
  //     console.log(result);
  //   }
  //   getContract();
  // }, []);

  
  // @ts-ignore
  async function createTSD(proofName, proofDescription, ipfsUrl) {
    try {
      const result = await tronWeb.transactionBuilder.triggerSmartContract(
        tsdFactoryAddress,
        "createTSD(string,string,string,string)",
        { _isConstant: false },
        [
          {
            type: "string",
            value: "EC",
          },
          {
            type: "string",
            value: proofName,
          },
          {
            type: "string",
            value: proofDescription,
          },
          {
            type: "string",
            value: ipfsUrl,
          },
        ]
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

  const handleFileChange = async (e) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      const newFiles = Array.from(selectedFiles);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);

      const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
      setPreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);

      const dataUrls = await Promise.all(newFiles.map(convertFileToDataUrl));
      setFileDataUrls((prevDataUrls) => [...prevDataUrls, ...dataUrls]);

      setIsFileUploaded(true);
      setMessage(
        "Image(s) ready for PDF creation. You can now click on Create NFT."
      );
      setEnableButton(true);
    }
  };

  const convertFileToDataUrl = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleNameChange = (e) => {
    setProofName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setProofDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      setMessage("Creating PDF... Please wait.");

      // Create PDF document
      const pdfDocument = (
        <MyDocument
          proofName={proofName}
          proofDescription={proofDescription}
          images={fileDataUrls}
        />
      );
      console.log("PDF Document:", pdfDocument);
      // Convert PDF document to blob
      const pdfBlob = await pdf(pdfDocument).toBlob();

      // Upload PDF to Pinata
      const ipfsUrl = await uploadPDFToPinata(pdfBlob);

      

      let nonce = await entryPointContract.read.getNonce([accountAddress, 0]);

      const createTSD = await getCreateTSD(
        proofName,
        proofDescription,
        ipfsUrl
      );

      let gasPrice = await getGasPrice();

      const userOperationHash = await bundlerClient.sendUserOperation({
        userOperation: {
          sender: accountAddress,
          nonce: BigInt(nonce),
          callData: createTSD,
          maxFeePerGas: BigInt(gasPrice.fast.maxPriorityFeePerGas),
          maxPriorityFeePerGas: BigInt(gasPrice.fast.maxPriorityFeePerGas),
          paymasterVerificationGasLimit: BigInt(1000000),
          signature: "0x" as Hex,
          callGasLimit: BigInt(2_000_000),
          verificationGasLimit: BigInt(2_000_000),
          preVerificationGas: BigInt(2_000_000),
        },
      });

      console.log("Received User Operation hash:" + userOperationHash);

      console.log("Querying for receipts...");
      const receipt = await bundlerClient.waitForUserOperationReceipt({
        hash: userOperationHash,
      });

      const txHash = receipt.receipt.transactionHash;

      console.log(`UserOperation included: ${txHash}`);

      // Display success message

      setMessage("PDF uploaded to Pinata successfully!");
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error creating and uploading PDF. Please try again.");
    } finally {
      setIsLoading(false);
      setAttestCompleted(true);
    }
  };
  // const getTSD = async () => {
  //   const tsdContract = await getTSDContract(
  //     "0xA8062732D4806e512b4Fba40fd8928C72b3Aa3A4"
  //   );
  //   const tsd = await accountContract.read.tsds([2]);
  //   console.log(tsd);
  //   const name = await tsdContract.read.projectName();
  //   const url = await tsdContract.read.dataURI();

  //   console.log(name);
  //   // console.log({ipfsUrl})
  //   console.log(url);
  // };

  const uploadPDFToPinata = async (pdfBlob): Promise<string | undefined> => {
    try {
      const pdfUploadResponse = await uploadFileToIPFS(pdfBlob);
      console.log(
        "PDF uploaded to Pinata:",
        (pdfUploadResponse as any).pinataURL
      );
      setIpfsUrl((pdfUploadResponse as any).pinataURL);
      return (pdfUploadResponse as any).pinataURL;
    } catch (error) {
      console.error("Error uploading PDF to Pinata:", error);
      // Hata durumunda uygun bir mesaj gösterebilirsiniz.
    }
  };

  return (
    <>
      <div className=" flex justify-center items-center text-center mt-24">
        <form
          className="flex flex-col justify-center items-center text-center w-[1000px] h-[750px] bg-blue-300 rounded-3xl space-y-4"
          onSubmit={handleSubmit}
        >
          <label htmlFor="file" className="cursor-pointer">
            <div className="flex w-[700px] h-[300px] flex-col border-2 border-black space-y-5 justify-center rounded-3xl">
              {previews.map((preview, index) => (
                <div
                  key={index}
                  className="w-full h-80 flex items-center justify-center"
                >
                  <img
                    src={preview}
                    alt={`Preview-${index}`}
                    className="w-[300px] h-80"
                  />
                </div>
              ))}
              <h1 className="font-bold">Upload Your Proof</h1>
              <h1 className="font-bold">
                Drag and Drop or Choose your Image(s)
              </h1>
              <h1 className="font-bold">(Max size 2GB)</h1>
            </div>
          </label>
          <input
            id="file"
            type="file"
            accept="image/*" // Accept only images
            className="hidden"
            onChange={handleFileChange}
            multiple // Allow multiple file selection
          />
          <div className="flex flex-col justify-center items-center space-y-4 w-96">
            <label
              className="block text-black font-bold  text-xl"
              htmlFor="name"
            >
              Proof Name
            </label>
            <input
              className="shadow appearance-none w-96 h-12 rounded-2xl border-2 border-black bg-gray-200 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder=""
              value={proofName}
              onChange={handleNameChange}
            />

            <label
              className="block text-black font-bold text-xl "
              htmlFor="description"
            >
              Proof Description
            </label>
            <textarea
              className="shadow appearance-none  rounded-2xl w-full h-44 border-2 border-black bg-gray-200 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              value={proofDescription}
              onChange={handleDescriptionChange}
            ></textarea>
            <button
              className="h-10 w-40 bg-gray-200 rounded-lg text-center border-2 border-black font-bold"
              disabled={!enableButton || isLoading} // Disable the button if the form is being submitted
              type="submit"
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>

        <button
          className="h-10 w-40 bg-gray-200 rounded-lg text-center border-2 border-black font-bold"
          onClick={() => retrieve()}
        ></button>
      </div>
    </>
  );
};

export default CreateYourDesignStamp;
