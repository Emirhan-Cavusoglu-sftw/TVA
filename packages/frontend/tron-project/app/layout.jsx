import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./Header";
import { WalletProvider } from "@tronweb3/tronwallet-adapter-react-hooks";

import {
  DynamicContextProvider,
  EthereumWalletConnectors,
} from "../lib/dynamic";
// import {
//   DynamicContextProvider,
//   DynamicWidget,
// } from '@dynamic-labs/sdk-react-core';

// import {
//   createConfig,
//   WagmiProvider,
//   useAccount,
// } from 'wagmi';

import { http } from "viem";

import { scrollSepolia } from "wagmi/chains";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Time Varience Authority",
  description: "For all time .",
};

// const evmNetworks = [
//   {
//     blockExplorerUrls: ["https://sepolia.scrollscan.com/"],
//     chainId: 534351,
//     chainName: "Scroll Sepolia Testnet",
//     iconUrls: ["https://app.dynamic.xyz/assets/networks/eth.svg"],
//     name: "Scroll Sepolia Testnet",
//     nativeCurrency: {
//       decimals: 18,
//       name: "ETH",
//       symbol: "ETH",
//     },
//     networkId: 1,

//     rpcUrls: ["https://sepolia-rpc.scroll.io/"],
//     vanityName: "Scroll Sepolia Testnet",
//   },
// ];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DynamicContextProvider
          settings={{
            // overrides: { evmNetworks },
            environmentId: "05fe435f-3a76-4bf3-9350-85031f73b9b8",
            walletConnectors: [EthereumWalletConnectors],
          }}
        >
          <div className={inter.className}>
            <Header /> {children}
          </div>
        </DynamicContextProvider>
      </body>
    </html>
  );
}
