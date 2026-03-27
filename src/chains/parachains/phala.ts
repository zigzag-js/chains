import type { Chain } from "../../types/chain";
import { phalaLogo } from "../../logos/generated";

export const phala = {
  id: 52035,
  name: "Phala",
  network: "phala",
  genesisHash:
    "0x1bb969d85965e4bb5a651abbedf21a54b6b31a21f66b5401cc3f1e286268d736",
  ss58Format: 30,
  paraId: 2035,
  relayChain: "polkadot",
  signType: "sr25519",
  nativeCurrency: { name: "Phala", symbol: "PHA", decimals: 12 },
  website: "https://phala.network/",
  chainIconUrl: phalaLogo,
  rpcUrls: {
    default: "wss://api.phala.network/ws",
    dwellir: "wss://phala-rpc.n.dwellir.com",
    radiumblock: "wss://phala.public.curie.radiumblock.co/ws",
  },
  httpUrls: {
    phala: "https://api.phala.network/rpc",
    dwellir: "https://phala-rpc.n.dwellir.com",
  },
  blockExplorers: {
    default: { name: "Subscan", url: "https://phala.subscan.io" },
  },
  subscan: {
    url: "https://phala.subscan.io",
    api: "https://phala.api.subscan.io",
  },
} as const satisfies Chain;
