import type { Chain } from "../../types/chain";

export const westendAssetHub = {
  id: 421000,
  name: "Westend Asset Hub",
  network: "westend-asset-hub",
  genesisHash:
    "0x67f9723393ef76214df0118c34bbbd3dbebc8ed46a10973a8c969d48fe7598c9",
  ss58Format: 42,
  paraId: 1000,
  relayChain: "westend",
  testnet: true,
  signType: "sr25519",
  nativeCurrency: { name: "Westend", symbol: "WND", decimals: 12 },
  rpcUrls: {
    default: "wss://westend-asset-hub-rpc.polkadot.io",
    dwellir: "wss://asset-hub-westend-rpc.n.dwellir.com",
  },
  httpUrls: {
    parity: "https://westend-asset-hub-rpc.polkadot.io",
    dwellir: "https://asset-hub-westend-rpc.n.dwellir.com",
  },
  blockExplorers: {
    default: { name: "Subscan", url: "https://assethub-westend.subscan.io" },
  },
  subscan: {
    url: "https://assethub-westend.subscan.io",
    api: "https://assethub-westend.api.subscan.io",
  },
} as const satisfies Chain;
