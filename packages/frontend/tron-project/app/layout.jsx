import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import { WalletProvider } from "@tronweb3/tronwallet-adapter-react-hooks";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Time Varience Authority",
  description: "For all time .",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <WalletProvider>

        <Header />
        {children}
       </WalletProvider>
      </body>
    </html>
  );
}
