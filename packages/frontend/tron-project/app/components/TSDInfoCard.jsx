import React from "react";
import Image from "next/image";
// import { GetIpfsUrlFromPinata } from "../Utils/util";
import Link from "next/link";

const TSDInfoCard = ({ tsdAddress,ipfsUrl,userName, proofName }) => {
  // const data = GetIpfsUrlFromPinata(ipfsUrl);

  return (
    <div className="flex flex-col justify-center text-center items-center mt-12 ">
      {/* <div className="flex flex-row bg-amber-200 h-[50px] w-full rounded-2xl ml-12 justify-center items-center text-center mr-6">
        <h1 className="font-bold text-xl">Username: {userName}</h1>
      </div> */}
      <div className="flex flex-row bg-amber-400 bg-opacity-80 h-[50px] w-full rounded-2xl ml-12 justify-center items-center text-center mr-6 mt-4">
        <h1 className="font-bold text-xl">Proofname: {proofName}</h1>
      </div>
      <div className="flex flex-row bg-amber-400 bg-opacity-80 h-[50px] w-full rounded-2xl ml-12 justify-center items-center text-center mr-6 mt-4">
      <Link className="font-bold" href={`https://sepolia.scrollscan.com/address/${tsdAddress}`} target="_blank">Proof: {tsdAddress}</Link>
      </div>
      <Image
        src={"/pixelScrolll.png"}
        alt="Scroll"
        className="z-0"
        height={200}
        width={250}
      />
      {ipfsUrl && (
        <Link href={ipfsUrl} download target="_blank">
          <button className="flex justify-center  h-[3.5rem] w-52 rounded-xl bg-amber-400 bg-opacity-80 text-black text-center items-center font-bold border border-black">
            Download PDF from IPFS
          </button>
        </Link>
      )}
    </div>
  );
};

export default TSDInfoCard;
