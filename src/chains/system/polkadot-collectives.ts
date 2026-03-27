import type { Chain } from "../../types/chain";
import { polkadotCollectivesLogo } from "../../logos/generated";

export const polkadotCollectives = {
  id: 1001,
  name: "Polkadot Collectives",
  network: "polkadot-collectives",
  genesisHash:
    "0x46ee89aa2eedd13e988962630ec9fb7565964cf5023bb351f2b6b25c1b68b0b2",
  ss58Format: 0,
  paraId: 1001,
  relayChain: "polkadot",
  signType: "sr25519",
  nativeCurrency: { name: "Polkadot", symbol: "DOT", decimals: 10 },
  chainIconUrl: polkadotCollectivesLogo,
  rpcUrls: {
    default: "wss://polkadot-collectives-rpc.polkadot.io",
    dwellir: "wss://collectives-polkadot-rpc.n.dwellir.com",
    ibp1: "wss://collectives-polkadot.ibp.network",
    ibp2: "wss://collectives-polkadot.dotters.network",
    onfinality: "wss://collectives.api.onfinality.io/public-ws",
    luckyfriday: "wss://rpc-collectives-polkadot.luckyfriday.io",
  },
  httpUrls: {
    parity: "https://polkadot-collectives-rpc.polkadot.io",
    dwellir: "https://collectives-polkadot-rpc.n.dwellir.com",
  },
  blockExplorers: {
    default: {
      name: "Subscan",
      url: "https://collectives-polkadot.subscan.io",
    },
  },
  subscan: {
    url: "https://collectives-polkadot.subscan.io",
    api: "https://collectives-polkadot.api.subscan.io",
  },
} as const satisfies Chain;
