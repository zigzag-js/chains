import type { Chain } from "../../types/chain";

export const astar = {
  id: 52006,
  name: "Astar",
  network: "astar",
  genesisHash:
    "0x9eb76c5184c4ab8679d2d5d819fdf90b9c001403e9e17da2e14b6d8aec4029c6",
  ss58Format: 5,
  paraId: 2006,
  relayChain: "polkadot",
  signType: "sr25519",
  nativeCurrency: { name: "Astar", symbol: "ASTR", decimals: 18 },
  website: "https://astar.network",
  rpcUrls: {
    default: "wss://rpc.astar.network",
    dwellir: "wss://astar-rpc.n.dwellir.com",
    onfinality: "wss://astar.api.onfinality.io/public-ws",
    radiumblock: "wss://astar.public.curie.radiumblock.co/ws",
    blastapi: "wss://astar.public.blastapi.io",
  },
  httpUrls: {
    dwellir: "https://astar-rpc.n.dwellir.com",
    onfinality: "https://astar.api.onfinality.io/public",
    blastapi: "https://astar.public.blastapi.io",
    automata1rpc: "https://1rpc.io/astr",
  },
  lightClientUrls: {
    default: "light://substrate-connect/astar",
  },
  blockExplorers: {
    default: { name: "Subscan", url: "https://astar.subscan.io" },
  },
  subscan: {
    url: "https://astar.subscan.io",
    api: "https://astar.api.subscan.io",
  },
} as const satisfies Chain;
