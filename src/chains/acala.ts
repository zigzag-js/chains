import { Chain } from "../types/chain";

export const acala: Chain = {
  id: 10,
  name: "Acala",
  network: "acala",
  para_id: 2000,
  relay: false,
  relay_chain: "polkadot",
  prefix: 10,
  account_sign_type: "sr25519",
  currency: {
    name: "Acala",
    symbol: "ACA",
    decimals: 12,
  },
  website: "https://acala.network/",
  rpc: {
    default: "wss://acala-rpc-0.aca-api.network",
    acala_0: "wss://acala-rpc-0.aca-api.network",
    acala_1: "wss://acala-rpc-1.aca-api.network",
    acala_3: "wss://acala-rpc-3.aca-api.network/ws",
    dwellir: "wss://acala-rpc.dwellir.com",
    onfinality: "wss://acala-polkadot.api.onfinality.io/public-ws",
    polkawallet_0: "wss://acala.polkawallet.io",
  },
  light: {
    default: "light://substrate-connect/acala",
  },
  block_explorers: {
    default: {
      name: "Acala",
      url: "https://acala.subscan.io/",
    },
  },
};
