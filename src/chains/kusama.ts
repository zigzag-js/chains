import { Chain } from "../types/chain";

export const Kusama = {
  id: 2,
  name: "Kusama",
  network: "kusama",
  relay: true,
  prefix: 2,
  account_sign_type: "sr25519",
  website: "https://kusama.network/",
  currency: {
    name: "Kusama",
    symbol: "KSM",
    decimals: 12,
  },
  rpc: {
    default: "wss://kusama-rpc.polkadot.io",
    automata_1rpc: "wss://1rpc.io/ksm",
    dwellir: "wss://kusama-rpc.dwellir.com",
    dwellir_tunisia: "wss://kusama-rpc-tn.dwellir.com",
    ibp_geodns1: "wss://rpc.ibp.network/kusama",
    ibp_geodns2: "wss://rpc.dotters.network/kusama",
    onfinality: "wss://kusama.api.onfinality.io/public-ws",
    parity: "wss://kusama-rpc.polkadot.io",
    radiumblock: "wss://kusama.public.curie.radiumblock.co/ws",
  },
  light: {
    default: "light://substrate-connect/kusama",
  },
  block_explorers: {
    default: {
      name: "Polkascan",
      url: "https://polkascan.io/kusama",
    },
  },
} as const satisfies Chain;
