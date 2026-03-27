import type { Chain } from "../../types/chain";
import { kusamaLogo } from "../../logos/generated";

export const kusama = {
  id: 2,
  name: "Kusama",
  network: "kusama",
  genesisHash: "0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe",
  relay: true,
  ss58Format: 2,
  signType: "sr25519",
  nativeCurrency: { name: "Kusama", symbol: "KSM", decimals: 12 },
  website: "https://kusama.network/",
  chainIconUrl: kusamaLogo,
  rpcUrls: {
    default: "wss://kusama-rpc.polkadot.io",
    parity: "wss://kusama-rpc.polkadot.io",
    dwellir: "wss://kusama-rpc.n.dwellir.com",
    ibp1: "wss://kusama.ibp.network",
    ibp2: "wss://kusama.dotters.network",
    onfinality: "wss://kusama.api.onfinality.io/public-ws",
    allnodes: "wss://kusama-rpc.publicnode.com",
    luckyfriday: "wss://rpc-kusama.luckyfriday.io",
    radiumblock: "wss://kusama.public.curie.radiumblock.co/ws",
    stakeworld: "wss://rpc-kusama.stakeworld.io",
  },
  httpUrls: {
    parity: "https://kusama-rpc.polkadot.io",
    dwellir: "https://kusama-rpc.n.dwellir.com",
    onfinality: "https://kusama.api.onfinality.io/public",
  },
  lightClientUrls: {
    default: "light://substrate-connect/kusama",
  },
  blockExplorers: {
    default: { name: "Subscan", url: "https://kusama.subscan.io" },
    polkascan: { name: "Polkascan", url: "https://polkascan.io/kusama" },
  },
  subscan: {
    url: "https://kusama.subscan.io",
    api: "https://kusama.api.subscan.io",
  },
} as const satisfies Chain;
