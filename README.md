# @zig-zag/chains

A typed chain registry for Polkadot SDK chains. Provides rich, tree-shakeable metadata for relay chains, system parachains, third-party parachains, and testnets -- including named RPC providers, genesis hashes, Subscan integration, light client URLs, and network topology.

Works with [Dedot](https://github.com/dedotdev/dedot), [PAPI](https://github.com/polkadot-api/polkadot-api), [LunoKit](https://github.com/Luno-lab/LunoKit), or standalone.

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Supported Chains](#supported-chains)
- [Chain Data Model](#chain-data-model)
- [Utilities](#utilities)
- [Usage Examples](#usage-examples)
- [TypeScript Support](#typescript-support)
- [Project Structure](#project-structure)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Installation

```bash
npm i @zig-zag/chains
```

```bash
pnpm add @zig-zag/chains
```

```bash
yarn add @zig-zag/chains
```

Zero runtime dependencies. If your bundler supports tree-shaking, only the chains you import will be included in your bundle.

## Quick Start

```typescript
import { polkadot, kusama, polkadotAssetHub } from "@zig-zag/chains";

// Connect to a named RPC provider
const ws = new WebSocket(polkadot.rpcUrls.dwellir);

// Use the genesis hash as a chain identifier
console.log(polkadot.genesisHash);
// '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3'

// Access native currency info
console.log(polkadot.nativeCurrency);
// { name: 'Polkadot', symbol: 'DOT', decimals: 10 }

// Check the network topology
console.log(polkadotAssetHub.paraId);      // 1000
console.log(polkadotAssetHub.relayChain);  // 'polkadot'
```

## Supported Chains

### Relay Chains

| Export | Chain | Symbol | SS58 |
|--------|-------|--------|------|
| `polkadot` | Polkadot | DOT | 0 |
| `kusama` | Kusama | KSM | 2 |

### System Parachains -- Polkadot

| Export | Chain | Para ID |
|--------|-------|---------|
| `polkadotAssetHub` | Polkadot Asset Hub | 1000 |
| `polkadotCollectives` | Polkadot Collectives | 1001 |
| `polkadotBridgeHub` | Polkadot Bridge Hub | 1002 |
| `polkadotPeople` | Polkadot People | 1004 |
| `polkadotCoretime` | Polkadot Coretime | 1005 |

### System Parachains -- Kusama

| Export | Chain | Para ID |
|--------|-------|---------|
| `kusamaAssetHub` | Kusama Asset Hub | 1000 |
| `kusamaBridgeHub` | Kusama Bridge Hub | 1002 |
| `kusamaPeople` | Kusama People | 1004 |
| `kusamaCoretime` | Kusama Coretime | 1005 |

### Third-Party Parachains

| Export | Chain | Symbol | Para ID | EVM |
|--------|-------|--------|---------|-----|
| `acala` | Acala | ACA | 2000 | |
| `moonbeam` | Moonbeam | GLMR | 2004 | Yes |
| `astar` | Astar | ASTR | 2006 | |
| `hydration` | Hydration | HDX | 2034 | |
| `phala` | Phala | PHA | 2035 | |

### Testnets

| Export | Chain | Symbol | Type |
|--------|-------|--------|------|
| `westend` | Westend | WND | Relay |
| `paseo` | Paseo | PAS | Relay |
| `westendAssetHub` | Westend Asset Hub | WND | System |
| `paseoAssetHub` | Paseo Asset Hub | PAS | System |

## Chain Data Model

Every chain object satisfies the `Chain` interface:

```typescript
import type { Chain } from "@zig-zag/chains";
```

### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | `number` | Unique numeric identifier |
| `name` | `string` | Human-readable chain name |
| `network` | `string` | URL-safe slug (`"polkadot"`, `"kusama-asset-hub"`) |
| `genesisHash` | `` `0x${string}` `` | Genesis block hash -- the primary on-chain identifier |
| `ss58Format` | `number` | SS58 address encoding prefix |
| `nativeCurrency` | `Currency` | Token name, symbol (2-6 chars), and decimals |
| `rpcUrls` | `Record<string, string>` | Named WebSocket RPC providers with a required `default` key |

### Optional Fields

| Field | Type | Description |
|-------|------|-------------|
| `paraId` | `number` | Parachain ID on the relay chain |
| `relay` | `boolean` | Whether this is a relay chain |
| `testnet` | `boolean` | Whether this is a test network |
| `ethereum` | `boolean` | Whether this chain is EVM-compatible |
| `relayChain` | `string` | Parent relay chain slug (for parachains) |
| `signType` | `"sr25519" \| "ed25519" \| "secp256k1"` | Default signing curve |
| `httpUrls` | `Record<string, string>` | Named HTTP RPC endpoints |
| `lightClientUrls` | `Record<string, string>` | Substrate Connect light client URLs |
| `website` | `string` | Project website URL |
| `chainIconUrl` | `string` | Chain logo URL or data URI |
| `blockExplorers` | `Record<string, BlockExplorer>` | Named block explorers with a `default` key |
| `subscan` | `SubscanConfig` | Subscan web URL and API URL |

### Named RPC Providers

Unlike libraries that use flat arrays for RPC URLs, `@zig-zag/chains` uses named keys so you can target a specific provider:

```typescript
import { polkadot } from "@zig-zag/chains";

polkadot.rpcUrls.default;      // 'wss://rpc.polkadot.io'
polkadot.rpcUrls.dwellir;      // 'wss://polkadot-rpc.n.dwellir.com'
polkadot.rpcUrls.ibp1;         // 'wss://polkadot.ibp.network'
polkadot.rpcUrls.onfinality;   // 'wss://polkadot.api.onfinality.io/public-ws'
polkadot.rpcUrls.radiumblock;  // 'wss://polkadot.public.curie.radiumblock.co/ws'
```

Relay chains have 9+ named providers. System parachains and third-party chains have 3-7 each.

## Utilities

### Chain Groups

Pre-built arrays for common filtering needs:

```typescript
import {
  allChains,       // All 20 chains
  relayChains,     // Polkadot, Kusama, Westend, Paseo
  systemChains,    // Asset Hub, People, Coretime, Collectives, Bridge Hub
  parachainChains, // Astar, Acala, Moonbeam, Phala, Hydration
  testnetChains,   // Westend, Paseo, Westend Asset Hub, Paseo Asset Hub
  mainnetChains,   // Everything except testnets
} from "@zig-zag/chains";
```

### Lookup Helpers

Find chains by ID, network slug, or genesis hash:

```typescript
import { getChainById, getChainByNetwork, getChainByGenesisHash } from "@zig-zag/chains";

const dot = getChainById(0);                // polkadot
const ksm = getChainByNetwork("kusama");    // kusama
const chain = getChainByGenesisHash("0x91b171bb...");  // polkadot
```

All lookups return `Chain | undefined`.

### Define Custom Chains

Use `defineChain` to create chain objects that satisfy the `Chain` interface with full type inference:

```typescript
import { defineChain } from "@zig-zag/chains";

const myChain = defineChain({
  id: 99999,
  name: "My Chain",
  network: "my-chain",
  genesisHash: "0xabcdef...",
  ss58Format: 42,
  nativeCurrency: { name: "My Token", symbol: "MYT", decimals: 12 },
  rpcUrls: { default: "wss://rpc.my-chain.io" },
});
```

## Usage Examples

### With Dedot

```typescript
import { DedotClient, WsProvider } from "dedot";
import { polkadot } from "@zig-zag/chains";

const client = await DedotClient.new(
  new WsProvider(polkadot.rpcUrls.default)
);
```

### With PAPI (polkadot-api)

```typescript
import { createClient } from "polkadot-api";
import { getWsProvider } from "polkadot-api/ws-provider/web";
import { kusama } from "@zig-zag/chains";

const client = createClient(
  getWsProvider(kusama.rpcUrls.default)
);
```

### Encoding Addresses

```typescript
import { encodeAddress } from "@polkadot/keyring";
import { astar } from "@zig-zag/chains";

const astarAddress = encodeAddress(
  "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
  astar.ss58Format
);
```

### Subscan API

```typescript
import { polkadot } from "@zig-zag/chains";

const response = await fetch(`${polkadot.subscan?.api}/api/scan/blocks`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ row: 10, page: 0 }),
});
```

### Light Client

```typescript
import { polkadot } from "@zig-zag/chains";

if (polkadot.lightClientUrls) {
  console.log(polkadot.lightClientUrls.default);
  // 'light://substrate-connect/polkadot'
}
```

## TypeScript Support

Every chain is defined with `as const satisfies Chain`, giving you full literal type inference:

```typescript
import { polkadot } from "@zig-zag/chains";

// TypeScript knows the exact literal types
polkadot.network;                // type: "polkadot" (not string)
polkadot.ss58Format;             // type: 0 (not number)
polkadot.nativeCurrency.symbol;  // type: "DOT" (not string)
```

All types are exported:

```typescript
import type { Chain, Currency, BlockExplorer, SubscanConfig, HexString } from "@zig-zag/chains";
```

## Project Structure

```
src/
  index.ts                  # Barrel exports for all chains and types
  types/
    chain.ts                # Chain, Currency, BlockExplorer, SubscanConfig, HexString
  chains/
    relay/                  # Relay chains (Polkadot, Kusama)
    system/                 # System parachains (Asset Hub, People, Coretime, ...)
    parachains/             # Third-party parachains (Astar, Acala, Moonbeam, ...)
    testnet/                # Test networks (Westend, Paseo, ...)
  __tests__/
    chains.test.ts          # Schema validation and uniqueness tests (247 tests)
```

Each chain is a single file exporting one `const` object. Adding a new chain means creating one file and adding one export line to `index.ts`.

## Development

### Prerequisites

- Node.js 18+

### Setup

```bash
git clone https://github.com/zigzag-js/chains.git
cd chains
npm install
```

### Scripts

| Command | Description |
|---------|-------------|
| `npm run build` | Build CJS + ESM + type declarations with tsup |
| `npm test` | Run validation tests (247 tests) |
| `npm run test:watch` | Run tests in watch mode |
| `npm run type-check` | Type-check without emitting |
| `npm run clean` | Remove `dist/` |

## Contributing

Adding a chain takes about 5 minutes:

1. Create a new file in the appropriate directory under `src/chains/`
2. Export a `const` using `as const satisfies Chain`
3. Add the export to `src/index.ts`
4. Run `npm test` to validate
5. Open a pull request

### Minimum required data

| Field | Where to find it |
|-------|-----------------|
| `genesisHash` | `chain_getBlockHash(0)` RPC call |
| `ss58Format` | `system_properties` RPC call or [ss58-registry](https://github.com/paritytech/ss58-registry/blob/main/ss58-registry.json) |
| `nativeCurrency` | `system_properties` RPC call |
| `rpcUrls` | [polkadot-js/apps endpoints](https://github.com/polkadot-js/apps/tree/master/packages/apps-config/src/endpoints) or chain docs |

At least 2 RPC providers (including a `default`) are required to pass validation.

## License

[MIT](./LICENSE)
