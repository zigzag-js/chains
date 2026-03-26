import type { Chain } from "../../types/chain";

export const kusamaPeople = {
  id: 21004,
  name: "Kusama People",
  network: "kusama-people",
  genesisHash:
    "0xc1af4cb4eb3918e5db15086c0cc5ec17fb334f728b7c65dd44bfe1e174ff8b3f",
  ss58Format: 2,
  paraId: 1004,
  relayChain: "kusama",
  signType: "sr25519",
  nativeCurrency: { name: "Kusama", symbol: "KSM", decimals: 12 },
  rpcUrls: {
    default: "wss://kusama-people-rpc.polkadot.io",
    dwellir: "wss://people-kusama-rpc.n.dwellir.com",
    ibp1: "wss://people-kusama.ibp.network",
    onfinality: "wss://people-kusama.api.onfinality.io/public-ws",
  },
  httpUrls: {
    parity: "https://kusama-people-rpc.polkadot.io",
    dwellir: "https://people-kusama-rpc.n.dwellir.com",
  },
  blockExplorers: {
    default: { name: "Subscan", url: "https://people-kusama.subscan.io" },
  },
  subscan: {
    url: "https://people-kusama.subscan.io",
    api: "https://people-kusama.api.subscan.io",
  },
} as const satisfies Chain;
