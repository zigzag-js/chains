import type { Chain } from "../../types/chain";

export const polkadotCoretime = {
  id: 1005,
  name: "Polkadot Coretime",
  network: "polkadot-coretime",
  genesisHash:
    "0xefb56e30d9b4a24099f88820987d0f45fb645992416535d87650d98e00f46fc4",
  ss58Format: 0,
  paraId: 1005,
  relayChain: "polkadot",
  signType: "sr25519",
  nativeCurrency: { name: "Polkadot", symbol: "DOT", decimals: 10 },
  rpcUrls: {
    default: "wss://polkadot-coretime-rpc.polkadot.io",
    dwellir: "wss://coretime-polkadot-rpc.n.dwellir.com",
    ibp1: "wss://coretime-polkadot.ibp.network",
    ibp2: "wss://coretime-polkadot.dotters.network",
    onfinality: "wss://coretime-polkadot.api.onfinality.io/public-ws",
    luckyfriday: "wss://rpc-coretime-polkadot.luckyfriday.io",
  },
  httpUrls: {
    parity: "https://polkadot-coretime-rpc.polkadot.io",
    dwellir: "https://coretime-polkadot-rpc.n.dwellir.com",
  },
  blockExplorers: {
    default: { name: "Subscan", url: "https://coretime-polkadot.subscan.io" },
  },
  subscan: {
    url: "https://coretime-polkadot.subscan.io",
    api: "https://coretime-polkadot.api.subscan.io",
  },
} as const satisfies Chain;
