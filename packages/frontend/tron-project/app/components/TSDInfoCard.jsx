import React from "react";
import Image from "next/image";
// import { GetIpfsUrlFromPinata } from "../Utils/util";
import Link from "next/link";

const TSDInfoCard = ({ ipfsUrl,userName, proofName }) => {
  // const data = GetIpfsUrlFromPinata(ipfsUrl);

  return (
    <div className="flex flex-col justify-center text-center items-center mt-12 ">
      <div className="flex flex-row bg-orange-400 h-[50px] w-full rounded-2xl ml-12 justify-center items-center text-center mr-6">
        <h1 className="font-bold text-xl">Username: {userName}</h1>
      </div>
      <div className="flex flex-row bg-orange-400 h-[50px] w-full rounded-2xl ml-12 justify-center items-center text-center mr-6 mt-4">
        <h1 className="font-bold text-xl">Proofname: {proofName}</h1>
      </div>
      <Image
        src={"/pixelScrolll.png"}
        alt="Scroll"
        className="z-0"
        height={400}
        width={450}
      />
      {ipfsUrl && (
        <Link href={ipfsUrl} download target="_blank">
          <button className="flex justify-center  h-[3.5rem] w-52 rounded-xl bg-gray-200 bg-opacity-80 text-black text-center items-center font-bold border border-black border-l-4 border-b-4">
            Download PDF from IPFS
          </button>
        </Link>
      )}
    </div>
  );
};

export default TSDInfoCard;
