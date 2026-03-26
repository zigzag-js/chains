import { describe, it, expect } from "vitest";
import {
  allChains,
  relayChains,
  systemChains,
  parachainChains,
  testnetChains,
  mainnetChains,
  getChainById,
  getChainByNetwork,
  getChainByGenesisHash,
  defineChain,
  polkadot,
  kusama,
  moonbeam,
  westend,
} from "../index";

describe("Chain groups", () => {
  it("allChains should contain all 20 chains", () => {
    expect(allChains.length).toBe(20);
  });

  it("relayChains should contain relay chains", () => {
    expect(relayChains.length).toBeGreaterThanOrEqual(2);
    for (const chain of relayChains) {
      expect(chain.relay).toBe(true);
    }
  });

  it("systemChains should contain system parachains with paraId", () => {
    expect(systemChains.length).toBe(9);
    for (const chain of systemChains) {
      expect(chain.paraId).toBeDefined();
      expect(chain.relayChain).toBeDefined();
    }
  });

  it("parachainChains should contain third-party parachains", () => {
    expect(parachainChains.length).toBe(5);
    for (const chain of parachainChains) {
      expect(chain.paraId).toBeDefined();
    }
  });

  it("testnetChains should only contain testnets", () => {
    expect(testnetChains.length).toBeGreaterThanOrEqual(2);
    for (const chain of testnetChains) {
      expect(chain.testnet).toBe(true);
    }
  });

  it("mainnetChains should not contain any testnets", () => {
    for (const chain of mainnetChains) {
      expect(chain.testnet).toBeFalsy();
    }
  });

  it("mainnet + testnet should equal all chains", () => {
    expect(mainnetChains.length + testnetChains.length).toBe(allChains.length);
  });
});

describe("Lookup helpers", () => {
  describe("getChainById", () => {
    it("should find Polkadot by id 0", () => {
      const chain = getChainById(0);
      expect(chain).toBeDefined();
      expect(chain!.network).toBe("polkadot");
    });

    it("should find Kusama by id 2", () => {
      const chain = getChainById(2);
      expect(chain).toBeDefined();
      expect(chain!.network).toBe("kusama");
    });

    it("should return undefined for non-existent id", () => {
      expect(getChainById(999999)).toBeUndefined();
    });
  });

  describe("getChainByNetwork", () => {
    it("should find Polkadot by network slug", () => {
      const chain = getChainByNetwork("polkadot");
      expect(chain).toBeDefined();
      expect(chain!.id).toBe(0);
    });

    it("should find Moonbeam by network slug", () => {
      const chain = getChainByNetwork("moonbeam");
      expect(chain).toBeDefined();
      expect(chain!.ethereum).toBe(true);
    });

    it("should return undefined for non-existent network", () => {
      expect(getChainByNetwork("nonexistent")).toBeUndefined();
    });
  });

  describe("getChainByGenesisHash", () => {
    it("should find Polkadot by genesis hash", () => {
      const chain = getChainByGenesisHash(polkadot.genesisHash);
      expect(chain).toBeDefined();
      expect(chain!.network).toBe("polkadot");
    });

    it("should find Westend by genesis hash", () => {
      const chain = getChainByGenesisHash(westend.genesisHash);
      expect(chain).toBeDefined();
      expect(chain!.testnet).toBe(true);
    });

    it("should return undefined for non-existent hash", () => {
      expect(getChainByGenesisHash("0x0000000000000000000000000000000000000000000000000000000000000000")).toBeUndefined();
    });
  });
});

describe("defineChain", () => {
  it("should return the same chain object", () => {
    const custom = defineChain({
      id: 99999,
      name: "My Custom Chain",
      network: "my-custom",
      genesisHash: "0xabcdef0000000000000000000000000000000000000000000000000000000000",
      ss58Format: 42,
      nativeCurrency: { name: "Custom", symbol: "CUST", decimals: 12 },
      rpcUrls: { default: "wss://my-chain.example.com" },
    });

    expect(custom.id).toBe(99999);
    expect(custom.name).toBe("My Custom Chain");
    expect(custom.network).toBe("my-custom");
  });

  it("should preserve const type inference", () => {
    const custom = defineChain({
      id: 99999,
      name: "Test" as const,
      network: "test" as const,
      genesisHash: "0xabcdef0000000000000000000000000000000000000000000000000000000000",
      ss58Format: 42,
      nativeCurrency: { name: "Test", symbol: "TST", decimals: 12 },
      rpcUrls: { default: "wss://test.example.com" },
    });

    // TypeScript should infer literal types
    expect(custom.name).toBe("Test");
  });
});
