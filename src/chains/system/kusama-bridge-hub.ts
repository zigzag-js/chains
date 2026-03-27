import type { Chain } from "../../types/chain";
import { kusamaBridgeHubLogo } from "../../logos/generated";

export const kusamaBridgeHub = {
  id: 21002,
  name: "Kusama Bridge Hub",
  network: "kusama-bridge-hub",
  genesisHash:
    "0x00dcb981df86429de8bbacf9803401f09485366c44efbf53af9ecfab03adc7e5",
  ss58Format: 2,
  paraId: 1002,
  relayChain: "kusama",
  signType: "sr25519",
  nativeCurrency: { name: "Kusama", symbol: "KSM", decimals: 12 },
  chainIconUrl: kusamaBridgeHubLogo,
  rpcUrls: {
    default: "wss://kusama-bridge-hub-rpc.polkadot.io",
    dwellir: "wss://bridge-hub-kusama-rpc.n.dwellir.com",
    ibp1: "wss://bridge-hub-kusama.ibp.network",
    onfinality: "wss://bridgehub-kusama.api.onfinality.io/public-ws",
  },
  httpUrls: {
    parity: "https://kusama-bridge-hub-rpc.polkadot.io",
    dwellir: "https://bridge-hub-kusama-rpc.n.dwellir.com",
  },
  blockExplorers: {
    default: { name: "Subscan", url: "https://bridgehub-kusama.subscan.io" },
  },
  subscan: {
    url: "https://bridgehub-kusama.subscan.io",
    api: "https://bridgehub-kusama.api.subscan.io",
  },
} as const satisfies Chain;
