import type { Chain } from "../../types/chain";

export const paseo = {
  id: 77,
  name: "Paseo",
  network: "paseo",
  genesisHash:
    "0x77afd6190f1554ad45fd0d31aee62aacc33c6db0ea801129acb813f913e0764f",
  ss58Format: 0,
  relay: true,
  testnet: true,
  signType: "sr25519",
  nativeCurrency: { name: "Paseo", symbol: "PAS", decimals: 10 },
  rpcUrls: {
    default: "wss://paseo-rpc.n.dwellir.com",
    amforc: "wss://paseo.rpc.amforc.com",
    ibp1: "wss://paseo.ibp.network",
    ibp2: "wss://paseo.dotters.network",
  },
  httpUrls: {
    dwellir: "https://paseo-rpc.n.dwellir.com",
  },
  blockExplorers: {
    default: { name: "Subscan", url: "https://paseo.subscan.io" },
  },
  subscan: {
    url: "https://paseo.subscan.io",
    api: "https://paseo.api.subscan.io",
  },
} as const satisfies Chain;
