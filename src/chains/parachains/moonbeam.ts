import type { Chain } from "../../types/chain";
import { moonbeamLogo } from "../../logos/generated";

export const moonbeam = {
  id: 52004,
  name: "Moonbeam",
  network: "moonbeam",
  genesisHash:
    "0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d",
  ss58Format: 1284,
  paraId: 2004,
  relayChain: "polkadot",
  signType: "secp256k1",
  ethereum: true,
  nativeCurrency: { name: "Glimmer", symbol: "GLMR", decimals: 18 },
  website: "https://moonbeam.network/",
  chainIconUrl: moonbeamLogo,
  rpcUrls: {
    default: "wss://wss.api.moonbeam.network",
    allnodes: "wss://moonbeam-rpc.publicnode.com",
    ibp1: "wss://moonbeam.ibp.network",
    ibp2: "wss://moonbeam.dotters.network",
    onfinality: "wss://moonbeam.api.onfinality.io/public-ws",
    radiumblock: "wss://moonbeam.public.curie.radiumblock.co/ws",
    blastapi: "wss://moonbeam.public.blastapi.io",
  },
  httpUrls: {
    moonbeam: "https://rpc.api.moonbeam.network",
    blastapi: "https://moonbeam.public.blastapi.io",
    onfinality: "https://moonbeam.api.onfinality.io/public",
    automata1rpc: "https://1rpc.io/glmr",
  },
  blockExplorers: {
    default: { name: "Subscan", url: "https://moonbeam.subscan.io" },
    moonscan: { name: "Moonscan", url: "https://moonbeam.moonscan.io" },
  },
  subscan: {
    url: "https://moonbeam.subscan.io",
    api: "https://moonbeam.api.subscan.io",
  },
} as const satisfies Chain;
