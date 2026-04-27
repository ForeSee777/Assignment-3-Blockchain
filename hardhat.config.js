require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const {
  PRIVATE_KEY,
  RPC_URL_SEPOLIA,
  RPC_URL_BASE_SEPOLIA,
  ETHERSCAN_API_KEY,
  BASESCAN_API_KEY
} = process.env;

const sharedAccounts = PRIVATE_KEY ? [PRIVATE_KEY] : [];

module.exports = {
  solidity: {
    version: "0.8.26",
    settings: {
      evmVersion: "cancun",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
      chainId: 31337
    },
    sepolia: {
      url: RPC_URL_SEPOLIA || "",
      accounts: sharedAccounts,
      chainId: 11155111
    },
    baseSepolia: {
      url: RPC_URL_BASE_SEPOLIA || "",
      accounts: sharedAccounts,
      chainId: 84532
    }
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY || "",
      baseSepolia: BASESCAN_API_KEY || ""
    },
    customChains: [
      {
        network: "baseSepolia",
        chainId: 84532,
        urls: {
          apiURL: "https://api-sepolia.basescan.org/api",
          browserURL: "https://sepolia.basescan.org"
        }
      }
    ]
  }
};
