import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./Header";
import { WalletProvider } from "@tronweb3/tronwallet-adapter-react-hooks";
import Provider from "./components/dy-provider";
import {
  DynamicContextProvider,
  EthereumWalletConnectors,
} from "../lib/dynamic";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Time Varience Authority",
  description: "For all time .",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DynamicContextProvider
          settings={{
            environmentId: "2762a57b-faa4-41ce-9f16-abff9300e2c9",
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
