import { Chain } from "../types/chain";

export const astar: Chain = {
  id: 5,
  name: "Astar",
  network: "astar",
  para_id: 2006,
  relay: false,
  relay_chain: "polkadot",
  prefix: 5,
  account_sign_type: "sr25519",
  currency: {
    name: "Astar",
    symbol: "ASTR",
    decimals: 18,
  },
  website: "https://astar.network",
  rpc: {
    default: "wss://rpc.astar.network",
    automata_1rpc: "wss://1rpc.io/astr",
    blast: "wss://astar.public.blastapi.io",
    dwellir: "wss://astar-rpc.dwellir.com",
    onfinality: "wss://astar.api.onfinality.io/public-ws",
    radiumblock: "wss://astar.public.curie.radiumblock.co/ws",
  },
  light: {
    default: "light://substrate-connect/astar",
  },
  block_explorers: {
    default: {
      name: "AstarScan",
      url: "https://astar.network",
    },
  },
};
