import type { Chain } from "../../types/chain";

export const polkadotPeople = {
  id: 1004,
  name: "Polkadot People",
  network: "polkadot-people",
  genesisHash:
    "0x67fa177a097bfa18f77ea95ab56e9bcdfeb0e5b8a40e46298bb93e16b6fc5008",
  ss58Format: 0,
  paraId: 1004,
  relayChain: "polkadot",
  signType: "sr25519",
  nativeCurrency: { name: "Polkadot", symbol: "DOT", decimals: 10 },
  rpcUrls: {
    default: "wss://polkadot-people-rpc.polkadot.io",
    dwellir: "wss://people-polkadot-rpc.n.dwellir.com",
    ibp1: "wss://people-polkadot.ibp.network",
    ibp2: "wss://people-polkadot.dotters.network",
    onfinality: "wss://people-polkadot.api.onfinality.io/public-ws",
    luckyfriday: "wss://rpc-people-polkadot.luckyfriday.io",
  },
  httpUrls: {
    parity: "https://polkadot-people-rpc.polkadot.io",
    dwellir: "https://people-polkadot-rpc.n.dwellir.com",
  },
  blockExplorers: {
    default: { name: "Subscan", url: "https://people-polkadot.subscan.io" },
  },
  subscan: {
    url: "https://people-polkadot.subscan.io",
    api: "https://people-polkadot.api.subscan.io",
  },
} as const satisfies Chain;
