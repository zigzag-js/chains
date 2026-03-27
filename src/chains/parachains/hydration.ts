import type { Chain } from "../../types/chain";
import { hydrationLogo } from "../../logos/generated";

export const hydration = {
  id: 52034,
  name: "Hydration",
  network: "hydration",
  genesisHash:
    "0xafdc188f45c71dacbaa0b62e16a91f726c7b8699a9748cdf715459de6b7f366d",
  ss58Format: 63,
  paraId: 2034,
  relayChain: "polkadot",
  signType: "sr25519",
  nativeCurrency: { name: "Hydration", symbol: "HDX", decimals: 12 },
  website: "https://hydration.net/",
  chainIconUrl: hydrationLogo,
  rpcUrls: {
    default: "wss://rpc.hydradx.cloud",
    dwellir: "wss://hydration-rpc.n.dwellir.com",
    ibp1: "wss://hydration.ibp.network",
    ibp2: "wss://hydration.dotters.network",
    helikon: "wss://rpc.helikon.io/hydradx",
  },
  httpUrls: {
    dwellir: "https://hydration-rpc.n.dwellir.com",
    galactic: "https://rpc.hydradx.cloud",
  },
  blockExplorers: {
    default: { name: "Subscan", url: "https://hydration.subscan.io" },
  },
  subscan: {
    url: "https://hydration.subscan.io",
    api: "https://hydration.api.subscan.io",
  },
} as const satisfies Chain;
