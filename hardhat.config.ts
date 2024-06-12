import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    merlin_testnet: {
      url: "https://testnet-rpc.merlinchain.io",
      chainId: 686868,
      accounts: [vars.get("WALLET_PRIVATE_KEY")]
    },
  }
};

export default config;
