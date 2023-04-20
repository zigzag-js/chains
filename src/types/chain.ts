import BlockExplorer from "./block-explorer";
import Currency from "./currency";

export type Chain = {
  /** Unique id of the chain */
  id: number;
  /** Human-readable name */
  name: string;
  /** Parachain id for the network */
  para_id?: number;
  /** Address Prefix. Must be a unique and an integer */
  prefix: number;
  /** Unique identifier for the network */
  network: string;
  /** Currency for the network */
  currency: Currency;
  /** Signing curve for standard account. Substrate supports ed25519, sr25519, and secp256k1. */
  account_sign_type: string;
  /** Flag for test networks */
  testnet?: boolean;
  /** Flag for relay chains */
  relay?: boolean;
  /** Flag for ethereum based chains */
  ethereum?: boolean;
  /** network name of the relay chain (if parachain) */
  relay_chain?: string;
  /** A website or Github repo associated with the network. */
  website: string;
  /** Collection of rpc providers for the network */
  rpc: {
    [key: string]: string;
    default: string;
  };
  /** Collection of light clients for the network */
  light: {
    [key: string]: string;
    default: string;
  };
  /** Collection of block explorers for the network */
  block_explorers: {
    [key: string]: BlockExplorer;
    default: BlockExplorer;
  };
};
