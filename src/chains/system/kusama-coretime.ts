import type { Chain } from "../../types/chain";
import { kusamaCoretimeLogo } from "../../logos/generated";

export const kusamaCoretime = {
  id: 21005,
  name: "Kusama Coretime",
  network: "kusama-coretime",
  genesisHash:
    "0x638cd2b9af4b3bb54b8c1f0d22711fc89924ca93300f0caf25a580432b29d050",
  ss58Format: 2,
  paraId: 1005,
  relayChain: "kusama",
  signType: "sr25519",
  nativeCurrency: { name: "Kusama", symbol: "KSM", decimals: 12 },
  chainIconUrl: kusamaCoretimeLogo,
  rpcUrls: {
    default: "wss://kusama-coretime-rpc.polkadot.io",
    dwellir: "wss://coretime-kusama-rpc.n.dwellir.com",
    ibp1: "wss://coretime-kusama.ibp.network",
    onfinality: "wss://coretime-kusama.api.onfinality.io/public-ws",
  },
  httpUrls: {
    parity: "https://kusama-coretime-rpc.polkadot.io",
    dwellir: "https://coretime-kusama-rpc.n.dwellir.com",
  },
  blockExplorers: {
    default: { name: "Subscan", url: "https://coretime-kusama.subscan.io" },
  },
  subscan: {
    url: "https://coretime-kusama.subscan.io",
    api: "https://coretime-kusama.api.subscan.io",
  },
} as const satisfies Chain;
