import type { Chain } from "../../types/chain";
import { acalaLogo } from "../../logos/generated";

export const acala = {
  id: 52000,
  name: "Acala",
  network: "acala",
  genesisHash:
    "0xfc41b9bd8ef8fe53d58c7ea67c794c7ec9a73daf05e6d54b14ff6342c99ba64c",
  ss58Format: 10,
  paraId: 2000,
  relayChain: "polkadot",
  signType: "sr25519",
  nativeCurrency: { name: "Acala", symbol: "ACA", decimals: 12 },
  website: "https://acala.network/",
  chainIconUrl: acalaLogo,
  rpcUrls: {
    default: "wss://acala-rpc-0.aca-api.network",
    acala1: "wss://acala-rpc-1.aca-api.network",
    dwellir: "wss://acala-rpc.n.dwellir.com",
    ibp1: "wss://acala.ibp.network",
    ibp2: "wss://acala.dotters.network",
    onfinality: "wss://acala-polkadot.api.onfinality.io/public-ws",
    luckyfriday: "wss://rpc-acala.luckyfriday.io",
  },
  httpUrls: {
    dwellir: "https://acala-rpc.n.dwellir.com",
    acala: "https://acala-rpc.aca-api.network",
  },
  lightClientUrls: {
    default: "light://substrate-connect/acala",
  },
  blockExplorers: {
    default: { name: "Subscan", url: "https://acala.subscan.io" },
  },
  subscan: {
    url: "https://acala.subscan.io",
    api: "https://acala.api.subscan.io",
  },
} as const satisfies Chain;
