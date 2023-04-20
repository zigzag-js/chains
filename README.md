# `@zigzag/chains`

A reference list for all popular Dotsama relay/parachains.

## Installation

Install the `@zigzag/chains` package.

```
npm i @zigzag/chains
```

## Usage

Import all the chain details you can use.

```tsx
import { polkadot } from '@zigzag/chains'
import { encodeAddress } from '@polkadot/keyring'
import { ApiPromise, WsProvider } from '@polkadot/api'

const provider = new WsProvider(polkadot.rpc)
const api = await ApiPromise.create({ provider })

const address = encodeAddress('0x1234567890123456789012345678901234567890', polkadot.prefix)

```

> If your bundler supports tree-shaking (most likely), only the used chains will be included in the bundle, so you don't have to worry about bundle size. 😊

## Chains

- Polkadot          [x]rpc [x]explorer 
- Kusama            [x]rpc [x]explorer
- Acala             [x]rpc [x]explorer
- Astar             [x]rpc [x]explorer
- Crust Network     [x]rpc [x]explorer

More chains coming soon...

## Contributing

Want to add another chain to the list? Make sure you read the [contributing guide](./CONTRIBUTING.md) first.