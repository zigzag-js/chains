import type { Chain } from "../../types/chain";

export const westend = {
  id: 42,
  name: "Westend",
  network: "westend",
  genesisHash:
    "0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e",
  ss58Format: 42,
  relay: true,
  testnet: true,
  signType: "sr25519",
  nativeCurrency: { name: "Westend", symbol: "WND", decimals: 12 },
  website: "https://polkadot.network/",
  rpcUrls: {
    default: "wss://westend-rpc.polkadot.io",
    dwellir: "wss://westend-rpc.n.dwellir.com",
    onfinality: "wss://westend.api.onfinality.io/public-ws",
    radiumblock: "wss://westend.public.curie.radiumblock.co/ws",
  },
  httpUrls: {
    parity: "https://westend-rpc.polkadot.io",
    dwellir: "https://westend-rpc.n.dwellir.com",
  },
  lightClientUrls: {
    default: "light://substrate-connect/westend",
  },
  blockExplorers: {
    default: { name: "Subscan", url: "https://westend.subscan.io" },
  },
  subscan: {
    url: "https://westend.subscan.io",
    api: "https://westend.api.subscan.io",
  },
} as const satisfies Chain;
