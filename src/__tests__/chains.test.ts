import { describe, it, expect } from "vitest";
import * as allExports from "../index";
import type { Chain } from "../types/chain";

// Collect all chain objects from exports (exclude type exports)
const chainEntries = Object.entries(allExports).filter(
  ([, value]) => typeof value === "object" && value !== null && "genesisHash" in value,
) as [string, Chain][];

const chains = chainEntries.map(([name, chain]) => ({ exportName: name, ...chain }));

describe("@zig-zag/chains", () => {
  it("should export at least 20 chains", () => {
    expect(chains.length).toBeGreaterThanOrEqual(20);
  });

  describe.each(chains)("$name ($network)", (chain) => {
    it("should have a valid genesisHash", () => {
      expect(chain.genesisHash).toMatch(/^0x[a-f0-9]{64}$/);
    });

    it("should have a non-empty name and network", () => {
      expect(chain.name.length).toBeGreaterThan(0);
      expect(chain.network.length).toBeGreaterThan(0);
    });

    it("should have a numeric id", () => {
      expect(typeof chain.id).toBe("number");
    });

    it("should have a valid ss58Format", () => {
      expect(typeof chain.ss58Format).toBe("number");
      expect(chain.ss58Format).toBeGreaterThanOrEqual(0);
    });

    it("should have valid nativeCurrency", () => {
      expect(chain.nativeCurrency.symbol.length).toBeGreaterThanOrEqual(2);
      expect(chain.nativeCurrency.symbol.length).toBeLessThanOrEqual(6);
      expect(chain.nativeCurrency.decimals).toBeGreaterThan(0);
    });

    it("should have a default RPC URL starting with wss://", () => {
      expect(chain.rpcUrls.default).toMatch(/^wss:\/\//);
    });

    it("should have at least 2 RPC providers", () => {
      const rpcCount = Object.keys(chain.rpcUrls).length;
      expect(rpcCount).toBeGreaterThanOrEqual(2);
    });

    it("should have all RPC URLs starting with wss://", () => {
      for (const [, url] of Object.entries(chain.rpcUrls)) {
        expect(url).toMatch(/^wss:\/\//);
      }
    });

    if (chain.httpUrls) {
      it("should have all HTTP URLs starting with https://", () => {
        for (const [, url] of Object.entries(chain.httpUrls!)) {
          expect(url).toMatch(/^https:\/\//);
        }
      });
    }

    if (chain.blockExplorers) {
      it("should have a default block explorer with valid URL", () => {
        expect(chain.blockExplorers!.default.url).toMatch(/^https:\/\//);
      });
    }

    if (chain.subscan) {
      it("should have valid subscan URLs", () => {
        expect(chain.subscan!.url).toMatch(/^https:\/\//);
        expect(chain.subscan!.api).toMatch(/^https:\/\//);
      });
    }

    if (chain.paraId) {
      it("should have a relayChain set for parachains", () => {
        expect(chain.relayChain).toBeDefined();
      });
    }

    if (chain.relay) {
      it("should not have a paraId for relay chains", () => {
        expect(chain.paraId).toBeUndefined();
      });
    }
  });

  describe("Uniqueness constraints", () => {
    it("should have unique genesis hashes", () => {
      const hashes = chains.map((c) => c.genesisHash);
      expect(new Set(hashes).size).toBe(hashes.length);
    });

    it("should have unique ids", () => {
      const ids = chains.map((c) => c.id);
      expect(new Set(ids).size).toBe(ids.length);
    });

    it("should have unique network slugs", () => {
      const networks = chains.map((c) => c.network);
      expect(new Set(networks).size).toBe(networks.length);
    });
  });

  describe("Categories", () => {
    it("should have relay chains", () => {
      const relays = chains.filter((c) => c.relay);
      expect(relays.length).toBeGreaterThanOrEqual(2);
    });

    it("should have testnets", () => {
      const testnets = chains.filter((c) => c.testnet);
      expect(testnets.length).toBeGreaterThanOrEqual(2);
    });

    it("should have parachains with paraId", () => {
      const parachains = chains.filter((c) => c.paraId);
      expect(parachains.length).toBeGreaterThanOrEqual(5);
    });
  });
});
