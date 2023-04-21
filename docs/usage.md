## Usage 

`@zig-zag/chains` exports a list of all the chains in the Polkadot ecosystem. Each chain has all the necessary information to interact with the chain.

Encoding an address for a particular chain requires the prefix of the chain. You can find the prefix for a chain in the `prefix` property of the chain 🪄

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

More usage examples will be added soon...