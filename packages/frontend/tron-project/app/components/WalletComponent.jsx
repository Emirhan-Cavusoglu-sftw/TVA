import {
  useWallet,
  WalletProvider,
} from "@tronweb3/tronwallet-adapter-react-hooks";
import {
  WalletModalProvider,
  WalletActionButton,
} from "@tronweb3/tronwallet-adapter-react-ui";
import "@tronweb3/tronwallet-adapter-react-ui/style.css";
import {
  WalletDisconnectedError,
  WalletError,
  WalletNotFoundError,
} from "@tronweb3/tronwallet-abstract-adapter";
import toast, { Toaster } from "react-hot-toast";

function WalletComponent() {
  // here use `react-hot-toast` npm package to notify user what happened
  function onError(e) {
    if (e instanceof WalletNotFoundError) {
      toast.error(e.message);
    } else if (e instanceof WalletDisconnectedError) {
      toast.error(e.message);
    } else toast.error(e.message);
  }
  return (
    <WalletProvider onError={onError}>
      <WalletModalProvider>
        <ConnectComponent></ConnectComponent>
      </WalletModalProvider>
    </WalletProvider>
  );
}
function ConnectComponent() {
  const { connect, disconnect, select, connected ,address} = useWallet();

  // console.log(address)

  return (
    <WalletActionButton className="bg-transparent text-white font-bold rounded-full w-48 justify-center text-center items-center ml-10 "></WalletActionButton>
  );
}

export default WalletComponent;
