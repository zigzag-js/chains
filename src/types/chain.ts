export type HexString = `0x${string}`;

export interface BlockExplorer {
  name: string;
  url: string;
}

export interface Currency {
  name: string;
  /** 2-6 characters long */
  symbol: string;
  decimals: number;
}

export interface SubscanConfig {
  /** Subscan web URL (e.g., "https://polkadot.subscan.io") */
  url: string;
  /** Subscan API URL (e.g., "https://polkadot.api.subscan.io") */
  api: string;
}

export interface Chain {
  /** Unique numeric chain id */
  id: number;
  /** Human-readable name */
  name: string;
  /** Unique slug identifier for the network (e.g., "polkadot", "kusama") */
  network: string;
  /** Genesis block hash — primary on-chain identifier */
  genesisHash: HexString;

  // --- Network topology ---

  /** SS58 address prefix */
  ss58Format: number;
  /** Parachain id on the relay chain */
  paraId?: number;
  /** Whether this is a relay chain */
  relay?: boolean;
  /** Whether this is a test network */
  testnet?: boolean;
  /** Whether this chain is Ethereum-compatible (EVM) */
  ethereum?: boolean;
  /** Network slug of the parent relay chain (for parachains) */
  relayChain?: string;

  // --- Currency ---

  /** Native currency details */
  nativeCurrency: Currency;
  /** Default signing curve for standard accounts */
  signType?: "sr25519" | "ed25519" | "secp256k1";

  // --- Connectivity ---

  /** Named WebSocket RPC providers — keys are provider names, "default" is required */
  rpcUrls: Record<string, string> & { default: string };
  /** Named HTTP RPC endpoints (optional) */
  httpUrls?: Record<string, string>;
  /** Light client connection strings (substrate-connect) */
  lightClientUrls?: Record<string, string> & { default: string };

  // --- Metadata ---

  /** Project website URL */
  website?: string;
  /** Chain logo URL or data URI */
  chainIconUrl?: string;
  /** Named block explorers — "default" is the primary */
  blockExplorers?: Record<string, BlockExplorer> & { default: BlockExplorer };
  /** Subscan integration URLs */
  subscan?: SubscanConfig;
}
