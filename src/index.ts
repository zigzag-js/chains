// Types
export type { Chain, HexString, BlockExplorer, Currency, SubscanConfig } from "./types/chain";

// Relay chains
export { polkadot } from "./chains/relay/polkadot";
export { kusama } from "./chains/relay/kusama";

// System parachains — Polkadot
export { polkadotAssetHub } from "./chains/system/polkadot-asset-hub";
export { polkadotPeople } from "./chains/system/polkadot-people";
export { polkadotCoretime } from "./chains/system/polkadot-coretime";
export { polkadotCollectives } from "./chains/system/polkadot-collectives";
export { polkadotBridgeHub } from "./chains/system/polkadot-bridge-hub";

// System parachains — Kusama
export { kusamaAssetHub } from "./chains/system/kusama-asset-hub";
export { kusamaPeople } from "./chains/system/kusama-people";
export { kusamaCoretime } from "./chains/system/kusama-coretime";
export { kusamaBridgeHub } from "./chains/system/kusama-bridge-hub";

// Third-party parachains
export { astar } from "./chains/parachains/astar";
export { acala } from "./chains/parachains/acala";
export { moonbeam } from "./chains/parachains/moonbeam";
export { phala } from "./chains/parachains/phala";
export { hydration } from "./chains/parachains/hydration";

// Testnets
export { westend } from "./chains/testnet/westend";
export { paseo } from "./chains/testnet/paseo";
export { westendAssetHub } from "./chains/testnet/westend-asset-hub";
export { paseoAssetHub } from "./chains/testnet/paseo-asset-hub";
