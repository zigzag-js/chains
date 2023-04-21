import { Chain } from "../types/chain";

export const polkadot = {
  id: 0,
  name: "Polkadot",
  network: "polkadot",
  relay: true,
  prefix: 0,
  account_sign_type: "sr25519",
  website: "https://polkadot.network/",
  currency: {
    name: "Polkadot",
    symbol: "DOT",
    decimals: 10,
  },
  rpc: {
    default: "wss://rpc.polkadot.io",
    automata_1rpc: "wss://1rpc.io/dot",
    dwellir: "wss://polkadot-rpc.dwellir.com",
    dwellir_tunisia: "wss://polkadot-rpc-tn.dwellir.com",
    ibp_geodns1: "wss://rpc.ibp.network/polkadot",
    ibp_geodns2: "wss://rpc.dotters.network/polkadot",
    onfinality: "wss://polkadot.api.onfinality.io/public-ws",
    parity: "wss://rpc.polkadot.io",
    radiumblock: "wss://polkadot.public.curie.radiumblock.co/ws",
  },
  light: {
    default: "light://substrate-connect/polkadot",
  },
  block_explorers: {
    default: {
      name: "Polkascan",
      url: "https://polkascan.io/polkadot",
    },
  },
} as const satisfies Chain;
