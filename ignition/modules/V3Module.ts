import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { pythContracts, priceIdsUSD } from "../../utils/constants";

const V3Module = buildModule("V3Module", (m) => {
  const args = [pythContracts.merlin_testnet, priceIdsUSD.usdt];
  const account = m.getAccount(0);
  const pythContract = m.contract("PythAggregatorV3", args, { from: account });

  const usdcargs = [pythContracts.merlin_testnet, priceIdsUSD.usdc];
  const usdcContract = m.contract("PythAggregatorV3", usdcargs, {
    from: account,
    id: "pythagg_usdc"
  });

  return { pythContract, usdcContract };
});

export default V3Module;
