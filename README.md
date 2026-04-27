# Assignment 3 Blockchain Technologies 2

This repository contains the deliverables for the Assignment 3 brief covering advanced token standards, Layer 2 deployment preparation, oracle integration, and indexing with The Graph.

## Included deliverables

- `contracts/GameItems.sol` with ERC-1155 minting, batch minting, crafting, URI metadata support, and supply tracking
- `contracts/Vault.sol` with ERC-4626 deposit, withdraw, mint, redeem, and harvest-based yield simulation
- `contracts/SimpleAMM.sol` with liquidity and swap events suitable for L2 deployment and subgraph indexing
- `contracts/PriceFeedConsumer.sol`, `contracts/PriceDependentVault.sol`, and `contracts/MockAggregator.sol`
- `test/` suites covering all required behaviors with 33 passing tests, including swap/liquidity coverage
- `scripts/deploy.js`, `scripts/verify.js`, and `scripts/gasComparison.js`
- `subgraph/` manifest, schema, mapping, ABI, queries, and expected-results notes
- `docs/` written explanations and deployment notes
- `metadata/game-items/` sample ERC-1155 metadata files

## Commands

```bash
npm install
npm test
npm run deploy:sepolia
npm run deploy:base-sepolia
npm run verify:sepolia
npm run verify:base-sepolia
npm run quote:gas
```

## Environment

Copy `.env.example` to `.env` and fill in:

- RPC URLs for Sepolia and Base Sepolia
- a funded deployer private key
- explorer API keys
- the live Chainlink ETH/USD feed address for the target testnet

## What was verified locally

- The full Hardhat test suite passes
- The deployment script was executed successfully on the local Hardhat network
- A sample deployment record was generated at `deployments/hardhat.json`

## What still requires live credentials

The assignment brief asks for real L2 explorer links, verified contract pages, gas comparisons between Sepolia and Base Sepolia, and screenshots of transactions. Those pieces depend on a funded testnet wallet plus RPC and explorer credentials, which were not present in the workspace. Everything needed to perform those steps is included here, and the exact remaining handoff steps are documented in `docs/l2-deployment-notes.md`.
