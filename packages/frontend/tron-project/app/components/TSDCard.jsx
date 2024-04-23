import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GetIpfsUrlFromPinata } from "../utils/util";

const NFTCard = () => {

  // const data = GetIpfsUrlFromPinata(ipfsUrl);
  return (
    <div className="flex flex-col justify-center items-center text-center relative">
      
        <Image
          src={"/pixelScrolll.png"}
          alt="Scroll"
          className="z-0"
          height={150}
          width={200}
        />
        <div className="absolute center">
          {/* <p className="text-bold ">Proof name:{data.proofname}</p> */}
        </div>
      
    </div>
  );
};

export default NFTCard;