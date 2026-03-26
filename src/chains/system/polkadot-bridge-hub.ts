import type { Chain } from "../../types/chain";

export const polkadotBridgeHub = {
  id: 1002,
  name: "Polkadot Bridge Hub",
  network: "polkadot-bridge-hub",
  genesisHash:
    "0xdcf691b5a3fbe24adc99ddc959c0561b973e329b1aef4c4b22e7bb2ddecb4464",
  ss58Format: 0,
  paraId: 1002,
  relayChain: "polkadot",
  signType: "sr25519",
  nativeCurrency: { name: "Polkadot", symbol: "DOT", decimals: 10 },
  rpcUrls: {
    default: "wss://polkadot-bridge-hub-rpc.polkadot.io",
    dwellir: "wss://bridge-hub-polkadot-rpc.n.dwellir.com",
    ibp1: "wss://bridge-hub-polkadot.ibp.network",
    ibp2: "wss://bridge-hub-polkadot.dotters.network",
    onfinality: "wss://bridgehub-polkadot.api.onfinality.io/public-ws",
    luckyfriday: "wss://rpc-bridge-hub-polkadot.luckyfriday.io",
  },
  httpUrls: {
    parity: "https://polkadot-bridge-hub-rpc.polkadot.io",
    dwellir: "https://bridge-hub-polkadot-rpc.n.dwellir.com",
  },
  blockExplorers: {
    default: {
      name: "Subscan",
      url: "https://bridgehub-polkadot.subscan.io",
    },
  },
  subscan: {
    url: "https://bridgehub-polkadot.subscan.io",
    api: "https://bridgehub-polkadot.api.subscan.io",
  },
} as const satisfies Chain;
