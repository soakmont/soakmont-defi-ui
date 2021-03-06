import { privateEncrypt } from "crypto";

export const chainDefinition: any = {
  "1": {
    name: "Ethereum",
    shortName: "ETH",
    chainId: 1,
    networkFullName: "Ethereum Mainnet",
    rpcUrl: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    blockExplorerUrl: "https://etherscan.io",
    currencySymbol: "ETH",
  },
  "56": {
    name: "Binance Smart Chain",
    shortName: "BSC",
    chainId: 56,
    networkFullName: "Binance Smart Chain Mainnet",
    rpcUrl: "https://bsc-dataseed1.binance.org",
    blockExplorerUrl: "https://bscscan.com",
    currencySymbol: "BNB",
  },
};
