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
  const { connect, disconnect, select, connected } = useWallet();
  return (
    <WalletActionButton className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full w-48 justify-center"></WalletActionButton>
  );
}

export default WalletComponent;
