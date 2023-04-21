## Contibuting guidelines

Thank you for your interest in contributing to the project! Please go through the following guidelines before you start working on a pull request.

### Adding a new chain

If you want to add a new chain to `@zig-zag/chains` then you need to add a new file in the `src/chains` directory. The file should be named after the chain name. For example, if you want to add the `Polkadot` chain, then the file should be named `polkadot.ts`.


The file should export an object with the following properties:

#### Required properties

- `id` : Unique id of the chain, same as the address prefix of the chain. For example, `0` for Polkadot, `2` for Kusama

- `name`: The human readable name of the chain. For example, `Acala`.

- `prefix`: The address prefix of the chain. For example, `0` for Polkadot, `2` for Kusama.

- `network`: The network name of the chain. For example, `polkadot` for Polkadot, `kusama` for Kusama.

- `currency`: Currency should include the following properties:
  - `name`: The human readable name of the currency. For example, `Polkadot`, `Kusama`.
  - `symbol`: The symbol of the currency. For example, `DOT` for Polkadot, `KSM` for Kusama.
  - `decimals`: The number of decimals of the currency. For example, `10` for Polkadot, `12` for Kusama.

- `account_sign_type`: Signing curve for standard account. Substrate supports ed25519, sr25519, and secp256k1.

- `rpc`: RPC endpoints for the chain. It should include the following properties:
  - `default`: The default RPC endpoint for the chain. For example, `wss://rpc.polkadot.io` for Polkadot, `wss://kusama-rpc.polkadot.io` for Kusama.
  - Other RPC endpoints can be added as well. For example, you can add `onfinality: wss://kusama.api.onfinality.io/public-ws` for Kusama.

- `website`: The website of the chain. For example, `https://polkadot.network/` for Polkadot, `https://kusama.network/` for Kusama.

### Flags for chains

The following flags need to be set for each chain based on the properties of the chain:

- `testnet`: Set to `true` if the chain is a testnet. For example, `true` for `Westend`, `false` for Polkadot.

- `relay`: Set to `true` if the chain is a relay chain. For example, `true` for Polkadot, `false` for Astar.

- `para_id`: Set to the parachain id of the chain if the chain is a parachain. For example, `2000` for Acala, `2006` for Astar.

- `relay_chain` : Set to the network name of the relay chain. For example, `polkadot` for Acala, `kusama` for Moonriver.

- ethereum: Set to `true` if the chain is an Ethereum based chain. For example, `true` for Moonriver, `false` for Acala.


#### Optional properties

- `light`: Collection of light clients for the network. It should include the following properties:
  - `default`: The default light client for the chain. For example, `light://substrate-connect/kusama` for Kusama.

- `block_explorers`: Collection of block explorers for the chain. It should include the following properties:
  - `default`: The default block explorer for the chain. It should include the following properties:
    - `name`: The human readable name of the block explorer. For example, `Polkascan`.
    - `url`: The url of the block explorer. For example, `https://polkascan.io/kusama`.


### References for these properties

There are certain properties that are not self explanatory and require you to do some research. Here are some references that you can use to find the values for these properties:

- ss58-registry - [ss58-registry](https://github.com/paritytech/ss58-registry/blob/main/ss58-registry.json)
 - Polkadot Parachains - [@polkadot/apps-config](https://github.com/polkadot-js/apps/blob/ca8f445a22df131bd6743e90b7f1bc305e3e6266/packages/apps-config/src/endpoints/productionRelayPolkadot.ts)
 - Kusama Parachains - [@polkadot/apps-config](https://github.com/polkadot-js/apps/blob/ca8f445a22df131bd6743e90b7f1bc305e3e6266/packages/apps-config/src/endpoints/productionRelayKusama.ts)
