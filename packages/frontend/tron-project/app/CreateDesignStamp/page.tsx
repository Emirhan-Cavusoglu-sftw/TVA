"use client";
import React, { useEffect, useState } from "react";
import { uploadFileToIPFS } from "../utils/pinata";
import MyDocument from "../components/pdfviewer.jsx";
// import dynamic from "next/dynamic";
import { pdf } from "@react-pdf/renderer";

import {
  bundlerClient,
  entryPointContract,
  factoryContract,
  getCreateTSD,
  getGasPrice,
} from "../utils/helper";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { Hex } from "viem";
import Image from "next/image";
import dynamic from "next/dynamic";

const TronWeb = require("tronweb");

const tronWeb = new TronWeb({
  fullHost: "https://nile.trongrid.io/",
  headers: {},
});

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

  // const contract = tronWeb.contract(tsdFactoryABI, tsdFactoryAddress);;

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

      // Display success message

      setMessage("PDF uploaded to Pinata successfully!");
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error creating and uploading PDF. Please try again.");
    } finally {
      setIsLoading(false);
      setAttestCompleted(true);

      // window.location.reload();
    }
  };

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
      <div className="flex justify-center items-center text-center">
        <Image
          src={"/sc.png"}
          alt="tron"
          width={1400}
          height={2000}
          className="flex justify-center items-center "
        />
        <form
          className="absolute flex flex-col justify-center items-center text-center w-[550px] h-[750px] bg-transparent   space-y-4"
          onSubmit={handleSubmit}
        >
          <label htmlFor="file" className="cursor-pointer">
            <div className="flex w-[550px] h-[300px] flex-col border-2 border-black space-y-5 justify-center rounded-3xl">
              <div className="flex flex-wrap justify-center">
                {previews.map((preview, index) => (
                  <div
                    key={index}
                    className="w-1/2 h-80 flex items-center justify-center"
                  >
                    <img
                      src={preview}
                      alt={`Preview-${index}`}
                      className="w-[600px] h-64"
                    />
                  </div>
                ))}
              </div>
              {previews.length === 0 && (
                <>
                  <h1 className="font-bold  ">Upload Your Proof</h1>
                  <h1 className="font-bold font-alkatra">
                    Drag and Drop or Choose your Image(s)
                  </h1>
                  <h1 className="font-bold font-alkatra">(Max size 2GB)</h1>
                </>
              )}
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
              className="block text-black font-bold font-alkatra text-xl"
              htmlFor="name"
            >
              Proof Name
            </label>
            <input
              className="shadow appearance-none w-96 h-12 rounded-2xl border-2 border-black bg-transparent leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder=""
              value={proofName}
              onChange={handleNameChange}
            />

            <label
              className="block text-black font-bold text-xl font-alkatra "
              htmlFor="description"
            >
              Proof Description
            </label>
            <textarea
              className="shadow appearance-none rounded-2xl w-full h-44 border-2 border-black bg-transparent leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              value={proofDescription}
              onChange={handleDescriptionChange}
            ></textarea>
            <button
              className="h-10 w-40 bg-amber-400 rounded-lg text-center border-2 border-black font-bold cursor-pointer font-alkatra"
              disabled={!enableButton || isLoading} // Disable the button if the form is being submitted
              type="submit"
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(CreateYourDesignStamp), {
  ssr: false,
});
