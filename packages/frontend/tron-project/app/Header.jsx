"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import WalletComponent from "./components/WalletComponent";
import { WalletConnectButton } from "@tronweb3/tronwallet-adapter-react-ui";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-gradient-to-r from-purple-950 to-violet-600 flex justify-around items-center p-4">
      <div className="flex items-center">
        <Link href="/">
          <div className="flex items-center mr-2">
            <div className="mr-2">
              <Image src={"/tva-logo.png"} alt="TVA" width={50} height={20} />
            </div>
            <div className="text-white text-lg font-semibold pl-5">TVA</div>
          </div>
        </Link>
      </div>

      <nav className="flex space-x-24 ">
        <Link className="mt-3" href="/AboutUs">
          <div
            className={
              pathname === "/AboutUs"
                ? "border-b-4 border-yellow-500 hover:text-yellow-500 text-white"
                : "text-white hover:text-yellow-500"
            }
          >
            About Us
          </div>
        </Link>
        <Link className="mt-3" href="/ContactUs">
          <div
            className={
              pathname === "/ContactUs"
                ? "border-b-4 border-yellow-500 hover:text-yellow-500 text-white"
                : "text-white hover:text-yellow-500"
            }
          >
            Contact Us
          </div>
        </Link>
        <Link className="mt-3" href="/HowItIsWork">
          <div
            className={
              pathname === "/HowItIsWork"
                ? "border-b-4 border-yellow-500 hover:text-yellow-500 text-white"
                : "text-white hover:text-yellow-500"
            }
          >
            How It Is Work?
          </div>
        </Link>
        <Link className="mt-3" href="/CreateDesignStamp">
          <div
            className={
              pathname === "/CreateDesignStamp"
                ? "border-b-4 border-yellow-500 hover:text-yellow-500 text-white"
                : "text-white hover:text-yellow-500"
            }
          >
            Create Design Stamp
          </div>
        </Link>
        <div className="">
          <WalletComponent />
        </div>
      </nav>
    </header>
  );
};

export default Header;
