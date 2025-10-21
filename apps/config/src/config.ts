import { sei } from "./chains/sei";
import type { Config } from "./types";

export const COOLDOWN_ENABLED = false; // true if you want to enable the cooldown mechanism
export const COOLDOWN_PERIOD = 60 * 60; // 1 hour

export const chainConfigs: Record<number, Config> = {
  [sei.id]: {
    chain: sei,
    morpho: { address: "0xc9cDAc20FCeAAF616f7EB0bb6Cd2c69dcfa9094c", startBlock: 166036723 },
    adaptiveCurveIrm: {
      address: "0x6eFA8e3Aa8279eB2fd46b6083A9E52dA72EA56c4",
      startBlock: 166036723,
    },
    metaMorphoFactories: {
      addresses: ["0x8Dea49ec5bd5AeAc8bcf96B3E187F59354118291"],
      startBlock: 168896078,
    },
    preLiquidationFactory: {
      address: "0x65eD61058cEB4895B7d62437BaCEA39b04f6D27B",
      startBlock: 168897284,
    },
    wNative: "0xe30fedd158a2e3b13e9badaeabafc5516e95e8c7",
    options: {
      vaultWhitelist: [
        "0x015f10a56e97e02437d294815d8e079e1903e41c",
        "0x948fcc6b7f68f4830cd69db1481a9e1a142a4923",
      ],
      additionalMarketsWhitelist: [],
      checkProfit: false,
    },
  },
};
