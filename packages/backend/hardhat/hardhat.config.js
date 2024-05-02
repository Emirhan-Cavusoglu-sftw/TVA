require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

let accounts = [process.env.PRIVATE_KEY];
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "chiado",
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
  
    gnosis: {
      url: "https://rpc.gnosischain.com",
      accounts: accounts,
    },
    chiado: {
      url: "https://rpc.chiadochain.net",
      // gasPrice: 1000000000,
      accounts: [process.env.PRIVATE_KEY],
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/KLy8dYdHatG6wz85fIpjCFIhYgb3dASv",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  sourcify: {
    enabled: true
  },
  etherscan: {
    customChains: [
      {
        network: "chiado",
        chainId: 10200,
        urls: {
          //Blockscout
          apiURL: "https://blockscout.com/gnosis/chiado/api",
          browserURL: "https://blockscout.com/gnosis/chiado",
        },
      },
      {
        network: "gnosis",
        chainId: 100,
        urls: {
          // 3) Select to what explorer verify the contracts
          // Gnosisscan
          apiURL: "https://api.gnosisscan.io/api",
          browserURL: "https://gnosisscan.io/",
          // Blockscout
          //apiURL: "https://blockscout.com/xdai/mainnet/api",
          //browserURL: "https://blockscout.com/xdai/mainnet",
        },
      },
    ],

    sourcify: {
      enabled: false
    },
    apiKey: {
      //4) Insert your Gnosisscan API key
      //blockscout explorer verification does not require keys
      // https://rpc.chiadochain.net
      // https://1rpc.io/gnosis
      // b0cfdeb7-31b5-4aa3-b560-6ee2f8cd803d
      // etherscan 29FHC7UXG1TV9GXXSETX5S13Y5RMDBT1V1
      // gnosis 52PYNGTGGBD48CGR1BJIB29156DE5BXX3S
      sepolia: "29FHC7UXG1TV9GXXSETX5S13Y5RMDBT1V1",
      chiado: "52PYNGTGGBD48CGR1BJIB29156DE5BXX3S",
      gnosis: "52PYNGTGGBD48CGR1BJIB29156DE5BXX3S",
    },

  }
  
};


/** 
 gnosis chiado contracts => 
 
 0x5F49Cf21273563a628F31cd08C1D4Ada7722aB58
 
 
 
 
 
 
 */ 