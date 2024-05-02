import {
  ENTRYPOINT_ADDRESS_V07,
  UserOperation,
  bundlerActions,
  getSenderAddress,
  signUserOperationHashWithECDSA,
  getRequiredPrefund,
  createSmartAccountClient,
} from "permissionless";
import {
  pimlicoBundlerActions,
  pimlicoPaymasterActions,
} from "permissionless/actions/pimlico";
import {
  createPimlicoBundlerClient,
  createPimlicoPaymasterClient,
} from "permissionless/clients/pimlico";
import {
  Address,
  Hex,
  createClient,
  createWalletClient,
  createPublicClient,
  encodeFunctionData,
  decodeFunctionData,
  http,
  parseEther,
  getContract,
  custom,
} from "viem";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";
import { gnosisChiado } from "viem/chains";
import {
  accountABI,
  accountFactoryABI,
  entryPointABI,
  signProxyABI,
  signprotocolABI,
  tsdABI,
} from "../utils/constants";
import dynamic from "next/dynamic";
import { privateKeyToSimpleSmartAccount } from "permissionless/accounts";
import { readContract } from "@wagmi/core";

import { config } from "./config";

// export const { functionName } = decodeFunctionData({
//     abi: entryPointABI,
//     data: '0xfdf4e6f9'
//   })

const endpointUrl =
  "https://api.pimlico.io/v2/10200/rpc?apikey=382125ba-467a-4a7a-8ac8-05dae90d873b";

const AF_ADDRESS = "0xCFE04ae5d264Ea78a6BB38E48b9521789d5BbA8F";

// export const wallet = privateKeyToAccount(
//   `0x${process.env.NEXT_PUBLIC_PAYMASTER_PRIVATE_KEY}`
// );

// export const paymaster = createWalletClient({
//   account: wallet,
//   chain: gnosisChiado,
//   transport: http(window.ethereum ? window.ethereum : endpointUrl),
// });

export const walletClient = createWalletClient({
    chain: gnosisChiado,
    transport:custom(window.ethereum)
  })
// export const [account] = await walletClient.getAddresses()
export const publicClient = createPublicClient({
  transport: http("https://rpc.chiadochain.net"),
  chain: gnosisChiado,
});

export const bundlerClient = createClient({
  chain: gnosisChiado,
  transport: http(endpointUrl),
})
  .extend(bundlerActions(ENTRYPOINT_ADDRESS_V07))
  .extend(pimlicoBundlerActions(ENTRYPOINT_ADDRESS_V07));

const paymasterClient = createClient({
  transport: http(endpointUrl),
  chain: gnosisChiado,
}).extend(pimlicoPaymasterActions(ENTRYPOINT_ADDRESS_V07));

export const factory = AF_ADDRESS;

// CALLDATAS
export const factoryData = encodeFunctionData({
  abi: accountFactoryABI,
  functionName: "createAccount",
  args: ["0x633aDfb3430b96238c9FB7026195D1d5b0889EA6", "Emirhan CAVUSOGLU"],
});




export const entryPointContract = getContract({
  address: "0x0000000071727De22E5E9d8BAf0edAc6f37da032",
  abi: entryPointABI,
  client: publicClient,
  
});



export const factoryContract = getContract({
  address: AF_ADDRESS,
  abi: accountFactoryABI,
  client: publicClient,
});

// HELPER FUNCTIONS
export const getFactoryData = async (address: any, alias: any) => {
  const factoryData = encodeFunctionData({
    abi: accountFactoryABI,
    functionName: "createAccount",
    args: [address, alias],
  });
  return factoryData;
};

export const getCreateTSD = async (proofName, proofDescription, ipfsUrl) => {
  const createTSD = encodeFunctionData({
    abi: accountABI,
    functionName: "createTSD",
    args: [proofName, proofDescription, ipfsUrl],
  });
  return createTSD;
};

export const getAccountContract = async (address: any) => {
    const accountContract = getContract({
        address: address,
        abi: accountABI,
        client: publicClient,
    });
    return accountContract;
    
}

export const getTSDContract = async (address: any) => {
  const tsdContract = getContract({
    address: address,
    abi: tsdABI,
    client: publicClient,
  });
  return tsdContract;
};



export const getGasPrice = async () => {
  const gasPrice = await bundlerClient.getUserOperationGasPrice();
  return gasPrice;
}
export const calculateSenderAddress = async (factoryData) => {
  const senderAddress = await getSenderAddress(publicClient, {
    factory,
    factoryData: factoryData,
    entryPoint: ENTRYPOINT_ADDRESS_V07,
  });
  return senderAddress;
};
