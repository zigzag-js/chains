import type { Chain, HexString } from "./types/chain";

// Import all chains for building groups
import { polkadot } from "./chains/relay/polkadot";
import { kusama } from "./chains/relay/kusama";
import { polkadotAssetHub } from "./chains/system/polkadot-asset-hub";
import { polkadotPeople } from "./chains/system/polkadot-people";
import { polkadotCoretime } from "./chains/system/polkadot-coretime";
import { polkadotCollectives } from "./chains/system/polkadot-collectives";
import { polkadotBridgeHub } from "./chains/system/polkadot-bridge-hub";
import { kusamaAssetHub } from "./chains/system/kusama-asset-hub";
import { kusamaPeople } from "./chains/system/kusama-people";
import { kusamaCoretime } from "./chains/system/kusama-coretime";
import { kusamaBridgeHub } from "./chains/system/kusama-bridge-hub";
import { astar } from "./chains/parachains/astar";
import { acala } from "./chains/parachains/acala";
import { moonbeam } from "./chains/parachains/moonbeam";
import { phala } from "./chains/parachains/phala";
import { hydration } from "./chains/parachains/hydration";
import { westend } from "./chains/testnet/westend";
import { paseo } from "./chains/testnet/paseo";
import { westendAssetHub } from "./chains/testnet/westend-asset-hub";
import { paseoAssetHub } from "./chains/testnet/paseo-asset-hub";

// ---- Chain groups ----

/** All chains in the registry */
export const allChains: readonly Chain[] = [
  polkadot, kusama,
  polkadotAssetHub, polkadotPeople, polkadotCoretime, polkadotCollectives, polkadotBridgeHub,
  kusamaAssetHub, kusamaPeople, kusamaCoretime, kusamaBridgeHub,
  astar, acala, moonbeam, phala, hydration,
  westend, paseo, westendAssetHub, paseoAssetHub,
];

/** Relay chains only (Polkadot, Kusama, Westend, Paseo) */
export const relayChains: readonly Chain[] = allChains.filter((c) => c.relay);

/** System parachains (Asset Hub, People, Coretime, Collectives, Bridge Hub) */
export const systemChains: readonly Chain[] = [
  polkadotAssetHub, polkadotPeople, polkadotCoretime, polkadotCollectives, polkadotBridgeHub,
  kusamaAssetHub, kusamaPeople, kusamaCoretime, kusamaBridgeHub,
];

/** Third-party parachains (Astar, Acala, Moonbeam, Phala, Hydration) */
export const parachainChains: readonly Chain[] = [astar, acala, moonbeam, phala, hydration];

/** Test networks only */
export const testnetChains: readonly Chain[] = allChains.filter((c) => c.testnet);

/** Production networks only (excludes testnets) */
export const mainnetChains: readonly Chain[] = allChains.filter((c) => !c.testnet);

// ---- Lookup helpers ----

/** Find a chain by its numeric id. Returns undefined if not found. */
export function getChainById(id: number): Chain | undefined {
  return allChains.find((c) => c.id === id);
}

/** Find a chain by its network slug. Returns undefined if not found. */
export function getChainByNetwork(network: string): Chain | undefined {
  return allChains.find((c) => c.network === network);
}

/** Find a chain by its genesis hash. Returns undefined if not found. */
export function getChainByGenesisHash(hash: HexString): Chain | undefined {
  return allChains.find((c) => c.genesisHash === hash);
}

// ---- Factory ----

/** Create a chain definition that satisfies the Chain interface. Useful for defining custom chains. */
export function defineChain<const T extends Chain>(chain: T): T {
  return chain;
}
