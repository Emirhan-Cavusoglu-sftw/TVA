"use client";
import Image from "next/image";
import {
  DynamicContextProvider,
  DynamicWidget,
  useDynamicContext,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { useEffect, useState } from "react";
import {
  useUserWallets,
  getNetwork,
  getAuthToken,
} from "@dynamic-labs/sdk-react-core";
import React from "react";

export default function Provider() {
  const { primaryWallet } = useDynamicContext();
  const primaryWalletAddress = primaryWallet?.address;

  const { user } = useDynamicContext();
  const userwaletemail = user?.email;
  const userwaletalias = user?.alias;

  const { authToken } = useDynamicContext();
  const jwt = authToken;

  const connector = primaryWallet?.connector;
  //const signature = await signer.signMessage()

  return (
    <div>
      <h1>Merhaba, {userwaletalias},{primaryWalletAddress}</h1>
    </div>
  );
}