# `@zig-zag/chains`

A reference list for all popular Dotsama relay/parachains.

## Motivation

This library is heavily inspired from the @wagmi/chains library. The intention is to provide a list of all the popular relay/parachains that are currently running on the Polkadot ecosystem. 

This library is intended to be used in conjunction with the other libraries in the ZigZag ecosystem.

## Installation

Install the `@zig-zag/chains` package.

```
npm i @zig-zag/chains
```

## Usage

`@zig-zag/chains` exports a list of all the chains in the Polkadot ecosystem. Each chain has all the necessary information to interact with the chain.

> Encoding an address for a particular chain requires the prefix of the chain. You can find the prefix for a chain in the `prefix` property of the chain 🪄

```ts
import { astar } from '@zig-zag/chains'
import { encodeAddress } from '@polkadot/keyring'

const address = encodeAddress('13nCQdALEU9dp9whYhL5pntdveZ3ijDH9CUyJTJwhatWxdUW', astar.prefix)
```

You can also use the `@zig-zag/chains` library to create an instance of the `ApiPromise` for a particular chain.

```ts
import { polkadot, kusama } from '@zig-zag/chains'
import { encodeAddress } from '@polkadot/keyring'
import { ApiPromise, WsProvider } from '@polkadot/api'

const polkadotProvider = new WsProvider(polkadot.rpc.default)
const polkadotApi = await ApiPromise.create({ provider })

const kusamaProvider = new WsProvider(kusama.rpc.onfinality)
const kusamaApi = await ApiPromise.create({ provider })

```

> If your bundler supports tree-shaking (most likely), only the used chains will be included in the bundle, so you don't have to worry about bundle size. 😊

## Chains

The following chains are currently supported:

### Relay Chains
- [`Polkadot`](./src/chains/polkadot.ts)
- [`Kusama`](./src/chains/kusama.ts)

### Polkadot parachains
- [`Acala`](./src/chains/acala.ts)
- [`Astar`](./src/chains/astar.ts)

### Development chains (coming soon)
- [`Westend`](./src/chains/westend.ts)
- [`Rococo`](./src/chains/rococo.ts)
- [`local`](./src/chains/local.ts)


More chains will be added soon...

## Contributing

Want to add another chain to the list? Make sure you read the [contributing guide](./CONTRIBUTING.md) first.

## References
The info for the chains is taken from the following sources:

 - [ss58-registry](https://github.com/paritytech/ss58-registry/blob/main/ss58-registry.json
 - Polkadot Parachains - [@polkadot/apps-config](https://github.com/polkadot-js/apps/blob/ca8f445a22df131bd6743e90b7f1bc305e3e6266/packages/apps-config/src/endpoints/productionRelayPolkadot.ts)
 - Kusama Parachains - [@polkadot/apps-config](https://github.com/polkadot-js/apps/blob/ca8f445a22df131bd6743e90b7f1bc305e3e6266/packages/apps-config/src/endpoints/productionRelayKusama.ts]