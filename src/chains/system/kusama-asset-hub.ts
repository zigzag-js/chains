import type { Chain } from "../../types/chain";
import { kusamaAssetHubLogo } from "../../logos/generated";

export const kusamaAssetHub = {
  id: 21000,
  name: "Kusama Asset Hub",
  network: "kusama-asset-hub",
  genesisHash:
    "0x48239ef607d7928874027a43a67689209727dfb3d3dc5e5b03a39bdc2eda771a",
  ss58Format: 2,
  paraId: 1000,
  relayChain: "kusama",
  signType: "sr25519",
  nativeCurrency: { name: "Kusama", symbol: "KSM", decimals: 12 },
  chainIconUrl: kusamaAssetHubLogo,
  rpcUrls: {
    default: "wss://kusama-asset-hub-rpc.polkadot.io",
    dwellir: "wss://asset-hub-kusama-rpc.n.dwellir.com",
    ibp1: "wss://asset-hub-kusama.ibp.network",
    ibp2: "wss://asset-hub-kusama.dotters.network",
    onfinality: "wss://assethub-kusama.api.onfinality.io/public-ws",
    luckyfriday: "wss://rpc-asset-hub-kusama.luckyfriday.io",
  },
  httpUrls: {
    parity: "https://kusama-asset-hub-rpc.polkadot.io",
    dwellir: "https://asset-hub-kusama-rpc.n.dwellir.com",
  },
  blockExplorers: {
    default: { name: "Subscan", url: "https://assethub-kusama.subscan.io" },
  },
  subscan: {
    url: "https://assethub-kusama.subscan.io",
    api: "https://assethub-kusama.api.subscan.io",
  },
} as const satisfies Chain;
