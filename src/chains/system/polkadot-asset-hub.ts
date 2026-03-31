import type { Chain } from "../../types/chain";
import { polkadotAssetHubLogo } from "../../logos/generated";

export const polkadotAssetHub = {
  id: 1000,
  name: "Polkadot Asset Hub",
  network: "polkadot-asset-hub",
  genesisHash:
    "0x68d56f15f85d3136970ec16946040bc1752654e906147f7e43e9d539d7c3de2f",
  ss58Format: 0,
  paraId: 1000,
  relayChain: "polkadot",
  signType: "sr25519",
  nativeCurrency: { name: "Polkadot", symbol: "DOT", decimals: 10 },
  chainIconUrl: polkadotAssetHubLogo,
  rpcUrls: {
    default: "wss://polkadot-asset-hub-rpc.polkadot.io",
    dwellir: "wss://asset-hub-polkadot-rpc.n.dwellir.com",
    ibp1: "wss://asset-hub-polkadot.ibp.network",
    ibp2: "wss://asset-hub-polkadot.dotters.network",
    onfinality: "wss://statemint.api.onfinality.io/public-ws",
    luckyfriday: "wss://rpc-asset-hub-polkadot.luckyfriday.io",
    deserve: "wss://asset-hub.polkadot.rpc.deserve.network",
  },
  httpUrls: {
    parity: "https://polkadot-asset-hub-rpc.polkadot.io",
    dwellir: "https://asset-hub-polkadot-rpc.n.dwellir.com",
  },
  blockExplorers: {
    default: { name: "Subscan", url: "https://assethub-polkadot.subscan.io" },
  },
  subscan: {
    url: "https://assethub-polkadot.subscan.io",
    api: "https://assethub-polkadot.api.subscan.io",
  },
} as const satisfies Chain;
