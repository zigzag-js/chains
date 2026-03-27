import type { Chain } from "../../types/chain";
import { polkadotLogo } from "../../logos/generated";

export const polkadot = {
  id: 0,
  name: "Polkadot",
  network: "polkadot",
  genesisHash: "0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3",
  relay: true,
  ss58Format: 0,
  signType: "sr25519",
  nativeCurrency: { name: "Polkadot", symbol: "DOT", decimals: 10 },
  website: "https://polkadot.network/",
  chainIconUrl: polkadotLogo,
  rpcUrls: {
    default: "wss://rpc.polkadot.io",
    parity: "wss://rpc.polkadot.io",
    dwellir: "wss://polkadot-rpc.n.dwellir.com",
    ibp1: "wss://polkadot.ibp.network",
    ibp2: "wss://polkadot.dotters.network",
    onfinality: "wss://polkadot.api.onfinality.io/public-ws",
    allnodes: "wss://polkadot-rpc.publicnode.com",
    luckyfriday: "wss://rpc-polkadot.luckyfriday.io",
    radiumblock: "wss://polkadot.public.curie.radiumblock.co/ws",
    stakeworld: "wss://rpc-polkadot.stakeworld.io",
  },
  httpUrls: {
    parity: "https://rpc.polkadot.io",
    dwellir: "https://polkadot-rpc.n.dwellir.com",
    onfinality: "https://polkadot.api.onfinality.io/public",
  },
  lightClientUrls: {
    default: "light://substrate-connect/polkadot",
  },
  blockExplorers: {
    default: { name: "Subscan", url: "https://polkadot.subscan.io" },
    polkascan: { name: "Polkascan", url: "https://polkascan.io/polkadot" },
  },
  subscan: {
    url: "https://polkadot.subscan.io",
    api: "https://polkadot.api.subscan.io",
  },
} as const satisfies Chain;
