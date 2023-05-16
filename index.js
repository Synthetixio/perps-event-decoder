import dotenv from "dotenv-safe";
dotenv.config();
import { abi as kwentaAccountAbi } from "./abi/kwenta.js";
import { pythAbi } from "./abi/pyth.js";
import { snxAbis } from "./abi/all-snx-contracts.js";
import { ethers, utils, BigNumber } from "ethers";
import log from "ololog";

utils.Logger.setLogLevel("OFF"); // turn ethers.js logging off, duplicate definition in abis are annoying

const provider = new ethers.providers.InfuraProvider(
  parseInt(process.env.NETWORK_ID),
  process.env.INFURA_KEY
);
async function getTransactionReceiptEvents(txHash) {
  log(`Looking up events for txHash ${txHash}`);

  // Get transaction receipt
  let txReceipt = await provider.getTransactionReceipt(txHash);

  if (txReceipt && txReceipt.logs) {
    // Create a new Interface with the contract ABI
    let contractInterface = new utils.Interface(
      snxAbis.concat(kwentaAccountAbi).concat(pythAbi)
    );

    // Parse the log data from the transaction receipt
    let parsedLogs = txReceipt.logs.map((log) => {
      try {
        const parsed = contractInterface.parseLog(log);
        const args = Object.fromEntries(
          Object.entries({ ...parsed.args }).map(([key, val]) => [
            key,
            BigNumber.isBigNumber(val) ? utils.formatEther(val) : val,
          ])
        );
        return { ...parsed, args };
      } catch (error) {
        throw Error("Failed to parse log");
      }
    });

    log(parsedLogs);
    console.table(parsedLogs);
  }
}
const arg = process.argv[2];
if (!arg) throw Error("No tx hash provided");
getTransactionReceiptEvents(arg);
