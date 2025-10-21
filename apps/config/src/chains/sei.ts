import { defineChain } from "viem";

export const sei = defineChain({
  id: 1329,
  name: "Sei",
  network: "Sei",
  nativeCurrency: {
    symbol: "SEI",
    name: "Sei",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: [],
    },
  },
  blockExplorers: {
    default: {
      name: "Sei Scan",
      url: "https://seiscan.io",
    },
  },
  contracts: {},
});
