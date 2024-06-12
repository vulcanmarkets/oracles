import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { pythContracts, priceIdsUSD } from "../../utils/constants";

const V3Module = buildModule("V3Module", (m) => {
  const args = [pythContracts.merlin_testnet, priceIdsUSD.usdt];
  const account = m.getAccount(0);
  const pythContract = m.contract("PythAggregatorV3", args, { from: account });
  return { pythContract };
});

export default V3Module;
