import type { Chain } from "../../types/chain";

export const paseoAssetHub = {
  id: 771000,
  name: "Paseo Asset Hub",
  network: "paseo-asset-hub",
  genesisHash:
    "0xd6eec26135305a8ad257a20d003357284c8aa03d0bdb2b357ab0a22371e11ef2",
  ss58Format: 0,
  paraId: 1000,
  relayChain: "paseo",
  testnet: true,
  signType: "sr25519",
  nativeCurrency: { name: "Paseo", symbol: "PAS", decimals: 10 },
  rpcUrls: {
    default: "wss://asset-hub-paseo-rpc.n.dwellir.com",
    ibp1: "wss://asset-hub-paseo.ibp.network",
    ibp2: "wss://asset-hub-paseo.dotters.network",
  },
  httpUrls: {
    dwellir: "https://asset-hub-paseo-rpc.n.dwellir.com",
  },
  blockExplorers: {
    default: { name: "Subscan", url: "https://assethub-paseo.subscan.io" },
  },
  subscan: {
    url: "https://assethub-paseo.subscan.io",
    api: "https://assethub-paseo.api.subscan.io",
  },
} as const satisfies Chain;
